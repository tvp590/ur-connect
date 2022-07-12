import React from "react";

import Feeds from "./Feeds";
import { useAuth } from "../context/AuthContext";

import "./Questionnair.css";
import Header from "../components/Header";

function QuestionAnswer() {
  const { currentUser } = useAuth();

  console.log(currentUser);
  return (
    <div className="qandA">
      <div className="navclass">
        <Header />

        <div className="qandA_body">
          <Feeds />
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswer;
