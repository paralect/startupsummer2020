export async function fetchBase(fetchReddit, value) {
  const data = await fetchReddit(`${value}/hot`).then(res => res.json());
  const about = await fetchReddit(`${value}/about`).then(res => res.json());
  return { data: data.data.children, about: about.data };
}

export async function fetchAbout(fetchReddit, value) {
  const resultUrlPrefix = `/${value}/about`;
  const response = await fetchReddit(resultUrlPrefix);
  const data = await response.json();
  return data;
}

export async function fetchSearch(fetchReddit, value) {
  const response = await fetchReddit(`/subreddits/search/?q=${value}`, { method: 'GET' });
  const json = await response.json();
  const data = json.data.children;
  return data;
}
