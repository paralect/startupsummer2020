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
  // return (
  //   <div className="item">
  //     <div className="authorContainer">
  //       {'Posted by ' + props.item.data.author_fullname}
  //     </div> 
  //     <div className="headerItem">
  //       {props.item.data.title}
  //     </div>
  //     <div className="bodyItem">
  //       {props.item.data.selftext}
  //     </div>

  //     <div className="comments">
  //       <img src={iconComment}/> 
  //       <div className="countComments">
  //           {props.item.data.num_comments + ' Comments'}
  //       </div>
  //     </div>
  //   </div>
  // )

  // else {
  //   return (
  //     <div className="item itemSearch" onClick={() => props.clickHandler(props.inputValue)}>
  //       {/* <div className="infoAbout"> */}
  //         <img className="communityIcon" src={props.item.data.header_img}></img>
  //         {/* </div> */}
  //         <div className="infoAbout">
  //           <div className="headerCommunity" >
  //             {props.item.data.display_name_prefixed}
  //           </div>

  //           <div className="subscribers">
  //           {props.item.data.subscribers + ' Members'}
  //           </div>
            
  //       </div>
  //       <div className="description">
  //         {props.item.data.public_description}
  //       </div>
  //     </div>
  //   )
  // }


