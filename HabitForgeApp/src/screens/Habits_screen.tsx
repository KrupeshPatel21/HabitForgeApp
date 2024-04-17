import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ConfettiMessage from '../components/ConfettiMessage';

const Habit_screen = () => {
  const navigation = useNavigation();
  const [habits, setHabits] = useState([
    { id: 1, name: 'Fitness', tasks: ['Run for 10 minutes.', 'Go to the gym.', 'Stretch'] },
    { id: 2, name: 'Mental Wellness', tasks: ['Medidate', 'Journal', 'Reflect'] },
    { id: 3, name: 'Study', tasks: ['Do homework.', 'Read textbook.', 'Work on project.'] },
    { id: 4, name: 'Health', tasks: ['Hydration', 'Eat 3 meals', 'Avoid junk food.'] },
  ]);
  const [habitStatus, setHabitStatus] = useState(habits.map((habit) => ({
    [habit.id]: habit.tasks.reduce((acc, task) => ({ ...acc, [task]: false }), {})
  })).reduce((acc, curr) => ({ ...acc, ...curr }), {})); // Initial status for habits and tasks
  const [points, setPoints] = useState(0); // State to keep track of points
  const [showCongrats, setShowCongrats] = useState(false);

  // Function to handle checking a task for a habit
  const handleCheck = (habitId, task) => {
    setHabitStatus((prevStatus) => ({
      ...prevStatus,
      [habitId]: { ...prevStatus[habitId], [task]: !prevStatus[habitId][task] },
    }));
    setPoints((prevPoints) => {
      let updatedPoints = prevPoints;
      if (habitStatus[habitId][task]) {
        updatedPoints -= 1; // Subtract a point if unchecking a box
      } else {
        updatedPoints += 1; // Add a point if checking a box
      }
      return updatedPoints;
    });
    // Check if all tasks for all habits are completed
    if (points === 11) {
      setShowCongrats(true); // Show congratulations message and confetti
    } else {
      setShowCongrats(false); // Hide congratulations message and confetti
    }
  };

  // Function to determine if all tasks for a habit are checked
  const allTasksChecked = (habitId) => {
    const tasks = habitStatus[habitId];
    return Object.values(tasks).every((task) => task);
  };

  // Calculate progress percentage
  const maxPoints = 12; // Maximum points to fill up the progress bar
  const progress = (points / maxPoints) * 100;

  return (
    <ImageBackground
      source={require('../assets/background3.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.row}>
          {habits.map((habit) => (
            <View key={habit.id} style={[styles.tile, allTasksChecked(habit.id) && styles.completedTile]}>
              <Text style={styles.habitName}>{habit.name}</Text>
              {habit.tasks.map((task, index) => (
                <View key={index} style={styles.tasksContainer}>
                  <TouchableOpacity
                    style={[styles.taskCheckbox, { backgroundColor: habitStatus[habit.id][task] ? 'green' : 'white' }]}
                    onPress={() => handleCheck(habit.id, task)}
                  />
                  <Text style={styles.taskText}>{task}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        <Text style={styles.progressionText}>Today's Progress:</Text>
        {/* Points Section */}
        <View style={[styles.pointsContainer, styles.progressBarContainer]}>
          <View style={[styles.progressBar, { width: `${progress}%` }]}>
            <Text style={styles.progressText}>{`${Math.round(progress)}%`}</Text>
          </View>
        </View>
        {/* Congratulations Message */}
        {showCongrats && <ConfettiMessage />}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: '#E8D7F1', // Initial color
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 5,
    elevation: 5,
    position: 'relative',
  },
  completedTile: {
    backgroundColor: 'lightgreen',
  },
  habitName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tasksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
  },
  pointsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    alignItems: 'center',
  },
  progressBarContainer: {
    height: 30,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
  progressBar: {
    position: 'absolute',
    backgroundColor: 'green',
    height: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    left: 0,
    top: 0,
  },
  progressText: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 3,
  },
  progressionText: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 295,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
});

export default Habit_screen;

