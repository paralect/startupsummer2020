import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, TouchableOpacity } from 'react-native';
import heart from '../assets/heart.png';
import activeHeart from '../assets/active-heart.png';

import * as characterActions from '../resources/characters/characters.actions';
import * as characterSelectors from '../resources/characters/characters.selectors';

export function Heart(props) {
  const { id, style } = props;

  const dispatch = useDispatch();

  const favouriteCharacterIds = useSelector(characterSelectors.getFavouriteCharacterIds);
  const characters = useSelector(characterSelectors.getCharacters);

  const isFavourite = (id) => {
    return favouriteCharacterIds.findIndex((characterId) => characterId === id) !== -1;
  }

  const onFavouriteClick = (id) => {
    if (isFavourite(id)) {
      dispatch(characterActions.favouriteCharacterIds(favouriteCharacterIds.filter((characterId) => characterId !== id)));
    } else {
      const index = characters.findIndex((character) => character.id === id);
      if (index >= 0) {
        dispatch(characterActions.favouriteCharacterIds([...favouriteCharacterIds, characters[index].id]));
      }
    }
  }

  return (
    <TouchableOpacity onPress={() => onFavouriteClick(id)} style={style}>
      <Image
        source={isFavourite(id) ? activeHeart : heart}
      />
    </TouchableOpacity>
  );
};

export default Heart;