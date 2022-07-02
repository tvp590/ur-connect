import React from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Home from "./components/Home";
import styled from "styled-components";
// import Chat from "./junk/Chat";
import Gram from "./chatSystem/Gram";

function App() {
  return (
    <div className="App">
      <Gram />
      {/* <Header />
      <Home /> */}
    </div>
  );
}

export default App;
