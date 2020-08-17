import axios from 'axios';
import md5 from 'md5';

const apiUrl = 'http://gateway.marvel.com/v1/public';
const privateKey = '986cfb1491a0ebff2f69139d1e458005e1cecd7f';
const publicKey = '2e77a97a5f751e873623466060a64bb6';

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
