import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Customize_screen = () => {
  return (
    <ImageBackground
    source={require('../assets/background5.png')}
    style={styles.backgroundImage}
    resizeMode="cover"
  >
    <View style={styles.container}>
      <Text>Content for custoize_screen</Text>
    </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Customize_screen;