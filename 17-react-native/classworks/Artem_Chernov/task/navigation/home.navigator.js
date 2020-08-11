import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/Home.screen';
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


function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
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

export default HomeNavigator;
