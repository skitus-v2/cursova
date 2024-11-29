import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Storage } from '@capacitor/storage';

const WaterInputActivity = ({ navigation }: any) => {
  const [waterAmount, setWaterAmount] = useState<number>(0);

  const saveWaterData = async () => {
    await Storage.set({
      key: 'waterConsumed',
      value: waterAmount.toString(),
    });
    console.log(`Water consumed today: ${waterAmount} ml`);
    navigation.goBack();
  };

  const loadWaterData = async () => {
    const { value } = await Storage.get({ key: 'waterConsumed' });
    if (value) {
      setWaterAmount(Number(value));
    }
  };

  useEffect(() => {
    loadWaterData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Water Intake</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount in ml"
        value={waterAmount.toString()}
        onChangeText={(text) => setWaterAmount(Number(text))}
      />

      <Button title="Save Water Intake" onPress={saveWaterData} />
      <Text style={styles.infoText}>Total Water: {waterAmount} ml</Text>
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingLeft: 10,
  },
  infoText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default WaterInputActivity;
