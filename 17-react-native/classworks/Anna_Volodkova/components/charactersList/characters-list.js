import React from 'react';
import { TouchableOpacity, Text, FlatList } from 'react-native';

import CharacterItem from '../character';
import styles from './characters-list.styles';
import { useNavigation } from '@react-navigation/native';

function CharactersList(props) {
  const navigation = useNavigation();

  if (!props.arr) return (<Text style={styles.title}>Loading</Text>);

  const renderItem = ({ item }) => console.log(item) || (
    <TouchableOpacity
      key={item.id}
      style={styles.button}
      onPress={() => navigation.navigate('Details', { item })}
    >
      <CharacterItem
        item={item}
      />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={props.arr}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export default CharactersList;
