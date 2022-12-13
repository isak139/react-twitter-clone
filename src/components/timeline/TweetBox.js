import { Avatar } from "@mui/material";
import { useState, useContext } from "react";
import { Button } from "@mui/material";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { AuthContext } from "../../AuthContext";

function TweetBox() {
  const { currentUser } = useContext(AuthContext);
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    //リロードしないようにする
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: currentUser.displayName,
      text: tweetMessage,
      avatar: currentUser.photoURL,
      image: tweetImage,
      uid: currentUser.uid,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src={currentUser ? currentUser.photoURL : null} />
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
