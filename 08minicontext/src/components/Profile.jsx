import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>Please log in to see your profile.</p>;
  }

  return <p>Welcome, {user.username}!</p>;
}

export default Profile;
