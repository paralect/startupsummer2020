import React, { useState } from 'react';
import { Text, View, Switch, Button } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './Settings.styles';

function HomeScreen() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Settings</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
