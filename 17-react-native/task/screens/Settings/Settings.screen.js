import React, { useState } from 'react';
import { Text, View, Switch, Button } from 'react-native';

import logo from '../../assets/1024px-MarvelLogo.png';
import styles from './Settings.styles';
import { TextInput } from 'react-native-gesture-handler';

function HomeScreen() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logo}><img src={logo} /></View>
        <Text style={styles.title}>SETTINGS</Text>
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
