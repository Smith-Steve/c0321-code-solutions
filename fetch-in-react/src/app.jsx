import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      url: 'https://jsonplaceholder.typicode.com/users'
    };
  }

  componentDidMount() {
    /* your code here */
    fetch(this.state.url, { method: 'GET', headers: { 'Content-Type': 'application/json ' } })
      .then(response => response.json())
      .then(data => this.setState({ users: data, isLoading: false }))
      .catch(error => error.log(error));
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
