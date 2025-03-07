import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodoScreen from './src/Screens/AddTodo';
import HomeScreen from './src/Screens/Home';
import DetailScreen from './src/Screens/ToDoDetail';
import { useTodos } from './src/Context/TodoContext';

const Stack = createNativeStackNavigator();

export default function MainRoute() {

  const { Todos, setTodos } = useTodos();

  function handleDelete(id) {
    setTodos(Todos.filter(todo => todo.id !== id));
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'ToDo by Albinoni',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('AddTodo')} style={{ marginRight: 15 }}>
                <Ionicons name="add-circle-outline" size={28} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params?.item.title || 'Todo Detail',
            headerRight: () => (
              <TouchableOpacity onPress={() => (
                navigation.navigate('Home'),
                handleDelete(route.params?.item.id)
              )} style={{ marginRight: 15 }}>
                <Ionicons name="trash-outline" size={28} color="#ff5588" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="AddTodo"
          component={AddTodoScreen}
          options={{ title: 'Add New Todo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
