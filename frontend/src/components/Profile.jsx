import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logout from './auth/Logout';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/user/profile',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data.user);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Unauthorized or session expired. Please log in again.');
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>

          {/* You can add more user details here */}
        </>
      ) : (
        <p>No user data available</p>
      )}
      <Logout />
    </div>
  );
}
