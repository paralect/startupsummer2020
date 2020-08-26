import React from "react";
import "./style.css";
import MainSubreddit from './MainSubreddit'
import Header from "./Header.js";
import HeaderCenter from "./HeaderCenter.js";
import HeaderTop from "./HeaderTop.js";
import SearchHeader from './SearchHeader'

import HeaderNotNull from "./HeaderNotNull.js";

export default class Main extends React.Component {
  render() {
    return (
      <div className="contextHeadHeight">
        <div >
          <HeaderTop func={this.props.func}></HeaderTop>
        </div>
        <div>
          <HeaderCenter></HeaderCenter>
        </div>
        <div>
          {this.props.headerShow ? 
            <Header dataAbout={this.props.dataAbout.data}/>
           : 
           this.props.showSearchResults?
           <SearchHeader/>:
           <MainSubreddit></MainSubreddit>
           }
        </div>
     
      </div>
    );
  }
}
