import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyMarvelScreen from '../screens/My-Marvel';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();

function MyMarvelNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={MyMarvelScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default MyMarvelNavigator;
