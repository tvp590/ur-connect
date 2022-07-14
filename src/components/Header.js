import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ForumIcon from "@mui/icons-material/Forum";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import JSONDATA from "../MOCK_DATA.json";

function Header() {
  const { currentUser, signout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const [isOpen, setIsOpen] = useState(false);
  // function handleOpen() {
  //   setIsOpen(true);
  // }
  // function handleClose() {
  //   setIsOpen(false);
  // }

  const [value, setValue] = useState("");

  const onChange = (event) => {
    handleOpen();
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    navigate(`/Home/${searchTerm}`);
  };

  const [Isopen, setIsopen] = useState(false);
  const handleOpen = () => setIsopen(true);
  const handleClose = () => setIsopen(false);
  return (
    <div>
      <Container>
        <a href="/Home">
          <Logo src="/logotest2.svg" alt="UR Connect" />
        </a>

        <Menu>
          {/* ///// some bug with search bbarr */}
          <Searchbar>
            <SearchbarInput
              type="text"
              placeholder="Search"
              onChange={onChange}
              autoFocus={true}
            />
            {/* <Modal__Component
              open={Isopen}
              // onClose={handleClose}
              disableAutoFocus
              hideBackdrop={true}
            >
              <Dropdown>
                {JSONDATA.filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const Name = item.username.toLowerCase();

                  return searchTerm && Name.startsWith(searchTerm);
                }).map((item) => (
                  <DropdownItem onClick={() => onSearch(item.username)}>
                    {item.username}
                  </DropdownItem>
                ))}
              </Dropdown>
            </Modal__Component> */}

            {/* <CustomModal
            disableAutoFocus
            hideBackdrop={true}
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <div>
              <h2>Type to Search</h2>
            </div>
          </CustomModal> */}
          </Searchbar>
          <a href="/Home">
            <HomeI />
          </a>
          <a href="/chat">
            <ChatI />
          </a>
          <a href="#">
            <NewPost />
          </a>
          <a href="/Questionnaires">
            <QandA />
          </a>
          <ProfileMenu onClick={handleLogout} />
          {/* logout button for now */}
        </Menu>
      </Container>
    </div>
  );
}

export default Header;

const Dropdown = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DropdownItem = styled.div`
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const CustomModal = styled(Modal)`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 250px;

  height: 50%;
  margin-left: 64.5%;
  z-index: 0;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
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
  &:focus {
    margin-right: 20px;
  }
`;

const Modal__Component = styled(Modal)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HomeI = styled(HomeIcon)``;

const ChatI = styled(SendIcon)``;

const NewPost = styled(AddCircleIcon)``;

const QandA = styled(ForumIcon)``;

const ProfileMenu = styled(AccountCircleIcon)`
  cursor: pointer;
`;
