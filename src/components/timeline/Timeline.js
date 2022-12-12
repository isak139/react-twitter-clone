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
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          key={post.text /* UUIDなどに変更すべき */}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Timeline;
