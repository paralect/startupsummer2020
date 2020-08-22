import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../home/home_style.module.css';

import * as phraseSelectors from '../../resources/phrase/phrase.selectors';
import * as searchSelectors from '../../resources/search/search.selectors';

import no_subreddit_icon from './no_subreddit_icon.png';

function SearchPage (props) {
  const phrase = useSelector(phraseSelectors.getPhrase);
  const search = useSelector(searchSelectors.getSearch);
  const onSearchItemClick = props.onClick;

  return (
    <section className={styles.section}>
      <header className={styles.header_search}>
        Search results for "<b>{phrase}</b>"
      </header>
      <h1 className={styles.search_title}>Communities and users</h1>
      <content className={styles.search_content}>
        {search.children.map((child) => (
          <div key={child.data.id} className={styles.search_item_field} onClick={() => onSearchItemClick(child.data.display_name)}>
            <div className={styles.search_community_logo}>
              <img src={child.data.icon_img || no_subreddit_icon || child.data.community_icon} className={styles.search_subreddit_icon} />
              <div className={styles.search_title_subreddit}>
                <h1 className={styles.search_title_subreddit_name}>{child.data.display_name_prefixed}</h1>
                <h5 className={styles.search_title_subreddit_subscribers}>{child.data.subscribers} Members</h5>
              </div>
            </div>
            <div className={styles.search_community_description}>{child.data.public_description}</div>
          </div>
        ))}
      </content>
    </section>
  );
}

export default SearchPage;