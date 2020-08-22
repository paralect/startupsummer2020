export function getAllMarvels({ marvels }) {
  return marvels.all;
}

export function getFavMarvels({ marvels }) {
  return marvels.favourites;
}

export function getMarvelComics({ comics }, id) {
  console.log(id);
  if (comics.list && comics.list.length) return comics.list.find((marv) => marv._id === id);
}