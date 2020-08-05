import React from 'react';
import {Text, View } from 'react-native';

import styles from './Favourites.styles';
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../../components/header";


function FavouriteScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.title}>FAVOURITE CHARACTERS</Text>
      <View style={styles.center}>

      </View>
    </SafeAreaView>
  );
}

export default FavouriteScreen;
