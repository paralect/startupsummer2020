import * as React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyMarvelNavigator from './my-marvel.navigator';
import FavouritesNavigator from './favourites.navigator';

import SettingsScreen from '../screens/Settings';


const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: '#151515',
        activeBackgroundColor: '#151515',
        activeTintColor: '#E62429',
        style: {
          height: 70,
          borderTopColor: '#E62429',
          borderTopWidth: StyleSheet.hairlineWidth * 2,
        },
        tabStyle: {
          paddingTop: 14,
        },
        labelStyle: {
          paddingBottom: 14,
        }
      }}
    >
      <Tab.Screen
        name="MyMarvel"
        component={MyMarvelNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="appstore-o" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="hearto" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
