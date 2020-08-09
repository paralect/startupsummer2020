export function getAllMarvels({ marvels }) {
    return marvels.all;
}

export function getFavMarvels({ marvels }) {
    return marvels.favourites;
}

export function getMarvelComics({ comics, marvels }) {
    return comics.list.find((marv) => marv._id === marvels.currMarvelId);
}