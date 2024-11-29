import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Storage } from '@capacitor/storage';

const StatisticsActivity = () => {
  const dailyGoal = 2000;
  const [waterConsumed, setWaterConsumed] = useState<number>(0);

  const loadWaterData = async () => {
    const { value } = await Storage.get({ key: 'waterConsumed' });
    if (value) {
      setWaterConsumed(Number(value));
    }
  };

  const saveWaterData = async (amount: number) => {
    await Storage.set({
      key: 'waterConsumed',
      value: amount.toString(),
    });
    setWaterConsumed(amount);
  };

  const addWater = (amount: number) => {
    const newAmount = waterConsumed + amount;
    saveWaterData(newAmount);
  };

  useEffect(() => {
    loadWaterData();
  }, []);

  const progress = (waterConsumed / dailyGoal) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Water Consumption Stats</Text>
      <Text style={styles.statText}>Daily Goal: {dailyGoal} ml</Text>
      <Text style={styles.statText}>Water Consumed: {waterConsumed} ml</Text>

      <Button title="Add 250 ml" onPress={() => addWater(250)} />

      <Text style={styles.progressText}>
        {Math.round(progress)}% of your goal ({waterConsumed} ml / {dailyGoal} ml)
      </Text>
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
  statText: {
    fontSize: 18,
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    color: '#333',
    marginTop: 20,
  },
});

export default StatisticsActivity;
