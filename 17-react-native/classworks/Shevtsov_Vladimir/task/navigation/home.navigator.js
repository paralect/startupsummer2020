import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/Home';
import DetailsScreen from '~/screens/Details';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyMarvel" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
