import React, { useState } from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';

import CharacterItem from "../characterItem";
import styles from './flat-list.styles';
import {useNavigation} from "@react-navigation/native";

function FL(props) {
  const navigation = useNavigation();

  if (!props.arr) return (<Text style={styles.title}>Loading</Text>);



  const renderItem = ({item}) => (
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
  );

  return (
    <FlatList
      data={props.arr}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export default FL;
