import React from "react";
import { Avatar } from "@mui/material";
import styled from "styled-components";

function Threads() {
  return (
    <Thread__Wrap>
      <Thread__avatar src="/post1.png" alt="Devansh" />
      <Thread__info>
        <h3>username</h3>
        <p>Supp bro !!</p>
      </Thread__info>
      <TimeStamp>
        <div>
          <p>TimeStamp</p>
        </div>
        <br />
        <MsgCount>123</MsgCount>
      </TimeStamp>
    </Thread__Wrap>
  );
}

const Container = styled.div``;

const Thread__Wrap = styled.div`
  widht: 100%;
  height: 60px;
  display: flex;
  padding: 10px;

  &:hover {
    background-color: var(--bg-hover);
    cursor: pointer;
  }
`;

const Thread__avatar = styled(Avatar)``;

const Thread__info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    color: var(--text-color);
    font-weight: normal;
    font-size: 14px;
  }
  p {
    color: var(--text2-color);
    font-weight: normal;
    font-size: 12px;
  }
`;

const TimeStamp = styled.div`
  margin-left: auto;
  font-size: 12px;
  p {
    color: var(--text2-color);
  }
`;

const MsgCount = styled.div`
  color: var(--text2-color);
`;

export default Threads;
