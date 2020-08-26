import React, { useState } from 'react';

import icon from '../../assets/search_icon.svg';
import { useHistory } from 'react-router-dom';

import styles from './searchbar.module.css';
console.log(styles);

export default () => {
  const [value, setValue] = useState('');
  const history = useHistory();

  const handleChange = (event) => setValue(event.target.value);
  const handleSubmit = () => {
    history.push(`/subreddits/search/${value}`);
  };

  return (
    <div className={styles.container}>
      <img className={styles.icon} src={icon} alt="search icon" />
      <form onSubmit={handleSubmit}>
        <input className={styles.input} type="text" value={value} onChange={handleChange} />
      </form>
    </div>
  );
}