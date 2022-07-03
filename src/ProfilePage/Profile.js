import React from "react";
import styled from "styled-components";
import Pic from "./Pic";

function Profile() {
  return (
    <ProfilePage>
      <Pic />
    </ProfilePage>
  );
}

const ProfilePage = styled.div`
  margin-top: 60px;
`;

export default Profile;
