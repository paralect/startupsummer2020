import React from 'react';
import s from './Header.module.css';
import Search from '../Search/Search';
import reddit_logo from '../../assets/images/reddit-logo.svg'
import react_logo from '../../assets/images/react-logo.svg'
import {withRedditApi} from '../../hooks/useRedditApi';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      infoAboutSubreddit: null,
    };
  }

  async componentDidMount() {
    const { fetchReddit } = this.props;
    const dataAboutSubreddit = await fetchReddit('/r/react/about').then(res => res.json());
    this.setState({infoAboutSubreddit: dataAboutSubreddit})
  }

  handleClick = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }


  render() {
    const { infoAboutSubreddit } = this.state;

    if (!infoAboutSubreddit) {
      return (
          <p>Loading...</p>
      );
    }

    return (
        <>
          <div className={s.header}>
            <img src={reddit_logo} alt="reddit logo" className={s.header__logo}/>
            <Search
                inputValue={this.state.inputValue}
                handleClick={this.handleClick}
                sendSearchRequest = {this.props.sendSearchRequest}
            />
          </div>
          <div className={s.header__footer + " " + s.bg_cl_orange}>

          </div>
          <div className={s.header__footer}>
            <div className={s.header__footer__logo}>
              <img  src={this.props.img || react_logo} alt="logo"/>
              <h1>{this.props.display_name || 'no name'}</h1>
            </div>
          </div>
        </>
  );
  }
}

export default withRedditApi(Header);