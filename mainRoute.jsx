import React from 'react';
import HomeScreen from './src/Screens/Home';
import DetailScreen from './src/Screens/ToDoDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'ToDo by Albinoni' }}
        />

        <Stack.Screen name="Detail" component={DetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
