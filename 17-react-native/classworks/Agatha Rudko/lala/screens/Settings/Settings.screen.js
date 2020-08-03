import React, { useState } from 'react';
import { Text, View, Switch, Button } from 'react-native';

import styles from './Settings.styles';

function HomeScreen() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
    </View>
  );
}

export default HomeScreen;
