import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

// This is a class-based component b/c it will do data fetching with its lifecycle method (componentDidMount).
// Data fetching will be done by the action creator, fetched data will be found on the payload property of the action.
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>PostList</div>;
  }
};

export default connect(null, { fetchPosts })(PostList);