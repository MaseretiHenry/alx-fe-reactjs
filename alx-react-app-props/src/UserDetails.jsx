// src/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      {/* Check if userData exists before accessing properties */}
      {userData ? (
        <>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </>
      ) : (
        <p>User data not available.</p>
      )}
    </div>
  );
}

export default UserDetails;
