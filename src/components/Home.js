import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "./Post";
import { db } from "../firebase";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <HomeContainer>
      {posts.map((post) => (
        <Post
          username={post.username}
          imageURL={post.imageURL}
          caption={post.caption}
        />
      ))}
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  margin-top: 60px;
  margin-left: 300px;
  width: 500px;
`;

export default Home;
