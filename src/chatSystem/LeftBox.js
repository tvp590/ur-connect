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
import ClearIcon from "@mui/icons-material/Clear";

function LeftBox() {
  const [burgerStat, setStat] = React.useState(false);

  return (
    <Container>
      <BurgerMenu show={burgerStat}>
        <Wrapper>
          <Me>
            <MyAvatar src="/pp1.jpg" alt="avatar" />
            <h3>Mark</h3>
          </Me>
          <div>
            <IconButton onClick={() => setStat(false)}>
              <ClearIcon />
            </IconButton>
          </div>
        </Wrapper>
        <Menu>
          <Option onClick={""}>
            <li>
              <GroupIcon />
              <p>New Group</p>
            </li>
          </Option>
          <Option>
            <li>
              <BookmarkAddIcon />
              <p href="#">Saved Messages</p>
            </li>
          </Option>
          <Option>
            <li>
              <SettingsIcon />
              <p href="#">Setting</p>
            </li>
          </Option>
          <Option>
            <li>
              <DarkModeIcon />
              <p href="#">Dark Mode</p>
            </li>
          </Option>
        </Menu>
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
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
          <Threads />
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
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
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
  background-color: var(--background-color);
  border-radius: 5px;
  color: var(--text-color);

  &:focus {
    background-color: var(--search-bg);
  }
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
`;

const Menu = styled.div`
  margin-top: 20px;
`;

const Option = styled.div`
  border-radius: 5px;
  &:hover {
    background-color: var(--bg-hover);
    cursor: pointer;
  }
  li {
    padding: 15px 0;
    display: flex;
    align-items: center; }
    p {
      color: var(--text-color);
      margin-left: 10px;
    }
  }
`;

// const CrossIcon = styled(ClearIcon)`
//   cursor: pointer;
// `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export default LeftBox;
