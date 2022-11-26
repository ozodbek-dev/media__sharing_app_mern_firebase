import React from "react";
import AvatarBtn from "../Navbar/AvatarBtn";
import { Container,MoreBtn } from "./MediaCardStyles";
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function MediaCard() {
  return (
    <Container>
      <div className="img">
        <img
          src="https://i.ytimg.com/vi/ugCN_gynFYw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAANYbOZJwsNE7VyUK8B5-0F4pAmQ"
          alt=""
        />
      </div>

      <div className="profile">
        <AvatarBtn />
        <div className="info">
          <p className="title">
            nd Deploy a Modern Next 13 
            nd Deploy a Modern Next 13 
          </p>
          <p className="name">Akhil Sharma</p>
          <p className="name">220 views 6 hours ago</p>
        </div>
        <MoreBtn>
          <MoreVertIcon/>
        </MoreBtn>
      </div>
    </Container>
  );
}
