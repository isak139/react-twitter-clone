import React from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import { db } from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function Timeline() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), docId: doc.id }))
      );
    });
  }, []);

  return (
    <div className="timeline">
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post key={post.text} post={post} />
      ))}
    </div>
  );
}

export default Timeline;
