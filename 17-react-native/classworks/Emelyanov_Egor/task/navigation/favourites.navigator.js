import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavouritesScreen from '../screens/Favourites';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();

function FavouritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
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

export default FavouritesNavigator;
