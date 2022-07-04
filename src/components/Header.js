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
        <Logo src="/logotest2.svg" alt="UR Connect" />
      </a>
      {/* 
      <Searchbar>
        <SearchbarInput type="text" placeholder="Search" />
      </Searchbar> */}

      <Menu>
        <Searchbar>
          <SearchbarInput type="text" placeholder="Search" />
        </Searchbar>
        <a href="/">
          <HomeI />
        </a>
        <a href="/chat">
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
  flex: 1;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 1;
`;

const Logo = styled.img`
  margin-left: 30px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  margin-right: 30px;

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

const SearchbarInput = styled.input`
  width: 250px;
  margin-right: 20px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 14px;
`;

const HomeI = styled(HomeIcon)``;

const ChatI = styled(SendIcon)``;

const NewPost = styled(AddCircleIcon)``;

const QandA = styled(ForumIcon)``;

const ProfileMenu = styled(AccountCircleIcon)`
  cursor: pointer;
`;
