import React, { useContext, useEffect } from 'react';
import { useSearchSubreddits } from 'hooks/useSearchSubreddits';
import { RedditApiTokenContext } from 'hooks/useRedditApi';
import SubReddit from '../../components/SubReddit';

export default (props) => {
  const { query } = props.match?.params;
  const [apiToken] = useContext(RedditApiTokenContext);
  const { result, loading, error, cancel } = useSearchSubreddits({ query, apiToken });

  useEffect(() => () => cancel());

  return (
    <div>
      {result && result.data.children.map((child) => <SubReddit key={child.data.id} data={child.data} />)}
      {loading && <div>{loading}</div>}
      {error && <div>{JSON.stringify(error)}</div>}
    </div>
  );
};
