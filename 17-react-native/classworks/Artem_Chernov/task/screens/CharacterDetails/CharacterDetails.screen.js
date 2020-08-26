import React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './CharacterDetails.styles';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as marvelSelectors from '../../resourses/marvel/marvel.selectors';
import * as marvelActions from '../../resourses/marvel/marvel.actions';

function CharacterDetailsScreen() {
  const { params } = useRoute();
  const { item } = params;

  const dispatch = useDispatch();
  const stories = useSelector(marvelSelectors.getStories);
  const isFetching = useSelector(marvelSelectors.getStatus);

  React.useEffect(() => {
    dispatch(marvelActions.getStories(item.id));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
          <View>
            <Image
              style={styles.img}
              source={{
                uri: item.thumbnail.path + '.' + item.thumbnail.extension,
              }}
            />
          </View>
          <View>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </View>
        <View style={styles.heroDescription}>
          <Text style={styles.heroDescription__text}>
            {item.description}
          </Text>
        </View>
        <View style={styles.comics}>
          <Text style={styles.comics__header}>
            Comics
          </Text>
          {isFetching &&
          <ActivityIndicator justifyContent={'center'} alignSelf={'center'} size="large" color="#E62429"/>}
          {!isFetching &&
          stories.map((story, i) => (
            <View key={i + 'key'} style={styles.story}>
              <Image
                style={styles.story__img}
                source={{
                  uri: story.thumbnail.path + '.' + story.thumbnail.extension,
                }}
              />
              <Text style={styles.story__description}>{story.title}</Text>
            </View>
          ))
          }
        </View>
      </View>
    </ScrollView>
  );
}

export default CharacterDetailsScreen;
