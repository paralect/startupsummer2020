import { useEffect } from 'react';
import useAxiosRequest from './useAxiosRequest';


export const useShowSubreddit = ({ url, apiToken }) => {
  const { result, loading, error, cancel } = useAxiosRequest({ url, apiToken });

  useEffect(() => () => cancel());

  return { result, loading, error, cancel };
};
