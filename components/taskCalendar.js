// screens/TaskCalendar.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const tasks = [
  { day: 'Mandag', task: 'Støvsuge' },
  { day: 'Tirsdag', task: 'Vaske gulv' },
  { day: 'Onsdag', task: 'Rengøre badeværelse' },
  { day: 'Torsdag', task: 'Tømme opvaskemaskine' },
  { day: 'Fredag', task: 'Tage skrald ud' },
];

const TaskCalendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rengøringsopgaver for ugen:</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.day}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.day}>{item.day}:</Text>
            <Text style={styles.task}>{item.task}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  taskItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  day: { fontSize: 18, fontWeight: 'bold' },
  task: { fontSize: 18 }
});

export default TaskCalendar;
