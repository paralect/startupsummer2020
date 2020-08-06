import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyMarvelScreen from '../screens/MyMarvel';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();

function MyMarvelNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyMarvel"
        component={MyMarvelScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyMarvelNavigator;
