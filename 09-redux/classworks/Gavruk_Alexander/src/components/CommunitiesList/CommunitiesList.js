import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CommunitiesList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import * as subredditActions from 'resources/subreddit/subreddit.actions';
import * as subredditSelectors from 'resources/subreddit/subreddit.selectors';

// Using CSS Modules

function CommunitiesList() {
  const dispatch = useDispatch();

  const data = useSelector(subredditSelectors.getSubredditData);

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
    dispatch(subredditActions.updateIsPostsData(data.hasOwnProperty('facets')));
    const communityTitleData = {
      img,
      title,
      communityUrl,
    }
    dispatch(subredditActions.updateCommunityTitleData(communityTitleData));
  }

  return (
    <div className={styles.list}>
        {data.children.map(child => (
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
