import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://oauth.reddit.com';

const useAxiosRequest = ({ url, apiToken }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cancel, setCancel] = useState(() => () => { });

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const config = {
      method: 'get',
      headers: {
        'Authorization': apiToken && `Bearer ${apiToken}`,
      },
      cancelToken: source.token,
    };

    setLoading(true);
    setCancel(() => () => source.cancel());
    axios.get(`${BASE_URL}${url}`, config)
      .then((response) => {
        setResult(response.data);
        setLoading(false);
      }).catch((error) => {
        if (axios.isCancel(error)) {
          setError({ ...error, message: `Request cancelled: ${error.message}` });
        } else {
          setError(error);
        }
        setLoading(false);
      });

  }, [url, apiToken]);

  return { result, loading, error, cancel }
}

export default useAxiosRequest;
