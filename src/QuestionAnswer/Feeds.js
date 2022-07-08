import React, { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";

function Feeds() {
  const [post, setPost] = useState([]);

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

  return (
    <NewFeed>
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
    </NewFeed>
  );
}

const NewFeed = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default Feeds;
