import axios from 'axios';
import md5 from 'md5';

const apiUrl = 'http://gateway.marvel.com/v1/public';
const privateKey = '6814d7f268efcadd7d2965b0955aaf4cc50e3e75';
const publicKey = 'ef3a44c93dea29e57dfb8f2c7678ed10';

const fetchMarvel = async (url, params) => {
  const date = new Date();
  const timestamp = date.toString();

  const data = await axios.get(`${apiUrl}${url}`, {
    params: {
      ...params,
      ts: timestamp,
      apikey: publicKey,
      hash: md5(`${timestamp}${privateKey}${publicKey}`),
    },
  });

  return data?.data?.data?.results ?? [];
};

export default fetchMarvel;
