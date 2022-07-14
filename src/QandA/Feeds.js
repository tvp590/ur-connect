import React, { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../firebase";
import styled from "styled-components";
import { Avatar, Hidden, IconButton } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import Modal from "@mui/material/Modal";
import firebase from "firebase/compat/app";
import CloseIcon from "@mui/icons-material/Close";
import ShareIcon from "@mui/icons-material/Share";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Icon.css";

// TEMPORARY
import { useNavigate } from "react-router-dom";
import JSONDATA from "../MOCK_DATA.json";

function Feeds() {
  const [post, setPost] = useState([]);
  const { currentUser } = useAuth();
  const [inputquestion, setInputquestion] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [ChosenFile, setChosenFile] = useState("");

  const handleimagechange = (e) => {
    const [file] = e.currentTarget.files;
    setImage(URL.createObjectURL(file));
  };

  // is for dropdown search result in add question
  const JsonDataFrom__db = db.collection("questions");
  const onSearch = (searchTerm) => {
    navigate(`/Home/${searchTerm}`);
  };
  //// end //////

  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            question: doc.data(),
          }))
        )
      );
  }, []);

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

  const [Isopen, setIsopen] = useState(false);

  const handleOpen = () => setIsopen(true);
  const handleClose = () => setIsopen(false);

  return (
    <News__Feed>
      <Ask__question>
        {/* src=currentUser.photoURL  */}
        <Avatar />
        <AstQ__div onClick={handleOpen}>
          What do you want to ask or share?
        </AstQ__div>
        <Modal__Component open={Isopen} onClose={handleClose}>
          <Box__Wrapper>
            <Box__Header>
              <div></div>
              <h1>Add Question</h1>
              <IconButton>
                <CloseIcon onClick={handleClose} className="SvgIconsSec" />
              </IconButton>
            </Box__Header>
            <Box__User>
              <Avatar src={currentUser.photoURL} />
              <h2>{currentUser.displayName} </h2>
            </Box__User>
            <Box__Question>
              <TextArea__Wrapper>
                <Search__Wrap>
                  <TextAreaAS
                    minRows={1}
                    maxRows={5}
                    placeholder="Type a question..."
                    value={inputquestion}
                    onChange={(event) =>
                      setInputquestion(event.currentTarget.value)
                    }
                    autoComplete="off"
                    required
                  />
                </Search__Wrap>
                <Search__Result__Container>
                  {" "}
                  {/* // need to know the value of Name variable */}
                  {JSONDATA.filter((item) => {
                    const searchTerm = inputquestion.toLowerCase();
                    const Name = item.username.toLowerCase();

                    return searchTerm && Name.startsWith(searchTerm);
                  }).map((item) => (
                    <DropdownItem__questions
                      onClick={() => onSearch(item.username)}
                    >
                      <Search__thread>{item.username}</Search__thread>
                    </DropdownItem__questions>
                  ))}
                </Search__Result__Container>
              </TextArea__Wrapper>
              {/* <input
                type="textarea"
                value={inputquestion}
                onChange={(event) =>
                  setInputquestion(event.currentTarget.value)
                }
                placeholder="Ask your Question"
                autoComplete="off"
                required
              /> */}

              <Box__Footer>
                <AttachIcon>
                  <input
                    accept="image/*"
                    id="upload-button-file"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => {
                      handleimagechange(event);
                      setChosenFile(event.currentTarget.value);
                    }}
                  />
                  <label htmlFor="upload-button-file">
                    <div>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <FileUploadIcon className="SvgIcons" />
                      </IconButton>
                      <p>{ChosenFile}</p>
                    </div>
                  </label>
                </AttachIcon>
                {/* <span>
                  <input
                    type="file"
                    placeholder="yo"
                    onChange={handleimagechange}
                  />
                </span> */}

                <Modal_Buttons>
                  <IconButton onClick={() => setIsopen(false)}>
                    {/* <button onClick={() => setIsopen(false)}>cancle</button> */}
                    <CancelIcon className="SvgIcons" />
                  </IconButton>
                  <IconButton onClick={handleQuestionPost}>
                    <CheckCircleIcon className="SvgIcons" />
                  </IconButton>

                  {/* <button
                  type="submit"
                  className="submit_button"
                  onClick={handleQuestionPost}
                >
                  Ask question
                </button> */}
                </Modal_Buttons>
              </Box__Footer>
            </Box__Question>
          </Box__Wrapper>
        </Modal__Component>
      </Ask__question>
      <Post__List>
        {post.map(({ id, question }) => (
          <Post
            key={id}
            ID={id}
            question={question.question}
            image={question.image}
            timestamp={question.timestamp}
            questionAsker={question.username}
            useravatar={question.avatar}
          />
        ))}
      </Post__List>
    </News__Feed>
  );
}

const News__Feed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
`;

const Post__List = styled.div`
  width: 100%;
`;

const Ask__question = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  margin-top: 70px;
  background-color: white;
  padding: 10px;

  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const AstQ__div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border: 1px solid lightgrey;
  width: 100%;
  padding-left: 15px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
  margin-left: 10px;
`;

const Box__Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  width: 55%;
  height: 70%;
  background-color: white;
  outline: none;
  border-radius: 10px;
`;

const Box__Question = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  align-items: space-between;
`;

const Box__Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

// const Close__container = styled(IconButton)`
//   cursor: pointer;
// `;

// const Share__Container = styled(IconButton)``;

const Box__User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  h2 {
    margin-left: 10px;
  }
  padding-left: 10px;
`;

const Modal__Component = styled(Modal)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Search__Result__Container = styled.div`
  height: 100%;
  font-size: 20px;
  overflow-y: scroll;
`;

const DropdownItem__questions = styled.div`
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  overflow: hidden;
`;

const Search__thread = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding: 10px;
  padding-left: 0px;
`;

const TextArea__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  height: 300px;
  padding: 10px;
`;

const Search__Wrap = styled.div`
  border-bottom: 1px solid lightgrey;
`;

const TextAreaAS = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  margin-bottom: 10px;
  font-size: 20px;
  right: 0;
  resize: none;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  width: 100%;
`;

const Modal_Buttons = styled.div`
  padding: 10px;
`;

const Box__Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AttachIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 10px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

// const Input__Question = styled.div``;

export default Feeds;
