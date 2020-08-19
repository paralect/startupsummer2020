import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';

class SearchSubreddit extends React.Component {
  state = {
    data: null,
  };

  async componentDidMount() {
    const { fetchReddit, query } = this.props;
    const data = await fetchReddit(`/subreddits/search?q=${query}&count=10`).then(res => res.json());
    this.setState({data});
  }

  render() {
    return (
      <section>
        {!this.state.data && <div>loading...</div>}
        {this.state?.data?.data?.children && JSON.stringify(this.state.data)}
      </section>
    );
  }
  
}

export default withRedditApi(SearchSubreddit);
