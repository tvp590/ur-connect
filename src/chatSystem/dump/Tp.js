import db from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  where,
  onSnapshot,
  orderBy,
  addDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

import Threads from "./Threads";
import { Avatar } from "@mui/material";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuth } from "../Pages/context/AuthContext";
import React, { useEffect, useState } from "react";

function options() {
  const { currentUser } = useAuth();
  const [chatusers, setChatusers] = useState([]);
  const [ischat, setIschat] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const userRef = collection(db, "chatUser");

    const q = query(userRef, where("uid", "==", [currentUser.uid]));
    const newquery = query(q, orderBy("timmestamp", "desc"));

    const unsubscribe = onSnapshot(newquery, (snapshot) => {
      let users = [];
      snapshot.array.forEach((element) => {
        users.push(element.data());
      });
      setChatusers(users);
    });
    return () => unsubscribe;
  }, []);

  const selectUser = (user) => {
    setIschat(user);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const id =
      currentUser.uid > ischat.uid
        ? `${currentUser.uid + ischat.uid}`
        : `${ischat.uid + currentUser.uid}`;
    const chatRef = collection(db, "chatUser", currentUser.uid, id, "chat");
    await addDoc(chatRef, {
      text,
      from: currentUser.uid,
      to: ischat.uid,
      timestamo: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText("");
  };
  return (
    <div className="wrapper leftsideChat">
      {users.map((user) => (
        <Threads key={user.uid} user={user} />
      ))}

      <div className="rightsideBox">
        {ischat ? (
          <div className="message_container_user">
            <Avatar src={ischat.photoURL} />
            <h4>{ischat.displayName}</h4>
            {/* <ChatFoot> */}
          </div>
        ) : (
          <div classname="noselection"> select user to start chat</div>
        )}
      </div>
    </div>
  );
}

export default options;
