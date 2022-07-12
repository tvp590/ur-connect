import React from "react";
import "./App.css";
import Login from "./LandingPages/Login";
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
import Signup from "./LandingPages/Signup";
import Forgot from "./LandingPages/Forgot";
import Thread from "./chatSystem/Thread";
import Questionnaire from "./QandA/Questionnair";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContainer>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/forgot" element={<Forgot />} />

            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/chat" element={<Gram />} />
            <Route exact path="/Questionnaires" element={<Questionnaire />} />
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/Home/:id" element={<Profile />} />
            <Route exact path="/chat/:id" element={<Thread />} />
          </Routes>
        </AppContainer>
      </AuthProvider>
    </BrowserRouter>
  );
}

const AppContainer = styled.div``;

export default App;
