import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import styles from './Settings.styles';
import { TextInput } from 'react-native-gesture-handler';

function SettingsScreen() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Setting Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
