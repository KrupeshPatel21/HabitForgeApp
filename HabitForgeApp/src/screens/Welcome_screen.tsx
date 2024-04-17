import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, ImageBackground, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';



function WelcomeScreen() {
  const navigation = useNavigation();

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const startScaleAnimation = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const endScaleAnimation = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };


  return (
    
    <ImageBackground
    source={require('../assets/background.jpg')}
    style={styles.backgroundImage}
    resizeMode="cover"
  >
    <View style={styles.container}>
      <Image
        source={require('../assets/logo7.png')}
        style={styles.logo}
        resizeMode="cover"
      />
     
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#020887' }]}
        onPress={handleSignInPress}
        onPressIn={startScaleAnimation}
        onPressOut={endScaleAnimation}
      >
        <Animated.Text
          style={[
            styles.buttonText,
            { transform: [{ scale: scaleValue }] }
          ]}
        >
          Login
        </Animated.Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#020887'}]}
        onPress={handleRegisterPress}
        onPressIn={startScaleAnimation}
        onPressOut={endScaleAnimation}
      >
        <Animated.Text
          style={[
            styles.buttonText,
            { transform: [{ scale: scaleValue }] }
          ]}
        >
          Register
        </Animated.Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%', // Adjust the width as needed
    height: '100%', // Adjust the height as needed
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0)', 
    padding: 0,
    marginBottom: 30,
    alignItems: 'center', 
    
  },
  logo: {
    width: '100%',
    aspectRatio: 1.2,
    marginBottom: 50,
    borderRadius: 50,
    borderWidth: 10,
  },
  button: {
    backgroundColor: '#020887', // Changed button color to match the background of the logo
    paddingVertical: 12, // Increased padding for better touch area
    paddingHorizontal: 20, // Increased padding for better touch area
    borderRadius: 25,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center', // Center the text vertically
    borderWidth: 2, // Add border
    borderColor: '#8496E2', // Border color
  },
  buttonText: {
    color: '#fff', // Changed text color to white
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'uppercase', // Uppercase text
  },
});

export default WelcomeScreen;


/* CSS */
