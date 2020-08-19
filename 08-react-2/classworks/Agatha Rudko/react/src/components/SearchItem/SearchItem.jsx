import React from "react";
import './SearchItem.css';
import placeholder from '../../assets/unnamed.png'


const SearchItem = ({itemName, membersNum, aboutItem, imgUrl}) =>{
  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }
  function handleclick() {
    document.location.assign('/home');
    localStorage.setItem('askedSubreddit', itemName)
  }
  return (<div className={'search-item'} onClick={handleclick}>
    <img className={'subreddit-img'} src={imgUrl || placeholder}/>
    <div className={'name-container'}>
    <h2 className={'post-name'}>{itemName}</h2>
    <p className={'number-of-members'}>{kFormatter(membersNum)|| 0} Members</p>
    </div>
    <p className={'aboutItem'}>{aboutItem}</p>
  </div>)
}
export {SearchItem};