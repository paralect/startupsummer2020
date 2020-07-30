import React from 'react';
import styles from './search-result.module.css';
import RoundImage from 'components/round_image';
import parseImage from 'components/services/parseImage';


function SearchResult(props) {
  return (
    <div className={styles.container}>
      <RoundImage src={parseImage(props.about.community_icon)} alt={props.about.display_name_prefixed} />
      <div className={styles.titles}>
        <span className={styles.result__title}>{props.about.display_name_prefixed}</span>
        <span className={styles.result__members}>{props.about.subscribers} Members</span>
      </div>
      <div className={styles.text}>
        <span className={styles.text__span}>{props.about.public_description}</span>
      </div>
    </div>
  );
}

export default SearchResult;
