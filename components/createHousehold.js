// screens/CreateHousehold.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

const CreateHousehold = ({ navigation }) => {
  const [numMembers, setNumMembers] = useState('');
  const [hasDishwasher, setHasDishwasher] = useState(false);
  const [numBathrooms, setNumBathrooms] = useState('');

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

      <Button title="Næste" onPress={() => navigation.navigate('CreateTask')} />
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
