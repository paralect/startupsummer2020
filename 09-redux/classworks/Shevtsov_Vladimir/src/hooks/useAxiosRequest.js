import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxiosRequest = (props) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cancel, setCancel] = useState(() => { });

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    setLoading(true);
    setCancel(() => () => source.cancel());
    axios.get({ ...props, cancelToken: source.token })
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

  }, [props]);

  return { result, loading, error, cancel }
}

export default useAxiosRequest;
