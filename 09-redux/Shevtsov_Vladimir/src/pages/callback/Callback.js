import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../../resources/auth/auth.actions';


function Callback({ location }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.hash.replace('#', '?'));
    const accessToken = queryParams.get('access_token');

    dispatch(setToken(accessToken));
  });

  return (
    <p>Loading...</p>
  );
}

export default Callback;
