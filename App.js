//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateHousehold from './components/createHousehold';
import CreateTask from './components/createTask';
import TaskCalendar from './components/taskCalendar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateHousehold">
        <Stack.Screen name="CreateHousehold" component={CreateHousehold} options={{ title: 'Opret Husstand' }} />
        <Stack.Screen name="CreateTask" component={CreateTask} options={{ title: 'Opret Rengøringsopgave' }} />
        <Stack.Screen name="TaskCalendar" component={TaskCalendar} options={{ title: 'Kalender' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
