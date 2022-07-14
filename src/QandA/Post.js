import MoodBadIcon from "@mui/icons-material/MoodBad";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Modal from "@mui/material/Modal";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectquestionId, setQuestion } from "../app/QSlice";
import { Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

function Post({ ID, question, image, timestamp, questionAsker, useravatar }) {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  // const[displayname,setDisplayname]=useState("")
  // useEffect(()=>{
  //     if(currentUser)
  //     {
  //         db.collection("users").doc(currentUser.uid).onSnapshot((snapshot) => setDisplayname(snapshot.data().username))

  //     }
  // },[])

  const [Isopen, setIsopen] = useState(false);

  const handleOpen = () => setIsopen(true);
  const handleClose = () => setIsopen(false);
  const [answer, setAnswer] = useState("");
  const [allanswer, setAllanswer] = useState("");

  const question_Id = useSelector(selectquestionId);
  // console.log(question_Id)

  useEffect(() => {
    if (question_Id) {
      db.collection("questions")
        .doc(question_Id)
        .collection("Answers")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setAllanswer(
            snapshot.docs.map((doc) => ({
              Id: doc.id,
              Answers: doc.data(),
            }))
          )
        );
    }
  }, [question_Id]);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(question_Id);
    if (question_Id) {
      db.collection("questions").doc(question_Id).collection("Answers").add({
        username: currentUser.displayName,
        user: currentUser.email,
        answer: answer,
        questionId: question_Id,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setAnswer("");
    handleClose();
  };

  return (
    <Post__Wrapper
      onClick={() =>
        dispatch(
          setQuestion({
            question_Id: ID,
            questionName: question,
          })
        )
      }
    >
      <Post__header>
        <div>
          <Avatar
            src={
              useravatar
                ? useravatar
                : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
            }
          />

          <h4>{questionAsker} </h4>
        </div>
        <small> {new Date(timestamp?.toDate()).toLocaleString()}</small>
      </Post__header>
      <PostBody>
        <Post__question>
          <Question__Field>
            <div>
              <h4>{question}</h4>
            </div>
            <AnswerButton onClick={handleOpen}>Answer</AnswerButton>
          </Question__Field>
          <Modal__Component open={Isopen} onClose={handleClose}>
            <Box__Wrapper__Answer>
              <Box__Header__Answer>
                <div></div>

                <IconButton>
                  <CloseIcon onClick={handleClose} className="SvgIconsSec" />
                </IconButton>
              </Box__Header__Answer>
              <Question__Info>
                <h1>{question}</h1>
              </Question__Info>
              <br />
              <p>
                <span>asked by {questionAsker} </span>

                <span>on {new Date(timestamp?.toDate()).toLocaleString()}</span>
              </p>
              <Answer__Modal>
                <TextArea__Answer
                  minRows={1}
                  maxRows={10}
                  placeholder="Type your answer..."
                  value={answer}
                  onChange={(e) => setAnswer(e.currentTarget.value)}
                  autoComplete="off"
                />
                <Box__Footer__button>
                  <AnswerButton onClick={handleClose}>Cancel</AnswerButton>
                  <AnswerButton
                    className="submit_button"
                    type="submit"
                    onClick={handlesubmit}
                  >
                    Post Answer
                  </AnswerButton>
                </Box__Footer__button>
              </Answer__Modal>
            </Box__Wrapper__Answer>
          </Modal__Component>
        </Post__question>
        <Post__answer>
          {allanswer &&
            allanswer.map(({ id, Answers }) => (
              <p
                key={id}
                style={{ position: "relative", padding: "1px 0px 3px" }}
              >
                {ID === Answers.questionId ? (
                  <span>
                    {Answers.answer}
                    <span
                      style={{
                        color: "red",
                        display: "flex",
                        right: "0px",
                        position: "absolute",
                        fontSize: "12px",
                      }}
                    >
                      {Answers.username} on{" "}
                      {new Date(Answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                ) : (
                  " "
                )}
              </p>
            ))}
        </Post__answer>
        {/* {image && <img src={image} alt="" />} */}
      </PostBody>
    </Post__Wrapper>
  );
}

const Post__Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 10px;
  background-color: white;
  padding: 10px;
  overflow: hidden;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  postion: absolute;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
  }
`;

const Post__header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
  }

  small {
    margin-left: 10px;
  }
`;

const PostBody = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100px;
    object-fit: contain;
    margin-top: 10px;
    cursor: pointer;
    background-color: rgb(238, 238, 238);
    border-radius: 5px;
  }
`;

const Post__question = styled.div`
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;

  h4:hover {
  }
`;

const Question__Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Post__answer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  p {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
`;

const AnswerButton = styled.button`
  background-color: black;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-left: 20px;

  &:hover {
    background-color: white;
    border: 1px solid black;
    padding: 9px;
    color: black;
  }
`;

const Post__Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  MuiSvgIcon-root {
    color: lightgray;
    margin-right: 40px;
    cursor: pointer;
  }
`;

const Post__Action = styled.div`
  background-color: lightgray;
  align-items: center;
  display: flex;
  justify-content: space-around;
  border-radius: 33px;
  padding: 5px;

  MuiSvgIcon-root {
    color: gray;
    margin-right: 40px;
    cursor: pointer;
  }
  .MuiSvgIcon-root:hover {
    color: rgb(255, 238, 0);
    margin-right: 40px;
  }
`;

const Question__Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;

  word-wrap: break-word;
`;
const Modal__Component = styled(Modal)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Box__Wrapper__Answer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;

  width: 55%;
  height: 70%;
  background-color: white;
  outline: none;
  border-radius: 10px;

  p {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 20px;
    span {
      margin-left: 10px;
    }
  }
`;

const Box__Header__Answer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const Answer__Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
`;

const Box__Footer__button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
`;

const TextArea__Answer = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  margin-bottom: 10px;
  font-size: 20px;
  height: 270px;
  padding-right: 20px;
  margin-top: 10px;
  resize: none;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  width: 100%;
`;

export default Post;
