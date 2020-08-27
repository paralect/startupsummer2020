import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyMarvelNavigator from './my-marvel.navigator';
import FavouritesNavigator from './favourites.navigator';
import SettingsNavigator from './settings.navigator';

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
        borderTopWidth: 0.5,
        borderTopColor: '#E62429',
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
        name="My marvel"
        component={MyMarvelNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="hearto" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
