import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Menu_screen = ({ navigation }) => {
  
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ImageBackground
    source={require('../assets/background.jpg')}
    style={styles.backgroundImage}
    resizeMode="cover"
  >
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Tile/Button 1 */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("HabitScreen")}
        >
          <Text style={styles.buttonText}>Habits</Text>
        </TouchableOpacity>

        {/* Tile/Button 2 */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("Progression")}
        >
          <Text style={styles.buttonText}>Progression</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {/* Tile/Button 3 */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("Rewards")}
        >
          <Text style={styles.buttonText}>Rewards</Text>
        </TouchableOpacity>

        {/* Tile/Button 4 */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("Customize")}
        >
          <Text style={styles.buttonText}>Customization</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {/* Tile/Button 5 */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("Reminders")}
        >
          <Text style={styles.buttonText}>Reminders</Text>
        </TouchableOpacity>

        {/* Tile/Button 6 */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("Settings")}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      container: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderRadius: 10,
        marginBottom: 70,
        padding: 20,
        alignItems: 'center',
      },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 1, // Each button will occupy equal space in the row
    marginHorizontal: 10,
    aspectRatio: 1, 
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#020887',
    backgroundColor: '#020887',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default  Menu_screen;
