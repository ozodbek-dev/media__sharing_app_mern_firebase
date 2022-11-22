import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Link } from "react-router-dom";
import Search from "./Search";
import { Brand, Container, Button, Left, Right, Middle } from "./NavbarStyles";
import AvatarBtn from "./AvatarBtn";

export default function Sidebar() {
  return (
    <Container>
      <Right>
        <Button>
          <MenuIcon />
        </Button>
        <Link to="/">
          <Brand>
            <YouTubeIcon />
            <span>YouTube</span>
          </Brand>
        </Link>
      </Right>
      <Middle>
        <Search />
        <Button className="mobile_search_btn">
          <SearchOutlinedIcon />
        </Button>
        <Button>
          <KeyboardVoiceIcon />
        </Button>
      </Middle>
      <Left>
     
        <Button>
          <VideoCallOutlinedIcon />
        </Button>
        <Button className="notification">
          <NotificationsOutlinedIcon />
          <span className="badge">+9</span>
        </Button>
        <span style={{ marginLeft: "10px" }}>
          <AvatarBtn />
        </span>
      </Left>
    </Container>
  );
}
