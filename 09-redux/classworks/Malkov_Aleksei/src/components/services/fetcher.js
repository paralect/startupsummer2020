async function fetcher(fetchReddit, value) {
  const data = await fetchReddit(`/subreddits/search/?q=${value}`, { method: 'GET' }).then(res => res.json());
  return data.data.children;
  /*console.log(data.data.children);
  if (!data?.data?.children?.length) return {type: 'isSearchEmpty:set', payload: {isSearchEmpty: true} };
*/
}

export default fetcher;