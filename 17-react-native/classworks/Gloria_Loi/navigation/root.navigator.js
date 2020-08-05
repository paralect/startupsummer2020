import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyMarvelNavigator from './my-marvel.navigation';
import FavouritesNavigator from './favorites.navigation';

import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: '#202020',
        activeTintColor: '#e62429',
        activeBackgroundColor: '#202020',
        style: {
          borderTopWidth: 1,
          borderTopColor: '#e62429',
        },
      }}
    >
      <Tab.Screen
        name="MyMarvel"
        component={MyMarvelNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
