import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from '~/navigation/home.navigator';
import FavouriteScreen from '~/screens/Favourite';
import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{        
        style: {
          backgroundColor: '#151515',
        },
        activeTintColor: '#e62429',
        inactiveTintColor: '#a9a9a9',
      }}
    >
      <Tab.Screen
        name="MyMarvel"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="appstore1" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="hearto" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />
        }}
        />
    </Tab.Navigator>
  );
}

export default RootNavigator;
