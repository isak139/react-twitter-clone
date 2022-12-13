import {
  FavoriteBorder,
  Publish,
  Repeat,
  //VerifiedUser,
  ChatBubbleOutline,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import "./Post.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../AuthContext";

function Post({ post }) {
  const { currentUser } = useContext(AuthContext);
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
  };

  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={post.avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>{post.displayName}</h3>
            {currentUser
              ? currentUser.uid === post.uid && (
                  <div
                    className="post_closeIcon"
                    onClick={() => handleDelete(post.docId)}
                  >
                    <CloseIcon />
                  </div>
                )
              : null}
          </div>
          <div className="post_headerDescription">
            <p>{post.text}</p>
          </div>
        </div>
        <img src={post.image} alt="" />
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
