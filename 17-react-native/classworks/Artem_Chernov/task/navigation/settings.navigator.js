import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Settings } from '../screens/Settings/Settings.screen';

const Tab = createBottomTabNavigator();

function SettingsNavigator() {
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
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="settings" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default SettingsNavigator;
