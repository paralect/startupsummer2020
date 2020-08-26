import React from 'react';
import { useSelector } from 'react-redux';

import cry from './cry.svg';
import styles from '../home/home_style.module.css';

import * as phraseSelectors from '../../resources/phrase/phrase.selectors';

function NoSearchPage () {
  const phrase = useSelector(phraseSelectors.getPhrase);

  return (
    <section className={styles.no_results}>
      <img src={cry} />
      <div>
        Sorry, there were no community results for "<b>{phrase}</b>"
          </div>
    </section>
  );
}

export default NoSearchPage;