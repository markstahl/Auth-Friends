import React from 'react';

const Friend = props => {
  return (
    <div className="card">
      <h3>Name: {props.name}</h3>
      <h5>Age: {props.age}</h5>
      <h5>Email: {props.email}</h5>
    </div>
  )
}

export default Friend;