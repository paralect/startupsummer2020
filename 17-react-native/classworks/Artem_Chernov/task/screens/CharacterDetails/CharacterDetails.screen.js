import React from 'react';
import { Image, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './CharacterDetails.styles';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as marvelSelectors from '../../resourses/marvel/marvel.selectors';

function CharacterDetailsScreen() {
  const { params } = useRoute();
  const { item } = params;
  // const { state, dispatch } = React.useContext(ContextApp);

  const dispatch = useDispatch();
  const stories = useSelector(marvelSelectors.getStories(item.id))
  const isFetching = useSelector(marvelSelectors.getStatus)


  React.useEffect(() => {
    // getStories(dispatch, item.id).then(res => {});
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
          {state.stories?.map((item, i) => (
            <View key={i+'key'} style={styles.story}>
              <Image
                style={styles.story__img}
                source={{
                  uri: item.thumbnail.path + '.' + item.thumbnail.extension,
                }}
              />
              <Text style={styles.story__description}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default CharacterDetailsScreen;
