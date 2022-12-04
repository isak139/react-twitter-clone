import {
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { ChatBubbleOutline } from "@mui/icons-material";
import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              username
              <span className="post_headerSpecial">
                <VerifiedUser className="post_badge" />
                @user
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>texttext</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random" alt="" />
        <div className="post_footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
