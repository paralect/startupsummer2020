async function fetcherAbout(fetchReddit, value) {
  const resultUrlPrefix = `/${value}/about`;
  const aboutResult = await fetchReddit(resultUrlPrefix).then(res => res.json());
  return aboutResult;
}

export default fetcherAbout;