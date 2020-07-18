import React from 'react';
import notFound from '../../assets/images/notFound.svg'
import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <div className={s.not_found}>
        <img src={notFound} alt="not found"/>
        <p>Sorry, there are no such communities</p>
      </div>
    </>
  );
};

export default NotFound;