import React from 'react';
import './item.css';
import iconComment from './iconComment.svg';



const Item = (props) => {
  const {item, fetchReddit, setdataComments} = props;

  const getDataComments = async (permalink) => {
    const dataCommentsArr = await fetchReddit(permalink).then(res => res.json());
    setdataComments(dataCommentsArr[1].data.children);
    // this.setState({ dataComments: dataCommentsArr[1].data.children });
  }

  return (
  <div className="item">

    <div className="authorContainer">
      {'Posted by ' + item.author_fullname}
    </div> 

    <div className="headerItem">
      {item.title}
    </div>

    <div className="bodyItem">
        {item.selftext}
      </div>

    <div className="comments" onClick={() => getDataComments(item.permalink)}>
      <img src={iconComment}/>

      <div className="countComments">
          {item.num_comments + ' Comments'}
      </div>

    </div>
  </div>
  )
}

export default Item;


