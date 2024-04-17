import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, Switch} from 'react-native';

const Reminder_screen = () => {
  const [smartReminderEnabled, setSmartReminderEnabled] = useState(false);
  const [habit1Enabled, setHabit1Enabled] = useState(false);
  const [habit2Enabled, setHabit2Enabled] = useState(false);
  const [habit3Enabled, setHabit3Enabled] = useState(false);
  const [habit4Enabled, setHabit4Enabled] = useState(false);

  const getRandomQuote = () => {
    return 'There are no constraints on the human mind, no walls around the human spirit, no barriers to our progress except those we ourselves erect.      -Ronald Reagan';
  };

  return (
    <ImageBackground
      source={require('../assets/background6.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Enable Smart Reminder</Text>
          <Switch
            trackColor={{false: '#767577', true: '#E8D7F1'}}
            thumbColor={smartReminderEnabled ? '#4A306D' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSmartReminderEnabled(!smartReminderEnabled)}
            value={smartReminderEnabled}
          />
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>
            Enable Notifications for Fitness
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#E8D7F1'}}
            thumbColor={habit1Enabled ? '#4A306D' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setHabit1Enabled(!habit1Enabled)}
            value={habit1Enabled}
          />
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>
            Enable Notifications for Mentall Health
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#E8D7F1'}}
            thumbColor={habit2Enabled ? '#4A306D' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setHabit2Enabled(!habit2Enabled)}
            value={habit2Enabled}
          />
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Enable Notifications for Study</Text>
          <Switch
            trackColor={{false: '#767577', true: '#E8D7F1'}}
            thumbColor={habit3Enabled ? '#4A306D' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setHabit3Enabled(!habit3Enabled)}
            value={habit3Enabled}
          />
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>
            Enable Notifications for Nutrition
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#E8D7F1'}}
            thumbColor={habit4Enabled ? '#4A306D' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setHabit4Enabled(!habit4Enabled)}
            value={habit4Enabled}
          />
        </View>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteTitle}>Quote of the Day:</Text>
          <Text style={styles.quoteText}>{getRandomQuote()}</Text>
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#FCF7F8',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0E273C',
  },
  quoteContainer: {
    marginTop: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
  },
  quoteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0E273C',
  },
  quoteText: {
    fontSize: 16,
    color: '#0E273C',
  },
});

export default Reminder_screen;
