import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyMarvelScreen from '~/screens/MyMarvel';
import DetailsScreen from '~/screens/Details';

const Stack = createStackNavigator();

function MyMarvelNavigator () {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false }}
    >
      <Stack.Screen name="MarvelLogo" component={MyMarvelScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default MyMarvelNavigator;
