import React, { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../firebase";
import styled from "styled-components";
import { Avatar, IconButton } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import Modal from "@mui/material/Modal";
import firebase from "firebase/compat/app";
import CloseIcon from "@mui/icons-material/Close";
import ShareIcon from "@mui/icons-material/Share";
// import IconButton from "@mui/material";

function Feeds() {
  const [post, setPost] = useState([]);
  const { currentUser } = useAuth();
  const [inputquestion, setInputquestion] = useState("");
  const [image, setImage] = useState(null);

  const handleimagechnage = (e) => {
    const [file] = e.currentTarget.files;
    setImage(URL.createObjectURL(file));
  };

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
        <Avatar src={currentUser.photoURL} />
        <AstQ__div onClick={handleOpen}>
          What do you want to ask or share?
        </AstQ__div>
        <Modal__Component open={Isopen} onClose={handleClose}>
          <Box__Wrapper>
            <Box__Header>
              <IconButton>
                <CloseIcon onClick={handleClose} />
              </IconButton>
              <h1>Add Question</h1>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </Box__Header>
            <Box__User>
              <Avatar src={currentUser.photoURL} />
              <h2>{currentUser.displayName} </h2>
            </Box__User>
            <Input__Question>
              <input
                type="text"
                value={inputquestion}
                onChange={(event) =>
                  setInputquestion(event.currentTarget.value)
                }
                placeholder="Ask your Question"
                autoComplete="off"
                required
              />
            </Input__Question>
            <div className="model_link">
              <span>
                <input type="file" onChange={handleimagechnage} />
              </span>
              <span>optional : image upload</span>
            </div>
            <div className="modal_button">
              <button
                className="cancle_button"
                onClick={() => setIsopen(false)}
              >
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
`;
const Box__Wrapper = styled.div`
  width: 55%;
  height: 70%;
  background-color: white;
  outline: none;
  border-radius: 10px;
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
`;

const Modal__Component = styled(Modal)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Input__Question = styled.div``;

export default Feeds;
