import React, { useEffect } from 'react';
import { useSearchSubreddits } from 'hooks/useSearchSubreddits';
import SubReddit from '../../components/SubReddit';
import { useSelector } from 'react-redux';
import { getToken } from 'resources/auth/auth.selectors';

export default (props) => {
  const { query } = props.match?.params;
  const apiToken = useSelector(getToken);
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
