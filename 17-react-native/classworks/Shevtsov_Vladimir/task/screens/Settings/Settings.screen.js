import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import styles from './Settings.styles';

function SettingsScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
