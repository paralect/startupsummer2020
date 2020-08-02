import React from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';

import CharacterItem from "../characterItem";
import styles from './character-list.styles';
import {useNavigation} from "@react-navigation/native";

function CharacterList(props) {
  const navigation = useNavigation();

  const arr = props.arr;

  if (!props.arr) return (<Text style={styles.title}>Loading</Text>);

  return (
      <View style={styles.list}>
        {arr.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => navigation.navigate('Details', {item})}
          >
            <CharacterItem
              item={item}
              icon={props.icon}
            />
          </TouchableOpacity>
        ))}
      </View>
  );
}

export default CharacterList;
