import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CommunitiesList.module.css';

// Using CSS Modules

function CommunitiesList(props) {
  const reduceMembersNumber = (membersNumber) => {
    let reducedNumber = '';
    switch(true) {
      case (membersNumber >= 1000 && membersNumber < 1000000) :
        reducedNumber = reducedNumber + (membersNumber / 1000).toFixed(1) + 'k';
        break;
      case membersNumber >= 1000000:
        reducedNumber = reducedNumber + (membersNumber / 1000000).toFixed(1) + 'm';
        break;
      default:
        break;
    }
    return reducedNumber;
  }

  const handleClick = (img, title, communityUrl) => {
    props.updateIsPostsData(props.data);
    props.getPosts(img, title, communityUrl);
  }

  return (
    <div className={styles.list}>
        {props.data.data.children.map(child => (
          <div
            key={child.data.id}>
              <Link
                className={styles['list-item']}  
                onClick={() => handleClick(child.data.header_img, child.data.title, child.data.display_name_prefixed)}            
                to={`/subreddit${child.data.url}`} >
                <img src={child.data.header_img || '/reddit-logo.svg'} alt={child.data.display_name} />
                <div className={styles.title}>
                    <span className={styles['title_name']}>{child.data.display_name_prefixed}</span>
                    <span className={styles['title_members']}>{reduceMembersNumber(child.data.subscribers)} Members</span>
                </div>
                <p>{child.data.public_description}</p>
              </Link>
          </div>
        ))}
    </div>
  );
}

export default CommunitiesList;
