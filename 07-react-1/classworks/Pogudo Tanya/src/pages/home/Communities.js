import React from "react";
import "./style.css";
import Student from "./react_img.png";

export default class Communities extends React.Component {
  
  render() {
    return (
      <div className="block_list">
        <div  className="img_size">
          <img
            alt=" "
            className="img_size"
            src={
              this.props.post.header_img ? this.props.post.header_img : Student
            }
          />
        </div>
        <div className="button_div">
          <button
            className="button_click_title"
            onClick={() => {
              this.props.funcHeader(this.props.post.display_name);
            }}
          >
            {this.props.post.display_name_prefixed}
          </button>

          <div className="members_style">
          
          {this.props.post.subscribers===null?
          "no this field":
          this.props.post.subscribers.toString().length === 4? 
          `${this.props.post.subscribers.toString().substring(0,1)}k Members`: 
          this.props.post.subscribers.toString().length === 5? 
          `${this.props.post.subscribers.toString().substring(0,2)}k Members`: 
          this.props.post.subscribers.toString().length === 6? 
          `${this.props.post.subscribers.toString().substring(0,3)}k Members`: 
          this.props.post.subscribers.toString().length === 7? 
          `${this.props.post.subscribers.toString().substring(0,1)}m Members`:
          this.props.post.subscribers.toString().length === 8?
          `${this.props.post.subscribers.toString().substring(0,2)}m Members`:
          this.props.post.subscribers.toString().length === 9?
          `${this.props.post.subscribers.toString().substring(0,3)}m Members`:
          "no members"
          }</div>
          </div>

              <div className="description_style">
          
            {this.props.post.public_description
              ? this.props.post.public_description
              : null}
          
        </div>
        </div>
    );
  }
}
