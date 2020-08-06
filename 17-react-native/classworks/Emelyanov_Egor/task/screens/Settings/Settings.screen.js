import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './Settings.styles';
import marvelLogo from '../../assets/logo.png';

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={marvelLogo}
      />
      <Text style={styles.settings}>SETTINGS</Text>
    </View>
  );
}

export default SettingsScreen;
