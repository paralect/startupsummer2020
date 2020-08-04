import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

import styles from './Settings.styles';

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.jpg')}
        style={styles.logo}
      />
      <View style={styles.content}>
        <Text style={styles.title}>SETTINGS</Text>
      </View>
    </View>
  );
}

export default SettingsScreen;
