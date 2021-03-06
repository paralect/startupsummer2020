import React from 'react';
import { Text } from 'react-native';

import styles from './Settings.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';

function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.title}>SETTINGS</Text>
    </SafeAreaView>
  );
}

export default Settings;
