import React, {useEffect, useState} from "react";
import './SearchPage.css';
import useredditApi, { withRedditApi } from 'hooks/useRedditApi';
import {InfoBar} from "../../components/InfoBar/InfoBar";
import {SearchItem} from "../../components/SearchItem/SearchItem";
import useRedditApi from "../../hooks/useRedditApi";


const SearchPage = () =>{
  const [searchRes, setSearchRes] = useState(null);
  const [fetchReddit] = useRedditApi();

  useEffect(() => {
    async function fetch() {
      const data = await fetchReddit(`/search?q=${localStorage.getItem('searchPhrase')}&type=sr,user`).then(res => res.json());
      setSearchRes(data);
    }
    fetch();
  }, []);

  if (!searchRes) {
    return (
      <p>Loading...</p>
    );
  }
  return(<div className={'answers-area'}>
    <InfoBar text={`Search results for ${localStorage.getItem('searchPhrase')}`} inSearch={false}/>
    <section className={'posts_contaner'}>
      {searchRes.data.children.map(child => (
        <SearchItem itemName={child.data.display_name_prefixed} aboutItem={child.data.public_description} membersNum={child.data.subscribers} imgUrl={child.data.icon_img}/>
      ))}
    </section>
  </div>)
}

export default withRedditApi(SearchPage);