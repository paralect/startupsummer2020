import React from 'react';
import './CommunitiesList.css';

class CommunitiesList extends React.Component {
  constructor(props) {
    super(props);
  }

  reduceMembersNumber = (membersNumber) => {
    let reducedNumber = '';
    switch(true) {
      case (membersNumber >= 1000 && membersNumber < 1000000) :
        reducedNumber = reducedNumber + (membersNumber / 1000).toFixed(1) + 'k';
        break;
      case membersNumber >= 1000000:
        reducedNumber = reducedNumber + (membersNumber / 1000000).toFixed(1) + 'm';
        break;
      default:
        break;
    }
    return reducedNumber;
  }

  render() {
    return (
      <div className='communities-list'>
          {this.props.data.data.children.map(child => (
            <div
              key={child.data.id}
              onClick={() => this.props.getPosts(child.data.url, child.data.header_img, child.data.display_name, child.data.display_name_prefixed)}
              className='communities-list-item'
            >
                <img src={child.data.header_img || './reddit-logo.svg'} alt={child.data.display_name} />
                <div className='communities-list-item_title'>
                    <span className='communities-list-item_title_name'>{child.data.display_name_prefixed}</span>
                    <span className='communities-list-item_title_members'>{this.reduceMembersNumber(child.data.subscribers)} Members</span>
                </div>
                <p>{child.data.public_description}</p>
            </div>
          ))}
      </div>
    );
  }
}

export default CommunitiesList;
