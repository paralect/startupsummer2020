
import React from 'react';
import ListItem from "../ListItem";
import "./MainContainer.css";

class MainContainer extends React.Component {
    render() {
        return (
            <div className="main">
            {this.props.data.map(child => (
            <ListItem key={child.data.id} body={child}/>))}
            </div>
        );
  }}
  
  export default MainContainer;