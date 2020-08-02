import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './Favourites.styles';
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../../components/header";
import CharacterList from "../../components/characterList";
import FL from "../../components/flatList";
import fetchMarvel from "../../fetchMarvel";


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
