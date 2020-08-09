import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from '@expo-google-fonts/roboto-condensed';
import MyMarvelScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyMarvel" component={MyMarvelScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
