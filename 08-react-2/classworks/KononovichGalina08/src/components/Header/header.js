import React from 'react';
import logo from './header.svg';
import iconSearch from './iconSearch.svg';
import './header.css';

const showClick = (event) => {
  console.log(event.target.value);
}  

// export default class Header extends React.Component {
//   onSearchChange = (e) => {
//     this.props.onSearchChange(e.target.value);
//   };


//   render() {
//     return (
//       <div className="header">
//         <div className="headerContainer">
//           <img src={logo}/>
//             <div className="searchContainer">
//               <img src={iconSearch}/>
//               <input 
//                 placeholder="Search" 
//                 className="inputSearch" 
//                 value={this.props.inputValue} 
//                 onChange={this.onSearchChange}
//               />
            
//             </div>
//         </div>
    
//         <div className="headerRow"></div>
//       </div>
//     )
//   }
// }


const Header = (props) => {
  console.log(props);
    return (
      <div className="header">
         <div className="headerContainer">
           <img src={logo}/>
             <div className="searchContainer">
               <img src={iconSearch}/>
               <input 
                  placeholder="Search" 
                  className="inputSearch" 
                  value={props.inputValue} 
                  onChange={props.onSearchChange}
                 />
            
            </div>
        </div>
    
        <div className="headerRow"></div>
      </div>
    )
  }
  export default Header;










// import React from 'react';
// import logoReact from './logoReact.svg';
// import './CommunityContainer.css';
// import iconError from './error.svg';


// const CommunityContainer = (props) => {
//   return (
//     props.titleData ? 
//     <div className="CommunityContainer">
//       <img src={props.titleData.icon_img? props.titleData.icon_img:logoReact}/>
//       <div className="headerSubreddit">
//         {props.titleData.title}
//       </div> 
//       <div className="txtSubreddit">
//         {props.titleData.display_name_prefixed}
//       </div> 
//     </div>
//     :
//     <div class="errorIcon">
//       <img src={iconError}/>
//       <div className="errMessage">
//           {'Sorry, there were no community results'}
//         </div> 
//     </div>
//   )
// }
// export default CommunityContainer;





// export default Header;