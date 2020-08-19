import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavouriteScreen from '../screens/Favourite';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
}

function FavouriteNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourite"
        component={FavouriteScreen}
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

export default FavouriteNavigator;
