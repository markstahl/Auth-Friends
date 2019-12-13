import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
  state = {
      id: Date.now(),
      name: '',
      age: '',
      email: ''
  }

  addFriend = () => {
    axiosWithAuth()
    .post('/friends', this.state)
    .then(res => console.log(res))
    .catch(err => console.log('post error', err.response))
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.addFriend}>
          <h2 className="new-friend-title">Add a New Friend</h2>
          <input 
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input 
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChanges}
          />
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChanges}
          />
          <button>Add Friend</button>
      </form>
    )
  }
}

export default AddFriend;