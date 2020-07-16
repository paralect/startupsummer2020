import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://oauth.reddit.com';

export const useShowSubreddit = ({ url, apiToken }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cancel, setCancel] = useState(() => () => { });

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    setLoading(true);
    setCancel(() => () => source.cancel());

    const config = {
      method: 'get',
      headers: {
        'Authorization': apiToken && `Bearer ${apiToken}`,
      },
      cancelToken: source.token,
    };

    axios.get(`${BASE_URL}/${url}`, config)
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

    return () => source.cancel();
  }, [url, apiToken]);

  return { result, loading, error, cancel }
};
