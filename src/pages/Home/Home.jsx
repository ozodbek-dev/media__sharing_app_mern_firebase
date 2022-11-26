import React from "react";
import { Link } from "react-router-dom";
import MediaCard from "../../components/Card/MediaCard";
import { HomeContainer, MediaList } from "./HomeStyle";

export default function Home() {
  return (
    <HomeContainer>
      <Link to="/">
        <MediaList>
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </MediaList>
      </Link>
    </HomeContainer>
  );
}
