import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

function Profilelist({ username, photoURL }) {
  return (
    <Main>
      <Profile>
        <a href="/profile">
          <User__Avatar src={photoURL} alt={username} />
        </a>
        <Wrapper>
          <User__name href="/profile">
            <h3>{username}</h3>
          </User__name>
          <span>Follows you</span>
        </Wrapper>
      </Profile>
      <div>
        <a href="#">Follow</a>
      </div>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  a {
    color: blue;
    font-size: 12px;
    font-weight: bold;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const User__Avatar = styled(Avatar)`
  margin-right: 10px;
`;

const User__name = styled.a``;

const Wrapper = styled.div`
  span {
    color: grey;
    font-size: 12px;
  }
`;

export default Profilelist;
