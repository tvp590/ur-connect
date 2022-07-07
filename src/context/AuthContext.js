import React, { useContext, useState, useEffect } from "react";
import "../firebase";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { updateProfile } from "firebase/compat/auth";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
const Authcontext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wait, setWait] = useState(false);
  const storage = getStorage();

  async function uploadImage(file, id) {
    console.log(file);

    const fileRef = ref(storage, `avatar/${id}/${file.name}`);

    const snap = await uploadBytes(fileRef, file);
    const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
    console.log(snap.ref.fullPath);
    console.log(url);

    return url;
  }

  async function signup(email, password, name, picture) {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(userCredential);
    const url = await uploadImage(picture, userCredential.user.uid);

    await userCredential.user.updateProfile({
      displayName: name,
      photoURL: url,
    });

    // function signup(email,password,name,picture,setWait){
    //   return firebase.auth().createUserWithEmailAndPassword(email,password).then((userCredential)=>userCredential.user.updateProfile({
    //     displayName:name,
    //     photoURL: uploadImage(picture,userCredential.user)
    //   })
    //   )
  }

  function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  function signout() {
    return firebase.auth().signOut();
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);

      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const useValue = {
    currentUser,
    signup,
    login,
    signout,
  };

  return (
    <Authcontext.Provider value={useValue}>
      {!loading && children}
    </Authcontext.Provider>
  );
}

export function useAuth() {
  return useContext(Authcontext);
}
