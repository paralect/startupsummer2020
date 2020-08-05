import React from 'react';
import {View, Image} from 'react-native';
import styles from './header.styles';
import marvel from '../assets/marvel.png';

const Header = () => {
  return(
    <View style={styles.header}>
      <Image
        style={styles.img}
        source={marvel}
      />
    </View>
  )
}

export default Header;
