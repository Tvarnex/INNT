import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const CreateTask = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [frequency, setFrequency] = useState('weekly');
  const [assignmentType, setAssignmentType] = useState('rotation');

  // Custom Radio Button Component
  const RadioButton = ({ label, value, selected, onPress }) => {
    return (
      <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
        <View style={styles.radioButton}>
          {selected ? <View style={styles.radioButtonSelected} /> : null}
        </View>
        <Text style={styles.radioButtonLabel}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Input for Task Name */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Rengøringsopgave:</Text>
        <TextInput
          style={styles.input}
          value={taskName}
          onChangeText={setTaskName}
          placeholder="Indtast opgave"
        />
      </View>

      {/* Radio buttons for Frequency */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Gentagelsesfrekvens:</Text>
        <RadioButton
          label="Ugentlig"
          value="weekly"
          selected={frequency === 'weekly'}
          onPress={() => setFrequency('weekly')}
        />
        <RadioButton
          label="Månedlig"
          value="monthly"
          selected={frequency === 'monthly'}
          onPress={() => setFrequency('monthly')}
        />
        <RadioButton
          label="Andet"
          value="other"
          selected={frequency === 'other'}
          onPress={() => setFrequency('other')}
        />
      </View>

      {/* Radio buttons for Assignment Type */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Tildeling af opgave:</Text>
        <RadioButton
          label="Rotation"
          value="rotation"
          selected={assignmentType === 'rotation'}
          onPress={() => setAssignmentType('rotation')}
        />
        <RadioButton
          label="Tilfældig"
          value="random"
          selected={assignmentType === 'random'}
          onPress={() => setAssignmentType('random')}
        />
      </View>

      {/* Add Task Button */}
      <View style={styles.addTaskButtonContainer}>
        <Button title="Tilføj Opgave" onPress={() => { /* Placeholder, gør intet lige nu */ }} />
      </View>

      {/* Button to navigate to Calendar */}
      <View style={styles.buttonContainer}>
        <Button title="Se Kalender" onPress={() => navigation.navigate('TaskCalendar')} />
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  formGroup: {
    marginBottom: 30, // Afstand mellem felterne
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  radioButtonLabel: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 30, // Plads mellem sidste input og knappen
  },
  addTaskButtonContainer: {
    marginTop: 20, // Plads tilføjet for "Tilføj Opgave"-knappen
  },
});

export default CreateTask;
