export function getAllMarvels({ marvels }) {
  return marvels.all;
}

export function getFavMarvels({ marvels }) {
  return marvels.favourites;
}

export function getMarvelComics({ comics, marvels }) {
  if (comics.list && comics.list.length) return comics.list.find((marv) => marv._id === marvels.currMarvelId);
}