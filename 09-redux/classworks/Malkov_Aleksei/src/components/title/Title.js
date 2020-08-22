import React from 'react';
import styles from './title.module.css';
import parseImage from 'components/services/parseImage';


function Title({ about, search }) {
  if (about) {
    return (
      <div className={styles.container}>
        <div className={styles.title__container}>
          <div className={styles.title__logo}>
            <img className={styles.title__image} src={parseImage(about.community_icon)} alt="" />
          </div>
          <div className={styles.title__main}>
            <h2 className={styles.title__head}>{about.display_name}</h2>
            <span className={styles.title__tag}>{about.display_name_prefixed}</span>
          </div>
        </div>
      </div>
    );
  } else if (search) {
    return (
      <div className={styles.container}>
        <div className={styles.title__container}>
        <h2 className={styles.title__low_head}>Search results for “ <b>{search}</b> ”</h2>
        </div>
      </div>
    );
  } else return null;
  
}

export default Title;
