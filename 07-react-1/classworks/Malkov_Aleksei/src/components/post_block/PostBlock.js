import React from 'react';
import styles from './post-block.module.css';
import moment from 'moment';
import { ReactComponent as Icon } from '../../assets/talk-icon.svg';


function PostBlock(props) {
  const date = new Date(props.info.date * 1000);
  const info = moment(date).startOf('day').fromNow();  
  const name = props.info.author;
  return (
    <div className={styles.container}>
      <span className={styles.post__info}>Posted by u/{`${name} ${String(info)}`}</span>
      <h3 className={styles.post__title}>{props.title}</h3>
      <p className={styles.post__text}>{props.text}</p>
      <span className={styles.post__comment}>
        <Icon />
        {`${props.comments.count} Comments`}
      </span>
    </div>
  );
}

export default PostBlock;
