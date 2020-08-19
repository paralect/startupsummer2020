import { useEffect } from 'react';
import useAxiosRequest from './useAxiosRequest';


export const useSearchSubreddits = ({ query, apiToken }) => {
 
  const url = `/subreddits/search?q=${query}`;

  const { result, loading, error, cancel } = useAxiosRequest({ url, apiToken });

  useEffect(() => () => cancel());

  return { result, loading, error, cancel };
};
