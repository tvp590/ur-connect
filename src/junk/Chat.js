import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle``;

function Chat() {
  return (
    <Wrap>
      {/* <LeftBox>
        <LeftMenu></LeftMenu>
      </LeftBox> */}
      <AllChat></AllChat>
      <ChatBox></ChatBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;

  widht: 100%;
  height: 100%;
`;
const LeftBox = styled.div`
  position: absolute;
  width: 290px;
  height: 100%;

  border: 1px solid lightgrey;
`;

const LeftMenu = styled.div`
  position: absolute;
  width: 256px;
  height: 100%;
  left: 10px;

  border: 1px solid lightgrey;
`;

const AllChat = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 541px;
  height: 865px;
  left: 0px;
  top: 35px;

  background: #ffffff;
  border: 0.5px solid #acacac;
`;

const ChatBox = styled.div``;

const RightBox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 541px;
  height: 100vh;
  left: 100px;
  background: #ffffff;
  border: 0.5px solid #acacac;
`;

export default Chat;
