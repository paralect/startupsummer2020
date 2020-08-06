import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './Story.styles';

function Story({ story }) {
  return (
    <View style={styles.story}>
      <Text style={styles.story__text}>dawdawdawdawdawdawd</Text>
      {/*<Image*/}
      {/*  style={styles.img}*/}
      {/*  source={{*/}
      {/*    uri: item.thumbnail.path + '.' + item.thumbnail.extension,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<View style={styles.description}>*/}
      {/*  <Text style={styles.description__name}>{item.name}</Text>*/}
      {/*</View>*/}
    </View>
  );
}

export default Story;
