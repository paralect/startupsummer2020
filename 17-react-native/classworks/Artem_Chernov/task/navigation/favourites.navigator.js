import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavouritesScreen from '../screens/Favourites';
import CharacterDetailsScreen from '../screens/CharacterDetails';
import { Image }  from 'react-native';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ alignSelf: 'center', justifyContent: 'center'}}
      source={require('../assets/marvel.png')}
    />
  );
}

function FavouritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={FavouritesScreen}
        options={{
          headerStyle: {
            backgroundColor: '#202020',
          },
          headerTitle: (props) => <LogoTitle {...props}/>,
        }}
      />
      <Stack.Screen
        name="CharacterDetailsScreen"
        component={CharacterDetailsScreen}
        options={{
          headerStyle: {
            backgroundColor: '#202020',
          },
          headerLeft: null,
          headerTitle: (props) => <LogoTitle {...props}/>,
        }}
      />
    </Stack.Navigator>
  );
}

export default FavouritesNavigator;
