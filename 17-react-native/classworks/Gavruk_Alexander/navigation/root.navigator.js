import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import HomeNavigator from './home.navigator';
import FavouriteNavigator from './favourite.navigator';

import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e62429',
        inactiveTintColor: '#a9a9a9',
        inactiveBackgroundColor: '#151515',
        activeBackgroundColor: '#151515',
        style: {
          height: 70,
          borderTopColor: '#e62429',
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
        name="My Marvel"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="appstore-o" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteNavigator}
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
