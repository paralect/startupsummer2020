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
  const isFavourite = useSelector(characterSelectors.getIsFavourite(id));

  const onFavouriteClick = (id) => {
    dispatch(characterActions.changeIsFavourite(id));
  }

  return (
    <TouchableOpacity onPress={() => onFavouriteClick(id)} style={style}>
      <Image
        source={isFavourite ? activeHeart : heart}
      />
    </TouchableOpacity>
  );
};

export default Heart;
