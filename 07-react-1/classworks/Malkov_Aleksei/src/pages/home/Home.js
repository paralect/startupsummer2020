import React from 'react';
import {withRedditApi} from 'hooks/useRedditApi';
import Header from 'components/header';
import Title from 'components/title';
import PostBlock from 'components/post_block';
import styles from './home.module.css';
import SearchResult from 'components/search_result';
import { ReactComponent as Face} from 'assets/face.svg';

class Home extends React.Component {
  state = {
    reactSubreddit: null,
    searchResults: null,
    about: null,
  }

  async componentDidMount() {
    const { fetchReddit } = this.props;
    const data = await fetchReddit('/r/Twitch/hot').then(res => res.json());
    const about = await fetchReddit('/r/Twitch/about').then(res => res.json());
    this.setState({ 
      reactSubreddit: data,
      searchResults: null,
      about: about.data
    });
    console.log(data.data.children);
    console.log(about);
  }
  submit = async (event, value) => {
    event.preventDefault();
    const { fetchReddit } = this.props;
    const data = await fetchReddit(`/subreddits/search/?q=${value}`, { method: 'GET' }).then(res => res.json());
    console.log(data.data.children);
    this.setState({ 
      search: value
    });
    if (!data.data.children.length) {
      this.setState({ 
        empty: true,
      });
      return;
    } else {
      this.setState({ 
        empty: false,
      });
    }
    data.data.children.forEach( async (item) => {
      const zap = `/${item.data.display_name_prefixed}/about`;
      const res = await fetchReddit(zap).then(res => res.json());
      const arr = this.state.searchResults ? [...this.state.searchResults, res.data] : [res.data];
      this.setState({ 
        searchResults: arr,
      });
    });
    
  }

  render() {
    const { reactSubreddit, searchResults, empty } = this.state;

    return (
      <main>
        <Header submit={this.submit} />
        <section className={styles.container}>
          {
            !empty && <Title about={this.state.about} search={this.state.search} />
          }
          {
            !reactSubreddit && !searchResults && <p>Loading...</p>
          }
          {
            !empty && reactSubreddit && !searchResults
            && reactSubreddit.data.children.map(child => (
              <PostBlock
                key={child.data.id} 
                title={child.data.title}
                text={child.data.selftext}
                info={{ date: child.data.created_utc, author: child.data.author }}
                comments={{ count: child.data.num_comments}}
              />
            ))
          }
          {!empty && searchResults
           && <div className={styles.search__results}>
             {searchResults.map(child => (
              child && <SearchResult
                key={child.id} 
                about={child}
              />
            ))}
            </div>
          }
          {
            empty
            && <div className={styles.error__container}>
              <div className={styles.error}>
                <Face />
                <span>Sorry, there were no community results for “ <b>{this.state.search}</b> ”</span>
              </div>
            </div>
          }
        </section>
      </main>
      
    );

  }
}

export default withRedditApi(Home);
