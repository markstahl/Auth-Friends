import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import AddFriend from './AddFriend';
import Friend from './Friend';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendList = () => {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => console.log(err));
  })

  const deleteFriend = (id) => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };

    return (
      <div>
        <h1 className="title">Friend List</h1>
        <AddFriend />
        <div className="friend-list">
          {friends.length > 0 ? 
            (friends.map(friend => {
              return (
                <div>
                  <Friend {...friend} key={friend.id} />
                  <button onClick={() => deleteFriend(friend.id)} className="button">
                    Delete Friend
                  </button>
                </div>
            )})) : (
              <Loader type="Puff" className="loader" />
            )}
        </div>
      </div>
    )
  }

export default FriendList;