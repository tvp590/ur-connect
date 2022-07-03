import React from "react";
import styled from "styled-components";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import SendIcon from "@mui/icons-material/Send";

function RightBox() {
  return (
    <div>
      <RightContainer>
        <User__info__Header>
          <div>
            <h3>username</h3>
            <p> last seen or number of members if group </p>
          </div>
          <ThreeDotMenu>
            <MoreVertOutlinedIcon />
          </ThreeDotMenu>
        </User__info__Header>
        <ChatBox>
          <ChatArea></ChatArea>
          <ChatFoot>
            <AttachIcon>
              <AttachmentOutlinedIcon />
            </AttachIcon>
            <TypeMsg>
              <SendMsg placeholder="Type a message..." />
            </TypeMsg>
            <EmojiIcon>
              <EmojiEmotionsOutlinedIcon />
              <SendIcon />
            </EmojiIcon>
          </ChatFoot>
        </ChatBox>
      </RightContainer>
    </div>
  );
}

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 75%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: var(--background-color);

  h3 {
    color: var(--text-color);
  }
  p {
    color: var(--text2-color);
  }
`;

const User__info__Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 60px;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: var(--background-color);
  padding: 0 20px;

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ThreeDotMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  right: 0;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--bg-hover);
  bottom: 0;
  right: 0;

  z-index: -1;
`;

const ChatArea = styled.div``;

const ChatFoot = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0;
  right: 0;
  background-color: var(--background-color);
  padding: 0 20px;
`;

const SendMsg = styled.textarea`
  width: 100%;
  height: 50%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  margin-left: 20px;
  right: 0;
  resize: none;
  color: var(--text-color);
`;

const AttachIcon = styled.div`
  display: flex;
  align-items: center;
`;

const TypeMsg = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const EmojiIcon = styled.div`
  display: flex;
  align-items: center;
  width: 7%;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 15px;
`;

export default RightBox;
