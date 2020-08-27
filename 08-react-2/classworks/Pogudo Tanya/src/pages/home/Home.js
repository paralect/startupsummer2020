import React, { useState, useEffect } from "react";
import { withRedditApi } from "hooks/useRedditApi";
import { Subreddit } from "./Subreddit";
import Main from "./Main.js";
import MainSubreddit from "./MainSubreddit";

function Home(props) {
  const [pageContent, setPageContent] = useState(null);
  const [dataAbout, setDataAbout] = useState(null);


  useEffect(() => {
    const func = async () => {
      const { fetchReddit } = props;
      const data = await fetchReddit("/r/react/hot").then((res) => res.json());
      setPageContent(data);
    };
    func();
  }, []);

  if (!pageContent) {
    return <p>Loading...</p>;
  }

  return (

    <section>
      <Main dataAbout={dataAbout} showHeader={props.showHeader} showSearchResults={props.showSearchResults} func={props.func} />
      <MainSubreddit/>
 <div className="body_color">
 
 {pageContent.data.children.map((child,index) => (
        index<10?(<Subreddit post={child.data} />):null
      ))}
 </div>
    </section>
  );
}

export default withRedditApi(Home);
