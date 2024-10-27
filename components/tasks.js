import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';

const TaskFilterScreen = () => {
    // Opgaver - en liste med opgaver og deres status
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Støvsuge', completed: true },
        { id: 2, title: 'Vaske gulv', completed: false },
        { id: 3, title: 'Rengøre badeværelse', completed: false },
        { id: 4, title: 'Tømme opvaskemaskine', completed: false },
        { id: 5, title: 'Tage skrald ud', completed: true },
    ]);

    // State til at holde styr på det valgte filter
    const [filter, setFilter] = useState('alle');

    // Filtrér opgaverne baseret på valgt filter
    const filteredTasks = tasks.filter(task => {
        if (filter === 'udført') {
            return task.completed === true;
        } else if (filter === 'mangler') {
            return task.completed === false;
        }
        return true; // Vis alle opgaver, når filteret er 'alle'
    });

    // Funktion til at ændre status på en opgave til udført
    const markAsCompleted = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: true } : task
            )
        );
    };

    // Returnér JSX for at vise UI
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Filtrér opgaver</Text>
            {/* Radio buttons til filtrering */}
            <View style={styles.radioContainer}>
                <View style={styles.radioButton}>
                    <RadioButton
                        value="alle"
                        status={filter === 'alle' ? 'checked' : 'unchecked'}
                        onPress={() => setFilter('alle')}
                    />
                    <Text>Alle</Text>
                </View>
                <View style={styles.radioButton}>
                    <RadioButton
                        value="udført"
                        status={filter === 'udført' ? 'checked' : 'unchecked'}
                        onPress={() => setFilter('udført')}
                    />
                    <Text>Udført</Text>
                </View>
                <View style={styles.radioButton}>
                    <RadioButton
                        value="mangler"
                        status={filter === 'mangler' ? 'checked' : 'unchecked'}
                        onPress={() => setFilter('mangler')}
                    />
                    <Text>Mangler</Text>
                </View>
            </View>

            {/* Vis filtrerede opgaver i en liste */}
            <FlatList
                data={filteredTasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Text>{item.title}</Text>
                        <Text>{item.completed ? 'Udført' : 'Mangler'}</Text>
                        {!item.completed && (
                            <Button
                                title="Markér som udført"
                                onPress={() => markAsCompleted(item.id)}
                            />
                        )}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default TaskFilterScreen;
