import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Settings.styles';

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Image style={styles.header} source={require('../../assets/logo.png')} />
    <Text style={styles.content}>SETTINGS</Text>
  </SafeAreaView>
);

export default HomeScreen;
