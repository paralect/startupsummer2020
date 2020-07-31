import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Home.styles';
import CharacterList from "../../components/characterList";
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context'


const someItems = ['Paralect', 'Startup Summer', 'Dan Krachkouski', 'Memes', 'Котики'];

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Text style={styles.title}>FEATURED CHARACTERS</Text>
        <CharacterList />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
