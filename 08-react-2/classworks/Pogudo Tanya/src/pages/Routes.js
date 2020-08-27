import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import useRedditApi from "hooks/useRedditApi";
import Login from "pages/login";
import Callback from "pages/callback";
import Home from "pages/home";
import About from "./about/about";
import SelectItem from "./home/selectItem";

function Routes() {
  const [, , isLoggedIn] = useRedditApi();
  const [searchString, setSearchString] = useState("");
  const [display_name_prefixed, setDisplayNamePref] = useState("");
  const [header_img, setImg] = useState("");
  const [display_name, setDisplayName] = useState("");

  let func = (searchString, display_name_prefixed) => {
    setSearchString(searchString);
    setDisplayNamePref(display_name_prefixed);
    setImg(header_img);
    setDisplayName(display_name);
  };

  if (isLoggedIn) {
    return (
      <Switch>
        <Route
          path="/home/:search"
          render={() => (
            <SelectItem
              searchString={searchString}
              display_name_prefixed={display_name_prefixed}
              header_img={header_img}
              display_name={display_name}
              func={func}
            />
          )}
        />
        <Route path="/home" render={() => <Home func={func} />} />
        <Route
          path="/about/:searchArg"
          render={() => <About searchString={searchString} func={func} />}
        />
        <Redirect from="/" to="/home" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/callback" exact component={Callback} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default Routes;
