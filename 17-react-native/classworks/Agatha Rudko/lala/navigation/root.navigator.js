import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './home.navigator';
import FavouritesNavigator from './favourites.navigator';

import SettingsScreen from '~/screens/Settings';

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{activeTintColor:'#E62429', inactiveBackgroundColor:'#151515', activeBackgroundColor:'#151515'}}
    >
      <Tab.Screen
        name="My Marvel"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="appstore-o" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
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
