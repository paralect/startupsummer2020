import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './home.navigator';

import FavouritesScreen from '~/screens/Favourites';
import SettingsScreen from '~/screens/Settings';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    inactiveBackgroundColor: '#151515',
    activeBackgroundColor: '#151515',
    activeTintColor: '#E62429',
    style: {
      height: 70,
      borderTopColor: '#E62429',
    },
    tabStyle: {
      paddingTop: 14,
    },
    labelStyle: {
      paddingBottom: 14,
    }
};

function RootNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen
        name="My Marvel"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouritesScreen}
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
