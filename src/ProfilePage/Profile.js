import React from "react";
import styled from "styled-components";
import Pic from "./Pic";
import Userposts from "./Userposts";
import JSONDATA from "../MOCK_DATA.json";
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const user = JSONDATA.find((item) => item.username === id);

  return (
    <ProfilePage>
      <Pic username={user.username} profilePicture={user.imageURL} />
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
