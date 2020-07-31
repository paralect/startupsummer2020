import axios from 'axios';
import md5 from 'md5';

const apiUrl = 'http://gateway.marvel.com/v1/public';
const privateKey = '3458fa6e2e9197ed27bab5e34e17976a1796017c';
const publicKey = '021ba9f9fef048d72b30998d5e0b2b80';

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
