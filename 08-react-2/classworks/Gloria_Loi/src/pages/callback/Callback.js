import React, { useEffect } from "react";

import useRedditApi from "hooks/useRedditApi";

function Callback({ location }) {
  const [, setRedditApiToken] = useRedditApi();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.hash.replace("#", "?"));
    const accessToken = queryParams.get("access_token");

    setRedditApiToken(accessToken);
  });

  return <p>Loading...</p>;
}

export default Callback;
