import React, { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../firebase";

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
    <div className="newfeed">
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
    </div>
  );
}

export default Feeds;
