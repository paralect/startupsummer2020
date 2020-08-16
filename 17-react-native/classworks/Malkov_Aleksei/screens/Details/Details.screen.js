import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import * as actions from '../../resources/actions';
import * as selectors from '../../resources/selector';
import styles from './Details.styles';


function DetailsScreen() {
  const dispatch = useDispatch();
  const { params } = useRoute();
  const { item } = params;
  const comics = useSelector(selectors.getMarvelComics);
  const favourites = useSelector(selectors.getFavMarvels);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favourites.find((favM) => favM.id === item.id)) setIsFavorite(true);
    else setIsFavorite(false);
    return () => setIsFavorite(false);
  }, [favourites]);

  useEffect(() => {
    dispatch({ type: 'currMarvelId:set', payload: { currMarvelId: item.id } });
    dispatch(actions.getComicsForMarvel(item.id));
  }, []);

  function unfavourate(id) {
    dispatch(actions.unfavourite(id));
  }

  function makeFavourated(marvel) {
    dispatch(actions.makeFavourite(marvel));
  }

  function toggle(marvel) {
    if (isFavorite) unfavourate(marvel.id);
    else makeFavourated(marvel);
  }

  const comicView = (data) => {
    return (
      <View key={`${data.item.name}_${data.index}`} style={styles.comic}>
        <Image
          source={{ uri: `${data.item.images[0].path}.${data.item.images[0].extension}` }}
          style={styles.comicPoster}
        />
        <Text style={styles.comicTitle}>{data.item.title}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
          style={styles.photo}
        />
        <View style={styles.info}>
          <Text style={styles.name}>
            {item.name}
          </Text>
          <TouchableHighlight onPress={() => toggle(item)} style={styles.likebtn}>
            <AntDesign
              name={isFavorite ? 'heart' : 'hearto'}
              size={18}
              color={isFavorite ? '#ff0000' : '#BBBBBB'}
            />
          </TouchableHighlight>
        </View>
      </View>
      <View>
        <Text style={styles.biography}>
          {item.description}
        </Text>
      </View>
      <View style={styles.comicsContainer}>
        <Text style={styles.comicsTitle}>COMICS</Text>
        <FlatList
          data={comics ? comics.list : []}
          keyExtractor={(item) => item.resourceURI}
          renderItem={comicView}
        />
      </View>
    </SafeAreaView>
  );
}

export default DetailsScreen;
