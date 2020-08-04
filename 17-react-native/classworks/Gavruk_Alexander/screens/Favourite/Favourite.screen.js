import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Favourite.styles';

function FavouriteScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../assets/logo.jpg')}
            style={styles.logo}
          />
          <View style={styles.content}>
            <Text style={styles.title}>FAVOURITE CHARACTERS</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FavouriteScreen;
