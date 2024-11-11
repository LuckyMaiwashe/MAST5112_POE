import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Pages/Splash';
import Login from './Pages/Login';
import OwnersScreen from './Pages/OwnersScreen';
import MainMenu from './Pages/MainMenu';
import CartPage from './Pages/CartPage';
import CheckoutScreen from './Pages/CheckoutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={Splash} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="OwnersScreen" 
          component={OwnersScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="MainMenu" 
          component={MainMenu} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CartPage" 
          component={CartPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CheckoutScreen" 
          component={CheckoutScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

