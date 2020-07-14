import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';

class Home extends React.Component {
  state = {
    reactSubreddit: null,
  }

  async componentDidMount() {
    const { fetchReddit } = this.props;
    const data = await fetchReddit('/r/react/hot').then(res => res.json());
    this.setState({ reactSubreddit: data });
  }

  render() {
    const { reactSubreddit } = this.state;

    if (!reactSubreddit) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <section>
        {reactSubreddit.data.children.map(child => (
          <div key={child.data.id}>
            <h2>{child.data.title}</h2>
            <p>{child.data.selftext}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default withRedditApi(Home);
