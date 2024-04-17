import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome_screen from './src/screens/Welcome_screen';
import Sign_in_screen from './src/screens/Sign_in_screen';
import Reg_screen1 from './src/screens/Reg_screen1';
import Habit_screen from './src/screens/Habits_screen';
import Reg_screen2 from './src/screens/Reg_screen2';
import Rewards_screen from './src/screens/Rewards_screen';
import Menu_screen from './src/screens/Menu_screen';
import Progression_screen from './src/screens/Progression_screen';
import Customize_screen from './src/screens/Customize_screen';
import Settings_screen from './src/screens/Settings_screen';
import Reminder_screen from './src/screens/Reminders_screen';

const Stack = createStackNavigator();

function MenuButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.menuButton}
      onPress={() => navigation.navigate('Menu')}>
      <Text style={styles.menuButtonText}>Menu</Text>
    </TouchableOpacity>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome_screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={Sign_in_screen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={Reg_screen1}
          options={{title: 'Registration'}}
        />
        <Stack.Screen
          name="HabitScreen"
          component={Habit_screen}
          options={{
            title: 'Habits',
            headerRight: () => <MenuButton />,
          }}
        />
        <Stack.Screen
          name="Register2"
          component={Reg_screen2}
          options={{title: 'Registration'}}
        />
        <Stack.Screen
          name="Rewards"
          component={Rewards_screen}
          options={{title: 'Rewards', headerRight: () => <MenuButton />}}
        />
        <Stack.Screen
          name="Menu"
          component={Menu_screen}
          options={{title: 'Menu'}}
        />
        <Stack.Screen
          name="Progression"
          component={Progression_screen}
          options={{title: 'Progress', headerRight: () => <MenuButton />}}
        />
        <Stack.Screen
          name="Customize"
          component={Customize_screen}
          options={{title: 'Customize', headerRight: () => <MenuButton />}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings_screen}
          options={{title: 'Settings', headerRight: () => <MenuButton />}}
        />
        <Stack.Screen
          name="Reminders"
          component={Reminder_screen}
          options={{title: 'Reminders', headerRight: () => <MenuButton />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  menuButton: {
    marginRight: 25,
  },
  menuButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});

export default App;
