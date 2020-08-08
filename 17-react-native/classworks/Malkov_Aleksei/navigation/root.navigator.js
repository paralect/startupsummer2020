import * as React from 'react';
import Svg, { Path } from "react-native-svg"
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './home.navigator';
import FavouritesNavigator from './favourites.navigator';

import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      activeTintColor='#E62429'
      style={{ backgroundColor: '#151515' }}
    >
      <Tab.Screen
        name="My Marvel"
        component={HomeNavigator}
        options={{
          tabBarIcon: () => <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
          <Path
            d="M6 0H2a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V2a2 2 0 00-2-2zM2 6V2h4v4H2zm14-6h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V2a2 2 0 00-2-2zm-4 6V2h4v4h-4zm-6 4H2a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zm-4 6v-4h4v4H2zm14-6h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zm-4 6v-4h4v4h-4z"
            fill="#A9A9A9"
          />
        </Svg>,
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
