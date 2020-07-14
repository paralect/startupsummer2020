
import React from 'react';
import Title from "../Title";
import "./Block.css";

class Block extends React.Component {

    render() {
        return (
        <div>
            <div className="block--orange"/>
            <div className="block"/>
            <Title title={this.props.title}/>
        </div>
          );
  }}
  
  export default Block;