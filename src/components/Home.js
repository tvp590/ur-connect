import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "./Post";
import Suggestion from "./RightBoxSugg/Suggestion";
import Header from "./Header";
import Slide from "react-reveal/Slide";
import JSONDATA from "../MOCK_DATA.json";
// import { db } from "./firebase";

function Home() {
  // const [posts, setPosts] = useState([
  //   {
  //     username: "Devansh",
  //     imageURL:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22jzDZ-b3KeP2jCqwhW7kuiArGEx_JJ5d0g&usqp=CAU",
  //     caption: "see yaaa boi 🤘🏻",
  //   },

  // ]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) => {
  //     setPosts(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

  return (
    <Wrap>
      <Header />
      <Slide left>
        <HomeContainer>
          {JSONDATA.map((post) => (
            <Post
              username={post.username}
              imageURL={post.imageURL}
              caption={post.caption}
            />
          ))}
        </HomeContainer>
      </Slide>
      <Slide right>
        <RightBox>
          <Suggestion />
        </RightBox>
      </Slide>
    </Wrap>
  );
}

const RightBox = styled.div`
  postion: fixed;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: lightgrey;
`;

const HomeContainer = styled.div`
  margin-top: 100px;
  width: 500px;
`;

export default Home;
