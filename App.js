import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Pages/Splash.js';
import Login from './Pages/Login.js';
import Main from './Pages/Main.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
