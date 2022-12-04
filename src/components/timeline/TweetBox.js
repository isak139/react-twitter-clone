import { Avatar } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar />
          <input placeholder="いまどうしてる？" type="text"></input>
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="画像URL"
          type="text"
        ></input>
        <Button className="tweetBox_tweetButton" type="submit">
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
