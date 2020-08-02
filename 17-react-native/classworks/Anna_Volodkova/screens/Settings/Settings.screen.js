import React from 'react';
import {Text, View} from 'react-native';

import styles from './Settings.styles';
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../../components/header";
import CharacterList from "../../components/characterList";

function SettingScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.title}>SETTINGS</Text>
    </SafeAreaView>
  );
}

export default SettingScreen;
