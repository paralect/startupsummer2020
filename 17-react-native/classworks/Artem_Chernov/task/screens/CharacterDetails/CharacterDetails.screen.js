import React from 'react';
import { Image, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './CharacterDetails.styles';
import { ScrollView } from 'react-native';
import Story from '../Story/Story';
import { getStories } from '../../reducers/api';
import { ContextApp } from '../../reducers/marvelReducer';

function CharacterDetailsScreen() {
  const { params } = useRoute();
  const { item } = params;
  const { state, dispatch } = React.useContext(ContextApp);

  React.useEffect(() => {
    console.log("itemitemitemitemitemitemitemitemitemitem ", item.id);
    getStories(dispatch, item.id).then(res => console.log(res));
    console.log('state.stories ', state.stories);
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
          {item.stories.items.map((story,i) => (
            <View key={i+'key'}>
              <Story story={story}/>
            </View>
          ))}
        </View>
      </View>

    </ScrollView>
  );
}

export default CharacterDetailsScreen;
