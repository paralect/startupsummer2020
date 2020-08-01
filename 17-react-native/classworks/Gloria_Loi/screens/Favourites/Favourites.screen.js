import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Favourites.styles';

const MyMarvelScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.header} source={require('../../assets/logo.png')} />
      <Text style={styles.title}>FAVOURITE CHARACTERS</Text>
      <View>
        <Text>Favourites Screen</Text>
        <Text style={styles.subtitle}>We all love</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyMarvelScreen;
