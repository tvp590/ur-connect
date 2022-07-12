import React from "react";
import styled from "styled-components";
import Profilelist from "./Profilelist";
import JSONDATA from "../../MOCK_DATA.json";
import { Link } from "react-router-dom";

function Suggestion() {
  const size = 5;
  const items = JSONDATA.slice(0, size);

  return (
    <Wrap>
      <MainBox>
        <Sugheading>
          <p>Suggestions for You</p>
        </Sugheading>
        <SuggestionBox>
          {items.map((item) => (
            <Profilelist username={item.username} photoURL={item.imageURL} />
          ))}
        </SuggestionBox>
        <About>
          <p>
            <a href="/About">About</a> • <Link to={"/Help"}>Help</Link> •
            PrivacyTerms • Language
          </p>
          <p>c 2022 URCONNECT FROM STUDENT </p>
        </About>
      </MainBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 100px;
  margin-left: 50px;
  width: 400px;

  background-color: white;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 15px;
  }
`;
const Sugheading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p:first-child {
    color: grey;
  }
  margin-left: 20px;
`;

const SuggestionBox = styled.div`
  margin-top: 15px;
  width: 100%;
`;

const About = styled.div`
  margin-top: 30px;
  p {
    color: grey;
    font-size: 12px;
    margin-top: 20px;
  }
`;

export default Suggestion;
