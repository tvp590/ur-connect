import React from "react";
import styled from "styled-components";
import GridOnIcon from "@mui/icons-material/GridOn";

function Userposts() {
  return (
    <Wrap>
      <Post__Nav>
        <h2>posts</h2>
      </Post__Nav>
      <Container>
        <Post__Container>
          <Post_row>
            <Post_img src="./post1.png" alt="post" />
            <Post_img src="./post1.png" alt="post" />
            <Post_img src="./post1.png" alt="post" />
          </Post_row>
          <Post_row>
            <Post_img src="./post1.png" alt="post" />
            <Post_img src="./post1.png" alt="post" />
            <Post_img src="./post1.png" alt="post" />
          </Post_row>
          <Post_row>
            <Post_img src="./post1.png" alt="post" />
          </Post_row>
        </Post__Container>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  width: 60%;
`;

const Post__Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  h2 {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: normal;
    padding: 10px;
  }
`;

const Post__Container = styled.div`
  disign: flex;
  flex-direction: column;
  align-items: space-between;
  width: 100%;
`;

const Post_row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Post_img = styled.img`
  width: 285px;
  height: 285px;
`;

export default Userposts;
