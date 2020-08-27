import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '~/screens/Settings';

const Stack = createStackNavigator();

function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MarvelLogo" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
