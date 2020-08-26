import React from 'react';
import './list.css';
import Item from 'components/Item';
import Subreddits from 'components/Subreddits';
import Comments from 'components/Comments';
import iconError from './error.svg';

export default class List extends React.Component {

  state = {
    dataComments: null,
  }

  setdataComments = (dataCommentsArr) => {
    this.setState({ dataComments: dataCommentsArr});
  }

  goHome = () => {
    const {getRedditData} = this.props;
    this.setState({ dataComments: null});
    getRedditData();
  } 

  render() {
    const {renderData, inputValue, getRedditData, fetchReddit} = this.props;

    if(this.state.dataComments) {
      return (
        <div className="list">
          <button onClick={() => this.goHome()}>Go Home</button>
          {this.state.dataComments.map(item => (
            <Comments item={item.data}/>
          ))
        }
        </div>
      )
    }
  
    if(renderData.length === 0) {
      return (
        <div className="list">
          <img src={iconError}/>
          <p>Sorry, there were no community results for {inputValue}</p>
        </div>
      )
    } return (
      <div className="list">
        {renderData.map(item => (
          item.data.display_name_prefixed? <Subreddits item={item.data} getRedditData={getRedditData} /> : 
          <Item item={item.data}  fetchReddit={fetchReddit} setdataComments={this.setdataComments}/>
        ))
        }
      </div>
    )
  }
}