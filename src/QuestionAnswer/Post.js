import { Avatar } from "@mui/material";
import { MoodBad, MoodOutlined, MoreHoriz, Share } from "@mui/icons-material";
// import "./Post.css";
import Modal from "react-modal/lib/components/Modal";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuth } from "../context/AuthContext";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectquestionId, setQuestion } from "../Redux/QSlice";

import styled from "styled-components";

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
  console.log(question_Id);
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
    <div
      className="post"
      onClick={() =>
        dispatch(
          setQuestion({
            question_Id: ID,
            questionName: question,
          })
        )
      }
    >
      <div className="postheader">
        <Avatar
          src={
            useravatar
              ? useravatar
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
        />
        <h5>{questionAsker} </h5>
        <small> {new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
      <div className="postBody">
        <div className="Post_question">
          <p>{question}</p>
          <button className="answerbtn" onClick={() => setIsboxopen(true)}>
            Answer
          </button>
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
            <div className="Questioninfo">
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
            </div>
            <div className="answer_modal">
              <textarea
                type="text"
                placeholder="type your answer"
                value={answer}
                onChange={(e) => setAnswer(e.currentTarget.value)}
                required
              />
            </div>
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
        </div>
        <div className="Post_answer">
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
        </div>
        {image && <img src={image} alt="" />}
        <div className="post_footer">
          <div className="Postaction">
            <MoodOutlined />
            <MoodBad />
            <Share />
            <MoreHoriz />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
