import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './header.styles';

function Header(props) {

  return (
    <View style={styles.marvel}>
      <Image
        source={require('../../assets/marvel.jpg')}
        style={styles.logo}
      />

    </View>
  );
}

export default Header;
