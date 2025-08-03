import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      this.setState({ user: data.results[0], isLoading: false });
    } catch (error) {
      this.setState({ error: 'Failed to fetch user.', isLoading: false });
    }
  }

  render() {
    const { user, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p className="error">{error}</p>;
    }

    return (
      <div className="user-card">
        <img src={user.picture.large} alt="User" />
        <h2>{user.name.title} {user.name.first}</h2>
      </div>
    );
  }
}

export default Getuser;