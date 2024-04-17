import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Reg_screen1 = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [country, setCountry] = useState('');

  const handleContinue = () => {
    // You can add validation logic here
    // For now, let's navigate to the next screen
    navigation.navigate('Register2');
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Section 1: Username and Password */}
        
        <View style={styles.section}>
        <Text style={styles.sectionText}>Account Setup</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        {/* Section 2: Personal Information */}
        <View style={styles.section}>
        <Text style={styles.sectionText}>Personal Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            value={age}
            onChangeText={text => setAge(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={gender}
            onChangeText={text => setGender(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Occupation"
            value={occupation}
            onChangeText={text => setOccupation(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Country"
            value={country}
            onChangeText={text => setCountry(text)}
          />
        </View>
        {/* Continue Button */}
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 75,
  },
  section: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 10,
    borderRadius: 10,
    width: '175%',
    
  },
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#020887',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 10,
    
  },
  button: {
    backgroundColor: '#020887',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Reg_screen1;