import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Favourite.styles';

function FavouriteScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    </View>
  );
}

export default FavouriteScreen;
