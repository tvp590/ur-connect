import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <Container>
      <a>
        <img src="/logotest2.svg" alt="UR Connect" />
      </a>

      <Searchbar>
        <input type="text" placeholder="Search" />
      </Searchbar>

      <Menu>
        <a href="#">
          <HomeI />
        </a>
        <a href="#">
          <ChatI />
        </a>
        <a href="#">
          <NewPost />
        </a>
        <a href="#">
          <QandA />
        </a>
        <ProfileMenu />
      </Menu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  justify-content: space-between;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 20px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const Searchbar = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const HomeI = styled(HomeIcon)``;

const ChatI = styled(SendIcon)``;

const NewPost = styled(AddCircleIcon)``;

const QandA = styled(ForumIcon)``;

const ProfileMenu = styled(AccountCircleIcon)`
  cursor: pointer;
`;