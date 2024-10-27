import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateHousehold from './components/createHousehold';
import CreateTask from './components/createTask';
import TaskCalendar from './components/taskCalendar';
import Tasks from './components/tasks';
import myHousehold from './components/myHouseHold';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CreateHousehold" component={CreateHousehold} options={{ title: 'Opret Husstand' }} />
      <Tab.Screen name="CreateTask" component={CreateTask} options={{ title: 'Opret Opgave' }} />
      <Tab.Screen name="TaskCalendar" component={TaskCalendar} options={{ title: 'Kalender' }} />
      <Tab.Screen name="Tasks" component={Tasks} options={{ title: 'Opgaver' }} />
      <Tab.Screen name="myHousehold" component={myHousehold} options={{ title: 'Min Husstand' }} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
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
