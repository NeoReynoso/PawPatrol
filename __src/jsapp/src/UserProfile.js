import React from 'react';

const UserProfile = ({ userData }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
      {/* Add more user information as needed */}
    </div>
  );
};

export default UserProfile;
