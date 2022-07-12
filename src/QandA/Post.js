import MoodBadIcon from "@mui/icons-material/MoodBad";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Modal from "react-modal/lib/components/Modal";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectquestionId, setQuestion } from "../app/QSlice";
import { Avatar } from "@mui/material";

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

  const [Isboxopen, setIsboxopen] = useState(false);
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
    setIsboxopen(false);
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

          <h5>{questionAsker} </h5>
        </div>
        <small> {new Date(timestamp?.toDate()).toLocaleString()}</small>
      </Post__header>
      <PostBody>
        <Post__question>
          <p>{question}</p>
          <AnswerButton onClick={() => setIsboxopen(true)}>Answer</AnswerButton>
          <Modal
            isOpen={Isboxopen}
            onRequestClose={() => setIsboxopen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 750,
                height: 650,
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
            <Question__Info>
              <h1>{question}</h1>
              <p>
                asked by
                <span className="userinfo"> {questionAsker} </span>
                on
                <span className="userinfo">
                  {" "}
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </Question__Info>
            <Answer__Modal>
              <textarea
                type="text"
                placeholder="type your answer"
                value={answer}
                onChange={(e) => setAnswer(e.currentTarget.value)}
                required
              />
            </Answer__Modal>
            <div className="modal_button">
              <button
                className="cancle_button"
                onClick={() => setIsboxopen(false)}
              >
                cancel
              </button>
              <button
                className="submit_button"
                type="submit"
                onClick={handlesubmit}
              >
                Post Answer
              </button>
            </div>
          </Modal>
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
        {image && <img src={image} alt="" />}
        <Post__Footer>
          <Post__Action>
            <MoodOutlinedIcon />
            <MoodBadIcon />

            <MoreHorizIcon />
          </Post__Action>
        </Post__Footer>
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

  h4 {
    margin-left: 10px;
    cursor: pointer;
    font-size: 13px;
  }

  h4:hover {
    text-decoration: underline;
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
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
  flex: 2;
  p:hover {
    text-decoration: underline;
    font-size: large;
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
  margin-left: auto;
  outline: none;
  cursor: pointer;

  hover {
    background-color: #ffd502;
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
  align-items: center;
  flex-direction: column;

  h1 {
    color: #91120e;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    color: gray;
    font-size: small;
  }

  .userinfo {
    color: black;
    font-weight: 700;
  }
`;

const Answer__Modal = styled.div`
  textarea {
    width: 100%;
    font-size: 15px;
    height: 200px;
    padding: 5px;
  }
`;

export default Post;
