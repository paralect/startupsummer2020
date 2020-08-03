import React from 'react';
import { Text, View } from 'react-native';

import styles from './Settings.styles';

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Setting Screen</Text>
        <Text style={styles.subtitle}>A lot of config</Text>
      </View>
    </View>
  );
}

export default SettingsScreen;
