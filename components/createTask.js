// screens/CreateTask.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CreateTask = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [frequency, setFrequency] = useState('weekly');
  const [assignmentType, setAssignmentType] = useState('rotation');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Rengøringsopgave:</Text>
      <TextInput
        style={styles.input}
        value={taskName}
        onChangeText={setTaskName}
      />
      
      <Text style={styles.label}>Gentagelsesfrekvens:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={frequency}
          style={styles.picker}
          onValueChange={(itemValue) => setFrequency(itemValue)}>
          <Picker.Item label="Ugentlig" value="weekly" />
          <Picker.Item label="Månedlig" value="monthly" />
          <Picker.Item label="Andet" value="other" />
        </Picker>
      </View>

      <Text style={styles.label}>Tildeling af opgave:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={assignmentType}
          style={styles.picker}
          onValueChange={(itemValue) => setAssignmentType(itemValue)}>
          <Picker.Item label="Rotation" value="rotation" />
          <Picker.Item label="Tilfældig" value="random" />
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Se Kalender" onPress={() => navigation.navigate('TaskCalendar')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    padding: 20,
    justifyContent: 'flex-start', // Start layout from top
  },
  label: { 
    fontSize: 18, 
    marginBottom: 10,
    marginTop: 20,  // Space between each section
  },
  input: { 
    borderWidth: 1, 
    padding: 10, 
    marginBottom: 20, 
    borderRadius: 5,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: { 
    height: 50, 
    width: '100%', 
  },
  buttonContainer: {
    marginTop: 30, // Add space above the button
  }
});

export default CreateTask;
