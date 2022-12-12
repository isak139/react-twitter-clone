//import React from "react";
import { useContext } from "react";
import { Avatar } from "@mui/material";
import "./Profile.css";
import { AuthContext } from "../../AuthContext";

function Profile() {
  const { currentUser } = useContext(AuthContext);
  return (
    currentUser && (
      <div className="Profile">
        <Avatar src={currentUser.photoURL} />
        <div className="Profile_body">
          <h3>{currentUser.displayName}</h3>
        </div>
      </div>
    )
  );
}

export default Profile;
