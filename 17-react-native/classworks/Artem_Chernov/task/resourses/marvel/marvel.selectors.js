export function getCharacters({ marvel }) {
  return marvel.characters;
}

export function getStatus({ marvel }) {
  return marvel.isFetching;
}

export function getStories({ marvel }) {
  return marvel.stories;
}

export function getFavourites({ marvel }) {
  return marvel.characters.filter(e => {
    if (marvel.favourites.includes(e.id)){
      return e
    } else {
      return false
    }
  })
}

export function getFavouritesIds({ marvel }) {
  return marvel.favourites
}
