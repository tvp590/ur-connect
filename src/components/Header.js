import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
        <a href="#">Home</a>
        <a href="#">chat</a>
        <a href="#">new Post</a>
        <a href="#">Q/A</a>
        <a href="#">
          <ProfileMenu />
        </a>
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
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 20px;
    flex-wrap: nowrap;
  }
`;

const Searchbar = styled.div``;

const ProfileMenu = styled(AccountCircleIcon)``;
