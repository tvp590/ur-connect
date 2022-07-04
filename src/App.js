import React from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Home from "./components/Home";
import styled from "styled-components";
// import Chat from "./junk/Chat";
import Gram from "./chatSystem/Gram";
import Profile from "./ProfilePage/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/chat" element={<Gram />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div``;

export default App;
