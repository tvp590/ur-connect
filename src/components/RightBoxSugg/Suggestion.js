import React from "react";
import styled from "styled-components";
import Profilelist from "./Profilelist";

function Suggestion() {
  return (
    <Wrap>
      <MainBox>
        <Sugheading>
          <p>Suggestions For You</p>
          <p> See all </p>
        </Sugheading>
        <SuggestionBox>
          <Profilelist />
          <Profilelist />
          <Profilelist />
          <Profilelist />
        </SuggestionBox>
        <About>
          <p>
            About • Help • Press • API • Jobs • PrivacyTerms • Locations •
            Language • English
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
  width: 100%;
  // border: 1px solid lightgrey;
  border-radius: 4px;
`;

const MainBox = styled.div`
  width: 70%;
  p {
    margin-top: 15px;
  }
`;
const Sugheading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p:first-child {
    color: grey;
  }
`;

const SuggestionBox = styled.div`
  margin-top: 15px;
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
