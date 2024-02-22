import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';

const EditProfile = () => {
  const { userdata, updateProfile } = useAuth();
  const [username, setUsername] = useState(userdata.username);
  const [email, setEmail] = useState(userdata.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ username, email });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
