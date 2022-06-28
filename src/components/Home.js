import React from "react";
import styled from "styled-components";
import Post from "./Post";

function Home() {
  return (
    <HomeContainer>
      <Post />
      <Post />
      <Post />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  margin-top: 60px;
`;

export default Home;
