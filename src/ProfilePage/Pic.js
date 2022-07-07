import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";

function Pic() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chat");
  };

  return (
    <Wrap>
      <Header />
      <Container>
        <Pic__img src="./pp1.jpg" alt="profile pic" />
        <BioContainer>
          <User__name>
            <h1>User__name</h1>
            <ButtonsInProfile>Follow</ButtonsInProfile>

            <ButtonsInProfile onClick={handleClick}>Message</ButtonsInProfile>
            <ButtonsInProfile>
              <MoreHorizIcon />
            </ButtonsInProfile>
          </User__name>
          <AccountInfo>
            <p>
              <strong>123</strong>
              &nbsp;posts
            </p>
            <p>
              <strong>123</strong>
              &nbsp;followers
            </p>
            <p>
              <strong>123</strong>
              &nbsp;following
            </p>
          </AccountInfo>
          <User__info>
            <Firstname>Name</Firstname>
            <Bio>
              Biofv <br />
              fver <br />
              fvererve <br />
              vre
            </Bio>
            <br />
            <br />
          </User__info>
        </BioContainer>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #e6e6e6;

  width: 60%;
`;

const BioContainer = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
`;
const User__name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: normal;
    margin-right: 20px;
  }
`;

const AccountInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  p {
    margin-right: 10px;
  }
`;

const Pic__img = styled.img`
  width: 200px;
  height: 200px;

  border-radius: 50%;
`;

const Firstname = styled.h4`
  margin-top: 35px;
`;
const Bio = styled.p``;

const User__info = styled.div`
  line-height: 1.5;
`;

const ButtonsInProfile = styled.button`
  font-weight: bold;
  font-size: 14px;
  margin-left: 10px;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  display: flex;
`;

export default Pic;
