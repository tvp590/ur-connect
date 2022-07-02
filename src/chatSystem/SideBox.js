import React from "react";
import styled from "styled-components";
import "./Global.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Search } from "@mui/icons-material";
import Threads from "./Threads";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import SendIcon from "@mui/icons-material/Send";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ToggleButton } from "@mui/material";
import { Avatar } from "@mui/material";

function SideBox() {
  const [burgerStat, setStat] = React.useState(false);

  return (
    <Container>
      <BurgerMenu show={burgerStat}>
        <Me>
          <MyAvatar src="/avatar.jpg" alt="avatar" />
          <h3>Devansh</h3>
        </Me>
        <li>
          <GroupIcon />
          <a href="#">New Group</a>
        </li>
        <li>
          <BookmarkAddIcon />
          <a href="#">Saved Messages</a>
        </li>
        <li>
          <SettingsIcon />
          <a href="#">Setting</a>
        </li>
        <li>
          <DarkModeIcon />
          <a href="#">Dark Mode</a>
          <ToggleButton />
        </li>
      </BurgerMenu>
      <LeftContainer>
        <Search__Header>
          <Hamburger>
            <MenuOutlinedIcon onClick={() => setStat(true)} />
          </Hamburger>
          <Search__input type="text" placeholder="Search" />
        </Search__Header>
        <Threads__Box>
          <Threads />
          <Threads />
        </Threads__Box>
      </LeftContainer>
      <RightContainer onClick={() => setStat(false)}>
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
    </Container>
  );
}

const AttachIcon = styled.div`
  display: flex;
  align-items: center;
`;

const TypeMsg = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Threads__Box = styled.div`
  margin-top: 60px;
`;

const Container = styled.div``;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 25%;
  height: 100%;
  z-index: -1;
  left: 0;
  top: 0;
  background-color: var(--background-color);
  border-right: 1px solid lightgrey;
`;

const Search__Header = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  padding: 10px;
`;

const Hamburger = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin: 0 10px 0 0;
`;

const Search__input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  padding: 0 10px;
  background-color: var(--search-bg);
  border-radius: 5px;
  color: var(--text-color);
`;

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
  background-color: black;
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

const EmojiIcon = styled.div`
  display: flex;
  align-items: center;
  width: 7%;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 15px;
`;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #23272e;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    display: flex;
    align-items: center;
    a {
      color: var(--text-color);
    }
  }
`;

const Me = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: 100px;

  h3 {
    color: var(--text-color);
    margin-top: 20px;
  }

  Avatar {
    transform: scale(1.8);
  }
`;

const MyAvatar = styled(Avatar)`
  width: 100%;
  transform: scale(1.5);
  margin-bottom: 5px;
  margin-left: 10px;
`;

export default SideBox;
