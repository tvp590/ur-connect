import React from "react";
import styled from "styled-components";

// need to work

function SuggComp() {
  return (
    <Wrap>
      <Profile>
        <a href="/profile">
          <User__Avatar src="/post1.png" alt="Devansh" />
        </a>
        <Wrapper>
          <User__name href="/profile">
            <h3>Devansh</h3>
          </User__name>
          <span>Follows you</span>
        </Wrapper>
      </Profile>
      <div>
        <a href="#">Follow</a>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default SuggComp;
