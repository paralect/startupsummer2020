import React from 'react';
import './community.css';
import LogoReact from './logoReact.svg';

class Community extends React.Component {
    render() {
      const {title, name_prefixed, community_icon, inputValue} = this.props;

      if(inputValue != '') {
        return (
          <p className="searchCommunity">Search results for {inputValue}</p>
        )
      } else {
        return (
        <div className="communityContainer">
          <img src={community_icon?community_icon:LogoReact}/>
      
          <div>
            <div className="headerSubreddit">
              {title}
            </div> 
  
            <div className="txtSubreddit">
              {name_prefixed}
            </div> 
          </div>
        </div>
        );
      }
    }
}

export default Community; 