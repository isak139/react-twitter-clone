import { Avatar } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase";

function TweetBox({ isAuth }) {
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [tweetImage, setTweetImage] = React.useState("");

  const sendTweet = (e) => {
    //リロードしないようにする
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: auth.currentUser.displayName,
      username: auth.currentUser.displayName,
      verified: false,
      text: tweetMessage,
      avatar: auth.currentUser.photoURL,
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src={isAuth ? auth.currentUser.photoURL : null} />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBox_imageInput"
          placeholder="画像URL"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          className="tweetBox_tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
