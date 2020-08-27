import React, { useState, useEffect } from "react";
import { Subreddit } from "./Subreddit";
import { withRedditApi } from "hooks/useRedditApi";
import Main from "./Main";
import Header from "./Header";

function SelectItem(props) {
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const func = async () => {
      const { fetchReddit } = props;
      const dataView = await fetchReddit(
        `/r/${props.searchString}/hot`
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
      <Header
        searchString={props.searchString}
        display_name_prefixed={props.display_name_prefixed}
        header_img={props.header_img}
        display_name={props.display_name}
      />
      <div className="body_color">
        {pageContent.data.children.map((child, index) =>
          index < 10 ? <Subreddit post={child.data} func={props.func} /> : null
        )}
      </div>
    </section>
  );
}

export default withRedditApi(SelectItem);
