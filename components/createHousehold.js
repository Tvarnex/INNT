// screens/CreateHousehold.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';
import { database } from './firebaseConfig'; // Husk at opdatere stien til firebaseConfig hvis nødvendigt
import { ref, push } from 'firebase/database';

const CreateHousehold = ({ navigation }) => {
  const [numMembers, setNumMembers] = useState('');
  const [hasDishwasher, setHasDishwasher] = useState(false);
  const [numBathrooms, setNumBathrooms] = useState('');

  // Funktion til at gemme husstandsinformation i Firebase
  const handleNext = () => {
    const householdRef = ref(database, 'households');
    const newHousehold = {
      numMembers: Number(numMembers),
      numBathrooms: Number(numBathrooms),
      hasDishwasher: hasDishwasher,
    };

    console.log("Sender data til Firebase:", newHousehold);

    push(householdRef, newHousehold)
      .then(() => {
        alert('Husstand gemt!');
        setNumMembers('');
        setNumBathrooms('');
        setHasDishwasher(false);
        navigation.navigate('CreateTask');
      })
      .catch(error => {
        console.error('Fejl ved gemning af husstand:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Antal personer i husstanden:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numMembers}
        onChangeText={setNumMembers}
      />

      <Text style={styles.label}>Antal badeværelser:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numBathrooms}
        onChangeText={setNumBathrooms}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Har I opvaskemaskine?</Text>
        <Switch value={hasDishwasher} onValueChange={setHasDishwasher} />
      </View>

      <Button title="Næste" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 },
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }
});

export default CreateHousehold;
