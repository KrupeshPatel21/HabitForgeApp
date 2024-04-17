import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import welcome_screen from '../screens/Welcome_screen';
import Sign_in_screen from '../screens/Sign_in_screen';
import Reg_screen1 from '../screens/Reg_screen1';

const Stack = createStackNavigator();

export type RootStackParamList = {
    Welcome: undefined;
    SignIn: undefined;
    Register: undefined;
  };

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" component={welcome_screen} />
      <Stack.Screen name="SignIn" component={Sign_in_screen} />
      <Stack.Screen name="Register" component={Reg_screen1} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;