import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
}

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={options}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen} 
        options={options}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
