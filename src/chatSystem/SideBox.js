import React from "react";
import styled from "styled-components";
import "./Global.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Threads from "./Threads";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RightBox from "./RightBox";

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
          <DarkModeIcon onClick={() => setStat(false)} />
          <a href="#">Dark Mode</a>
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
      <RightBox />
    </Container>
  );
}

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

const Hamburger = styled(IconButton)`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin: 0 10px 0 0;
  color: white : important;
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

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--background-color);
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
