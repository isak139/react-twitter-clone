import React from "react";
import { Avatar } from "@mui/material";
import "./Profile.css";

function Profile({ displayName, userName, userIcon }) {
  return (
    <div className="Profile">
      <Avatar src={userIcon} />
      <div className="Profile_body">
        <h3>{displayName}</h3>
        <p>@{userName}</p>
      </div>
    </div>
  );
}

export default Profile;
