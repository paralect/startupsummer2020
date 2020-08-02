import React, { useState } from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';

import CharacterItem from "../characterItem";
import styles from './comicsList.styles';
import {useNavigation} from "@react-navigation/native";
import ComicsItem from "../comics";

function CL(props) {
  const navigation = useNavigation();

  if (!props.arr) return (<Text style={styles.title}>Loading</Text>);


  const renderItem = ({item}) => (
      <ComicsItem
        item={item}
      />
  );

  return (
    <FlatList
      data={props.arr}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export default CL;
