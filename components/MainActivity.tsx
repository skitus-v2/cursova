import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainActivity = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Water Intake Tracker</Text>

      <Text style={styles.goalText}>Today's Goal: 2000 ml</Text>
      <Text style={styles.intakeText}>Water Consumed: 500 ml</Text> {/* Замените на динамические данные */}

      <Button
        title="Enter Water Intake"
        onPress={() => navigation.navigate('WaterInputActivity')}
      />

      <Button
        title="View Statistics"
        onPress={() => navigation.navigate('StatisticsActivity')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  goalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  intakeText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default MainActivity;
