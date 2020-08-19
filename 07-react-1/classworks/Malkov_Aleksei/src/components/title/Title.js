import React from 'react';
import styles from './title.module.css';


function Title(props) {
  if (!props.about) return null;
  function parseImage(src) {
    const newSrc = src.split('?')[0];
    return newSrc;
  }
  if (!props.search || !props.search.length) {
    console.log(props.about);
    return (
      <div className={styles.container}>
        <div className={styles.title__container}>
          <div className={styles.title__logo}>
            <img className={styles.title__image} src={parseImage(props.about.community_icon)} alt="" />
          </div>
          <div className={styles.title__main}>
            <h2 className={styles.title__head}>{props.about.display_name}</h2>
            <span className={styles.title__tag}>{props.about.display_name_prefixed}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.title__container}>
        <h2 className={styles.title__low_head}>Search results for “ <b>{props.search}</b> ”</h2>
        </div>
      </div>
    );
  }
  
}

export default Title;
