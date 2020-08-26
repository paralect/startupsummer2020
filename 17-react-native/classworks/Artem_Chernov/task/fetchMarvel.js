import axios from 'axios';
import md5 from 'md5';

const apiUrl = 'http://gateway.marvel.com/v1/public';
const privateKey = '4b9a1d5e3a2a759d96ef450713b85e04335a25d9';
const publicKey = '7b7f1bf108faf4aae8e92d44d16eec8b';

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
