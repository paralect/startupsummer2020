import React from 'react';
import { useSelector } from 'react-redux';

import smorc from './smorc.png';

import { getInputValue } from '../../entity.selectors';

function NotFound() {
  const inputValue = useSelector(getInputValue);

  return (
    <div className="smorc">
      <img src={smorc} />
      <p>Sorry, there were no community results for “{inputValue}”</p>
    </div>
  );
}

export default NotFound;
