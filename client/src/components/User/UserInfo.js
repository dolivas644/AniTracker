import React from 'react';
import './User.css';

const UserInfo = (props) => {
  let user = props.user;
  console.log(user);
 
  return (
    <div>
      <div className="profileContent">
        <div className="col-md text-center text-md-left">
        <img src={user.picture}
            alt="Profile"
            className="profileImg"
          />
          <h2>Name: {user.name}</h2>
        </div>
        <div className="col-md text-center text-md-left">
          <h2>Nickname: {user.nickname}</h2>
        </div>
        <div className="col-md text-center text-md-left">
          <h2>Email: {user.email}</h2>
        </div>
      </div>
     
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default UserInfo;