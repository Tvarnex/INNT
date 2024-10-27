import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert, Share, TouchableOpacity } from 'react-native';

// Opgaver for hver dag (fra tidligere opgaver)
const tasks = [
    { id: 1, day: 'Mandag', task: 'Støvsuge', completed: true },
    { id: 2, day: 'Tirsdag', task: 'Vaske gulv', completed: false },
    { id: 3, day: 'Onsdag', task: 'Rengøre badeværelse', completed: false },
    { id: 4, day: 'Torsdag', task: 'Tømme opvaskemaskine', completed: false },
    { id: 5, day: 'Fredag', task: 'Tage skrald ud', completed: true },
];

// Medlemmer af husstanden
const householdMembers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Sara Smith' },
    { id: 4, name: 'David Johnson' },
];

const HouseholdScreen = () => {
    // Beregn antal opgaver i denne uge
    const totalTasks = tasks.length;

    // Beregn antal udførte opgaver
    const completedTasks = tasks.filter(task => task.completed).length;

    // Funktion til at dele invitationslinket
    const inviteMembers = async () => {
        try {
            const result = await Share.share({
                message: 'Join our household on MyHouseholdApp! Here is your invitation link: https://myhouseholdapp.com/invite/123456',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // Hvis delingen blev udført via en specifik aktivitet
                    console.log('Deling gennemført via en specifik app.');
                } else {
                    // Deling blev udført
                    Alert.alert('Link delt!', 'Dit invitationslink er blevet delt.');
                }
            } else if (result.action === Share.dismissedAction) {
                // Brugeren afviste delingen
                Alert.alert('Deling afvist', 'Invitationslinket blev ikke delt.');
            }
        } catch (error) {
            Alert.alert('Fejl', 'Der opstod en fejl ved deling af linket.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Min Husstand</Text>

            {/* Vis husstandsmedlemmer */}
            <Text style={styles.subheader}>Husstandsmedlemmer:</Text>
            <FlatList
                data={householdMembers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.memberItem}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />

            {/* Vis antal opgaver i ugen og antal udførte opgaver */}
            <Text style={styles.subheader}>Ugens Opgaver:</Text>
            <Text>Antal opgaver i denne uge: {totalTasks}</Text>
            <Text>Antal opgaver udført: {completedTasks}</Text>
            <Text>Antal opgaver mangler: {totalTasks - completedTasks}</Text>

            {/* Knap til at dele invitationslink */}
            <TouchableOpacity style={styles.inviteButton} onPress={inviteMembers}>
                <Text style={styles.inviteButtonText}>Inviter Medlemmer</Text>
            </TouchableOpacity>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subheader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    memberItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    inviteButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        marginTop: 30,
        alignItems: 'center',
    },
    inviteButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HouseholdScreen;
