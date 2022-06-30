import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

function Profilelist() {
  return (
    <Main>
      <Profile>
        <User__Avatar src="/post1.png" alt="Devansh" />
        <Wrapper>
          <User__name>
            <h5>Devansh</h5>
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

const User__name = styled.div``;

const Wrapper = styled.div`
  span {
    color: grey;
    font-size: 12px;
  }
`;

export default Profilelist;
