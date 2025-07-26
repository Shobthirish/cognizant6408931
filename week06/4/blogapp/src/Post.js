import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: '20px' }}>
        <h5>{this.props.title}</h5>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Post;
