export function getReactSubreddit({ subreddit }) {
    return subreddit.reactSubreddit;
}

export function getAbout({ subreddit }) {
    return subreddit.about;
}

export function getSearchResults({ search }) {
    return search.searchResults;
}

export function getSearchResultsWithAbouts({ search }) {
    return search.searchResultsWithAbouts;
}

export function getSearch({ search }) {
    return search.search;
}

export function getIsSearchEmpty({ search }) {
    return search.isSearchEmpty;
}
