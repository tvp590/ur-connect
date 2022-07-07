import React from "react";
import "./App.css";
import Login from "./LoginPages/Login";
// import Signup from "./SignUp/Signup";
import { AuthProvider } from "./context/AuthContext";
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
      <AuthProvider>
        <AppContainer>
          <Routes>
            <Route exact path="/" element={<Login />} />

            <Route exact path="/Home" element={<Home />} />
            {/* <Route exact path="/Signup" element={<Signup />} /> */}
            <Route exact path="/chat" element={<Gram />} />
            <Route exact path="/Profile" element={<Profile />} />
          </Routes>
        </AppContainer>
      </AuthProvider>
    </BrowserRouter>
  );
}

const AppContainer = styled.div``;

export default App;
