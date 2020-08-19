import React from 'react';
import Header from 'components/header'
import Pages from 'pages';
import {withRedditApi} from './hooks/useRedditApi';

class App extends React.Component {
  state = {
    searchValue: '',
    isClicked: false,
    reactSubreddit: null,
    reactAbout: null,
    reactSubreddits: null,
    subClicked: false,
  }

  getdata = async (name = 'r/react') => {
    const {fetchReddit} = this.props;
    const data = await fetchReddit(`/${name}/hot`).then(res => res.json());
    console.log('Hot', data);
    this.setState({reactSubreddit: data});
    const about = await fetchReddit(`/${name}/about`).then(res => res.json());
    console.log('About', about);
    this.setState({reactAbout: about});
    this.setState({reactSubreddits: null})
  };


  async componentDidMount() {
      this.getdata();
  }

  async componentDidUpdate(prevProps) {
    if (!prevProps.isToken && this.props.isToken) {
      this.getdata();
    }
  }


  getSubreddits = async (str) => {
    const {fetchReddit} = this.props;
    const data = await fetchReddit('/subreddits/search?q=' + str.toString()).then(res => res.json());
    this.setState({reactSubreddits: data});
    console.log('reactSubreddits', data);
    //reactSubreddits.data.children[i].data.url
  }


  handleOnChangeInput = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  handleBtnClick = (event) => {
    console.log('Button clicked')
    if (this.state.searchValue) {
      this.getSubreddits(this.state.searchValue);
    }
  }

  render() {
    return (
      <main>
        <header>
          <Header handleOnChangeInput={this.handleOnChangeInput} handleBtnClick={this.handleBtnClick} />
        </header>
        <section>
          <Pages reactSubreddit={this.state.reactSubreddit} reactAbout={this.state.reactAbout}
                 reactSubreddits={this.state.reactSubreddits} handle={this.getdata}/>
        </section>
      </main>
    );
  }
}

export default withRedditApi(App);
