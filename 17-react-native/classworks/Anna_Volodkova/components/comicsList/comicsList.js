import React from 'react';
import { Text, FlatList } from 'react-native';

import styles from './comicsList.styles';
import ComicsItem from '../comicsItem';

function ComicsList(props) {

  if (!props.arr) return (<Text style={styles.title}>Loading</Text>);

  const renderItem = ({ item }) => (
      <ComicsItem
        item={item}
      />
  );

  return (
    <FlatList
      data={props.comics}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export default ComicsList;
