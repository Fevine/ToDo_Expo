import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTodos } from './src/Context/TodoContext';
import AddTodoScreen from './src/Screens/AddTodo';
import HomeScreen from './src/Screens/Home';
import DetailScreen from './src/Screens/ToDoDetail';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function MainRoute() {

  const { Todos, setTodos } = useTodos();

  const [loaded, error] = useFonts({
    'Freehand-Regular': require('./assets/fonts/Freehand-Regular.ttf'),
    'Chewy-Regular': require('./assets/fonts/Chewy-Regular.ttf'),
    'ComicNeue-Regular': require('./assets/fonts/ComicNeue-Regular.ttf'),
    'Pacifico-Regular': require('./assets/fonts/Pacifico-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Nunito-Regular': require('./assets/fonts/Nunito-VariableFont_wght.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf'),
    'WDX-Regular': require('./assets/fonts/WDXLLubrifontTC-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  function handleDelete(id) {
    setTodos(Todos.filter(todo => todo.id !== id));
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitleStyle: styles.headerTitleStyle,
        }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: 'ToDo by Albinoni',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('AddTodo')} style={styles.addBtn}>
                  <Ionicons name="add-circle-outline" size={32} color="blue" />
                </TouchableOpacity>
              ),
            })}
          />

          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={({ route, navigation }) => ({
              title: route.params?.item.title || 'Todo Detail',
              headerRight: () => (
                <TouchableOpacity onPress={() => (
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                  }),
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
            options={{
              title: 'Create New ToDo',
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    width: 40,
    height: 40,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(38, 241, 48, 0.1)',
    borderRadius: 20,
  },
  headerTitleStyle: {
    fontFamily: "Pacifico-Regular",
    fontSize: 24,
  },
});