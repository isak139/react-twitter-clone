import React, { useContext } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import "./Sidebar.css";
import Profile from "./Profile";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { AuthContext } from "../../AuthContext";

function Sidebar(/* { isAuth, setIsAuth } */) {
  const { currentUser } = useContext(AuthContext);
  const loginWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
    });
  };
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
    });
  };
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_twitterIcon" />
      <SidebarOption text="ホーム" Icon={HomeIcon} active />
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
      {/* <SidebarOption text="メッセージ" Icon={MailOutlineIcon} /> */}
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      {/* <SidebarOption text="リスト" Icon={ListAltIcon} /> */}
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      {/* <SidebarOption text="もっと見る" Icon={MoreHorizIcon} /> */}
      <Button variant="outlined" className="sidebar_tweet">
        ツイートする
      </Button>
      <div className="sidebar_bottom">
        {currentUser ? (
          <>
            <Profile />
            <Button
              variant="outlined"
              className="sidebar_login"
              onClick={logout}
            >
              ログアウト
            </Button>
          </>
        ) : (
          <Button
            variant="outlined"
            className="sidebar_login"
            onClick={loginWithGoogle}
          >
            <GoogleIcon />
            ログイン
          </Button>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
