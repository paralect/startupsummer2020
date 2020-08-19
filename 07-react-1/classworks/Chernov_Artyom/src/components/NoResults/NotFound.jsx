import React from 'react';
import notFound from '../../assets/images/notFound.svg'
import s from './NotFound.module.css';

const NotFound = ({searchReq}) => {
  return (
    <>
      <div className={s.not_found}>
        <img src={notFound} alt="not found"/>
        <p>Sorry, there were no community results for "{searchReq}"</p>
      </div>
    </>
  );
};

export default NotFound;