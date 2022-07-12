import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { Button, IconButton } from "@mui/material";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import SendIcon from "@mui/icons-material/Send";

function Submit_Chat() {
  return (
    <Container__Submmit__Chat>
      <ChatFoot>
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
      </ChatFoot>
    </Container__Submmit__Chat>
  );
}

const Container__Submmit__Chat = styled.div``;

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

const EmojiIcon = styled.div`
  display: flex;
  align-items: center;
  width: 7%;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 15px;
`;

const SubmitMsg = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
`;

export default Submit_Chat;
