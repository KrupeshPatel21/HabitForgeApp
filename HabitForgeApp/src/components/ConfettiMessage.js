import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ConfettiCannon from 'react-native-confetti-cannon';


const ConfettiMessage = ({onClose}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false); // Hide the congratulatory message box
  };

  if (!isVisible) {
    return null; // Don't render anything if the message box is hidden
  }
  const navigation = useNavigation();
  const handleRewards = () => {
    navigation.navigate('Rewards');
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>
          Congratulations! You completed all your tasks! Make sure to claim your
          rewards!
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRewards} style={styles.RewardButton}>
            <Text style={styles.buttonText}>Claim Rewards!</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  messageBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  closeButton: {
    backgroundColor: '#020887',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  RewardButton: {
    backgroundColor: '#020887',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default ConfettiMessage;
