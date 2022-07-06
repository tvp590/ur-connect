import React from "react";
import styled from "styled-components";
import Pic from "./Pic";
import Userposts from "./Userposts";

function Profile() {
  return (
    <ProfilePage>
      <Pic />
      <Userposts />
    </ProfilePage>
  );
}

const ProfilePage = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
`;

export default Profile;
