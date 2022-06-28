import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

function Post() {
  return (
    <Container>
      <First__component>
        <User__Avatar src="/post1.png" alt="IchigoKurosaki" />
        <User__name>
          <h3>Username</h3>
        </User__name>
      </First__component>

      <Second__component>
        <PostImage src="/post1.png" alt="UR Connect" />
      </Second__component>

      <Third__component>
        <h3>caption</h3>
      </Third__component>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 45px;
  max-width: 600px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const First__component = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const User__Avatar = styled(Avatar)`
  margin-right: 10px;
`;

const User__name = styled.div``;

const Second__component = styled.div``;

const PostImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

const Third__component = styled.div``;

export default Post;
