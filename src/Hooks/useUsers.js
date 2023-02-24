import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useUsers = () => {
  const [user] = useAuthState(auth);
  const [usersget, setUsersGet] = useState([]);

  // console.log(usersget,user)
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/api/users/?email=${user.email}`)
        // fetch(`http://localhost:5000/api/users`)
        .then(res => res.json())
        .then(data =>
          // console.log(data.data)
          setUsersGet(data.data)
        );
    }
  }, [user]);
  return {
    setUsersGet,
    usersget,
  };
};

export default useUsers;
