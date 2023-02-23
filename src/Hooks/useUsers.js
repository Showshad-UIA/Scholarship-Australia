import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useUsers = () => {
  const [user] = useAuthState(auth);
  const [usersget, setUsersGet] = useState([]);
  console.log(usersget);
  useEffect(() => {
    if (user) {
      // fetch(`https://scolarshipsaustralia.up.railway.app/api/users/?email=${user.email}`)
      fetch(`http://localhost:5000/api/users/?email=${user.email}`)
        .then(res => res.json())
        .then(data => setUsersGet(data));
    }
  }, [user]);
  return {
    setUsersGet,
    usersget,
  };
};

export default useUsers;
