import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './components/PlantCatalogScreen';
import DetailsSceeen from './components/PlantProfileScreen';
import CalendarScreen from './components/CalendarScreen';
import {StatusBar} from 'react-native';
import COLORS from './consts/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{title: "Calendar"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
