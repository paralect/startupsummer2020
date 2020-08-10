import React from 'react';
import { View, Image } from 'react-native';

import styles from './header.styles';

import marvel from '../../assets/marvel.jpg';

function Header() {
  return (
    <View style={styles.marvel}>
      <Image
        source={marvel}
        style={styles.logo}
      />
    </View>
  );
}

export default Header;
