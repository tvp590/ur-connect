import React from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import { useParams } from "react-router-dom";
import JSONDATA from "../MOCK_DATA.json";
import LeftBox from "./LeftBox";

import Submit_Chat from "./Submit_Chat";

function Thread() {
  const { id } = useParams();
  const user = JSONDATA.find((item) => item.username === id);
  return (
    <div>
      <LeftBox />
      <Container>
        <User__info__Header>
          <div>
            <h3>{user.username}</h3>
            <p> last seen or number of members if group </p>
          </div>
          <ThreeDotMenu href="/Home">
            <ClearIcon />
          </ThreeDotMenu>
        </User__info__Header>
        <ChatBox>
          <ChatArea></ChatArea>
        </ChatBox>

        <Submit_Chat />

        {/* <ChatFoot>
          <AttachIcon>
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              style={{ display: "none" }}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <AttachmentOutlinedIcon />
              </IconButton>
            </label>
          </AttachIcon>
          <TypeMsg>
            <TextArea placeholder="Type a message...">{}</TextArea>
          </TypeMsg>
          <EmojiIcon>
            <IconButton>
              <EmojiEmotionsOutlinedIcon />
            </IconButton>

            <IconButton>
              <SubmitMsg>
                <SendIcon />
              </SubmitMsg>
            </IconButton>
          </EmojiIcon>
        </ChatFoot> */}
      </Container>
    </div>
  );
}

const Container = styled.div`
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
  z-index: 1;
  background-color: var(--background-color);
  padding: 0 20px;

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ThreeDotMenu = styled.a`
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

  z-index: 0;
`;

const SubmitMsg = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
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
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 50%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  right: 0;
  resize: none;
  color: var(--text-color);
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const AttachIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
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

export default Thread;
