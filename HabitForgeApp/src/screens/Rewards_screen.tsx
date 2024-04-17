import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Animated } from 'react-native';

const Rewards_screen = () => {
  const [selectedTile, setSelectedTile] = useState(null);
  const [animation] = useState(new Animated.Value(0));

  const handleTileClick = (tileIndex) => {
    setSelectedTile(tileIndex);
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  const confirmSelection = () => {
    if (selectedTile !== null) {
      // Perform confirmation actions here
      // For now, just log the selected tile index
      console.log("Confirmed selection:", selectedTile);
    }
  };

  const tileStyle = (tileIndex) => {
    return {
      borderColor: selectedTile === tileIndex ? animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['transparent', 'green']
      }) : 'transparent'
    };
  };

  return (
    <ImageBackground
      source={require('../assets/background4.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      
      <View style={styles.container}>
         {/* Textbox */}
         <Text style={styles.textBox}>
          You can select your reward and it will automatically be awarded once you complete your tasks! Remember rewards change every day!
        </Text>
        {/* Row 1 */}
        <View style={styles.row}>
          {/* Tile 1 */}
          <TouchableOpacity onPress={() => handleTileClick(0)}>
            <Animated.View style={[styles.tile, tileStyle(0)]}>
              {/* Replace 'reward1.png' with the path to your first image */}
              <ImageBackground
                source={require('../assets/reward1.png')}
                style={styles.tileBackground}
                resizeMode="cover"
              >
                {/* Your content for the first tile */}
                <Text>Cozy</Text>
              </ImageBackground>
            </Animated.View>
          </TouchableOpacity>

          {/* Tile 2 */}
          <TouchableOpacity onPress={() => handleTileClick(1)}>
            <Animated.View style={[styles.tile, tileStyle(1)]}>
              {/* Replace 'reward2.png' with the path to your second image */}
              <ImageBackground
                source={require('../assets/reward2.png')}
                style={styles.tileBackground}
                resizeMode="cover"
              >
                {/* Your content for the second tile */}
                <Text>Energetic</Text>
              </ImageBackground>
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          {/* Tile 3 */}
          <TouchableOpacity onPress={() => handleTileClick(2)}>
            <Animated.View style={[styles.tile, tileStyle(2)]}>
              {/* Replace 'reward3.png' with the path to your third image */}
              <ImageBackground
                source={require('../assets/reward3.png')}
                style={styles.tileBackground}
                resizeMode="cover"
              >
                {/* Your content for the third tile */}
                <Text>Old School</Text>
              </ImageBackground>
            </Animated.View>
          </TouchableOpacity>

          {/* Tile 4 */}
          <TouchableOpacity onPress={() => handleTileClick(3)}>
            <Animated.View style={[styles.tile, tileStyle(3)]}>
              {/* Replace 'reward4.png' with the path to your fourth image */}
              <ImageBackground
                source={require('../assets/reward4.png')}
                style={styles.tileBackground}
                resizeMode="cover"
              >
                {/* Your content for the fourth tile */}
                <Text>Retro</Text>
              </ImageBackground>
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          {/* Tile 5 */}
          <TouchableOpacity onPress={() => handleTileClick(4)}>
            <Animated.View style={[styles.tile, tileStyle(4)]}>
              {/* Replace 'reward5.png' with the path to your fifth image */}
              <ImageBackground
                source={require('../assets/reward7.png')}
                style={styles.tileBackground}
                resizeMode="cover"
              >
                {/* Your content for the fifth tile */}
                <Text>Ocean</Text>
              </ImageBackground>
            </Animated.View>
          </TouchableOpacity>

          {/* Tile 6 */}
          <TouchableOpacity onPress={() => handleTileClick(5)}>
            <Animated.View style={[styles.tile, tileStyle(5)]}>
              {/* Replace 'reward6.png' with the path to your sixth image */}
              <ImageBackground
                source={require('../assets/reward6.png')}
                style={styles.tileBackground}
                resizeMode="cover"
              >
                {/* Your content for the sixth tile */}
                <Text>Funky</Text>
              </ImageBackground>
            </Animated.View>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'flex-start',
  },
  container: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile: {
    width: 150,
    height: 150,
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  tileBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBox: {
    marginVertical: 20,
    textAlign: 'justify',
    borderWidth: 1, 
    padding: 20,
    borderColor: 'black',
    backgroundColor: 'white',
    fontWeight: '700',
    
  }
});

export default Rewards_screen;
