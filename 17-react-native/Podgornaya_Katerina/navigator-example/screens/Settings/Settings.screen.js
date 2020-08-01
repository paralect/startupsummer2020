import React, { useState } from 'react';
import { Text, View, Switch, Button } from 'react-native';

import styles from './Settings.styles';
import { TextInput } from 'react-native-gesture-handler';

function HomeScreen() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Setting Screen</Text>
        <Text style={styles.subtitle}>A lot of config</Text>
        <View style={styles.content}>
          <Switch value={isTrue} onValueChange={setIsTrue} />
          <Button title="Crash this app" />
          <TextInput />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
