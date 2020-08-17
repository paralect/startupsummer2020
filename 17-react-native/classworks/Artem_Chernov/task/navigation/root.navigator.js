import * as React from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './home.navigator';
import Image from 'react-native';
import { SettingsNavigator } from './settings.navigator';
import Settings from '../screens/Settings/Settings.screen';
import FavouritesNavigator from './favourites.navigator';
// import FavouritesNavigator from './favourites.navigator';
//
// import SettingsScreen from '~/screens/Settings';

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: '#A9A9A9',
        style: {
          backgroundColor: '#151515',
          borderTopWidth: 0.5,
          borderTopColor: '#E62429',
        }
      }}
    >
      <Tab.Screen
        name="My Marvel"
        component={HomeNavigator}
        screenOptions={{
          headerShown: false
        }}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="grid" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="heart-o" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="settings" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
