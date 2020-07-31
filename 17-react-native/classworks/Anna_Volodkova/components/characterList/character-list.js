import React from 'react';
import {Text, View} from 'react-native';

import CharacterItem from "../characterItem";
import styles from './character-list.styles';

function CharacterList(props) {
  const arr = [
    {
      src: 'https://ca.slack-edge.com/T016YD6TV41-U0179KV8Q64-13a22c8f9eae-512',
      nickname: 'nick name',
      fullName: 'full name'
    },
  ]

  return (
    <View style={styles.list}>
      {arr.map(item => (
        <TouchableOpacity
          key={item}
          style={styles.button}
          onPress={() => navigation.navigate('Details', {item})}
        >
          <CharacterItem
            src={item.src}
            nickname={item.nickname}
            fullName={item.fullName}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default CharacterList;
