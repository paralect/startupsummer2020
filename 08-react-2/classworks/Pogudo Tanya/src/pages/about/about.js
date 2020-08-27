import React, { useState, useEffect } from "react";
import Main from "pages/home/Main";
import Communities from "pages/home/Communities";
import { withRedditApi } from "hooks/useRedditApi";
import HeaderSearchRes from "../home/HeaderSearchRes";
import SearchHeader from "pages/home/SearchHeader";

function About(props) {
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const func = async () => {
      const { fetchReddit } = props;
      const dataView = await fetchReddit(
        `/subreddits/search?q=${props.searchString}`
      ).then((res) => res.json());
      setPageContent(dataView);
    };
    func();
  }, []);

  if (!pageContent) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Main func={props.func} />
      <SearchHeader/>
      <div className="body_color">
        {pageContent.data.children.length < 1 ? (
          <HeaderSearchRes />
        ) :  (
          pageContent.data.children.map((child, index) =>
            index < 10 ? (
              <Communities post={child.data} func={props.func} />
            ) : null
          )
        )}
      </div>
    </section>
  );
}

export default withRedditApi(About);
