import React from "react";
import Header from "../components/Header";
import Feeds from "./Feeds";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";

function Questionnaire() {
  const { currentUser } = useAuth();

  console.log(currentUser);
  return (
    <Wrapper>
      <Header />

      <QandA__body>
        <Feeds />
      </QandA__body>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const QandA__body = styled.div`
  margin-top: 230px !important;
  justify-content: center;
`;

export default Questionnaire;
