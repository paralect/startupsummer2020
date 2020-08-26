import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavouritesScreen from '~/screens/Favourites';
import DetailsScreen from '~/screens/CharacterDetails';

const Stack = createStackNavigator();

function FavouritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default FavouritesNavigator;
