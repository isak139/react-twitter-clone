//import React from "react";
import { useContext } from "react";
import { Button, Avatar } from "@mui/material";
import "./Profile.css";
import { AuthContext } from "../../AuthContext";

function Profile() {
  const { currentUser } = useContext(AuthContext);
  return (
    currentUser && (
      <Button className="Profile">
        <Avatar src={currentUser.photoURL} />
        <h3>{currentUser.displayName}</h3>
      </Button>
    )
  );
}

export default Profile;
