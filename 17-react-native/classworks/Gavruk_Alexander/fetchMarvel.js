import axios from 'axios';
import md5 from 'md5';

const apiUrl = 'http://gateway.marvel.com/v1/public';
const privateKey = 'b086a63da5f6f745662ee9e9b608fe152d0298d7';
const publicKey = '45f8488b367c64c572748e5a956ee4a1';

const fetchMarvel = (url, params) => {
  const date = new Date();
  const timestamp = date.toString();

  return axios.get(`${apiUrl}${url}`, {
    params: {
      ...params,
      ts: timestamp,
      apikey: publicKey,
      hash: md5(`${timestamp}${privateKey}${publicKey}`),
    },
  });
}

export default fetchMarvel;
