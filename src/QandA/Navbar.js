import React, { useEffect, useState } from "react";
import Logo from "../../Logo.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";
import Chat from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import Modal from "react-modal";
import { useAuth } from "../context/AuthContext";
import { Avatar } from "@material-ui/core";
import { db } from "../../Firebase";
import firebase from "firebase/compat/app";

Modal.setAppElement("#root");

function Navbar() {
  const { currentUser, signout } = useAuth();

  const navigate = useNavigate();

  const [Isopen, setIsopen] = useState(false);
  const [inputquestion, setInputquestion] = useState("");
  // const [inputurl,setInputurl] = useState("")
  //const question= input;

  const [image, setImage] = useState(null);

  const handleimagechnage = (e) => {
    const [file] = e.currentTarget.files;
    setImage(URL.createObjectURL(file));
  };

  const handleLogout = async () => {
    try {
      await signout();
      // setDisplayname("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuestionPost = (e) => {
    e.preventDefault();
    setIsopen(false);

    if (inputquestion) {
      db.collection("questions").add({
        username: currentUser.displayName,
        user: currentUser.email,
        avatar: currentUser.photoURL,
        question: inputquestion,
        image: image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInputquestion("");
    setImage("");
  };
  return (
    <div className="navbarHeader">
      <div className="Ulogoclass">
        <img src={Logo} alt="logo" />
      </div>

      <div className="navIcons">
        <div className="allnavIcon">
          <HomeIcon />
          <QuestionAnswer />
          <Chat />
        </div>
      </div>
      <div className="inputclass">
        <SearchIcon />

        <input type="text" placeholder="search question" />
      </div>

      <div className="detail">
        <button className="addQuestion" onClick={() => setIsopen(true)}>
          Add Question
        </button>
        <Modal
          isOpen={Isopen}
          onRequestClose={() => setIsopen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 500,
              height: 10,
              border: "1px solid",
              backgroundColor: "#930313",
              zIndex: "1000",
              marginTop: "-300px",
              marginLeft: "-350px",
              left: "50%",
              top: "50%",
            },
          }}
        >
          <div className="modal_header">
            <h5>Add Question</h5>
            <h5>share</h5>
          </div>
          <div className="modal_user">
            <Avatar className="Avatarclass" src="" />
            <p>{currentUser.displayName} asked</p>
          </div>
          <div className="inputfield">
            <input
              type="text"
              value={inputquestion}
              onChange={(event) => setInputquestion(event.currentTarget.value)}
              placeholder="Ask your Question"
              autoComplete="off"
              required
            />
          </div>
          <div className="model_link">
            <span>
              <input type="file" onChange={handleimagechnage} />
            </span>
            <span>optional : image upload</span>
          </div>
          <div className="modal_button">
            <button className="cancle_button" onClick={() => setIsopen(false)}>
              cancle
            </button>
            <button
              type="submit"
              className="submit_button"
              onClick={handleQuestionPost}
            >
              Ask question
            </button>
          </div>
        </Modal>

        <button className="user" onClick={handleLogout}>
          {currentUser.displayName}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
