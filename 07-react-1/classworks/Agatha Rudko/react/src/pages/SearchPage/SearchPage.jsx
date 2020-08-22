import React from "react";
import './SearchPage.css';
import { withRedditApi } from 'hooks/useRedditApi';
import {InfoBar} from "../../components/InfoBar/InfoBar";
import {SearchItem} from "../../components/SearchItem/SearchItem";

class SearchPage extends React.Component {
  state = {
    searchRes: null,
  }

  async componentDidMount() {
    const { fetchReddit } = this.props;
    const data = await fetchReddit(`/search?q=${localStorage.getItem('searchPhrase')}&type=sr,user`).then(res => res.json());
    this.setState({ searchRes: data });
  }

  render() {
    const { searchRes } = this.state;

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

}

export default withRedditApi(SearchPage);