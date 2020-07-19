import React from "react";
import "./style.css";
import RedditSvg from "./img/reddit.svg";

export default class HeaderTop extends React.Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="headButtomTop">
        <div>
          <img alt="" src={RedditSvg} className="ImgMargin"></img>
        </div>
        <div>
          <input
            className="search"
            type="text"
            value={this.state.value}
            placeholder="Search"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button
            className="inputMargin"
            type="submit"
            onClick={() => {
              this.props.func(this.state.value);
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
