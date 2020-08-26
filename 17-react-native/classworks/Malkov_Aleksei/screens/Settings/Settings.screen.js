import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Settings.styles';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>SETTINGS</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
