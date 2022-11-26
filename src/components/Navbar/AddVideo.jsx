import React from "react";
import { Link } from "react-router-dom";
import { AddVideoContainer } from "./NavbarStyles";
import addMediaFilesLinks from "../../assets/addMediaFiles/addMediaFiles";


export default function AddVideo({active}) {
  return (
    <AddVideoContainer active={active}>
      <div className="list">
      {
          addMediaFilesLinks.map(item=>(
            <Link key={item.title} to={item.link}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.title}</span>
            </Link>
          ))
        }
      </div>
    </AddVideoContainer>
  );
}
