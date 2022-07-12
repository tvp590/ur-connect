import React from "react";
// import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";
import styled from "styled-components";

export default function Signup() {
  const navigate = useNavigate();
  const nameref = useRef();

  const emailref = useRef();
  const passwordref = useRef();
  const Confirmpasswordref = useRef();
  const formref = useRef();

  const [error, setError] = useState("");
  const [Wait, SetWait] = useState(false);
  const [img, setImg] = useState();

  const { signup } = useAuth();

  function CheckUniqueUsername(user) {
    return true;
  }

  async function submithandler(event) {
    event.preventDefault();

    if (
      nameref.current.value === "" &&
      emailref.current.value === "" &&
      passwordref.current.value === "" &&
      nameref.current.value === "" &&
      Confirmpasswordref.current.value === ""
    ) {
      return setError("Please fill all the field ");
    } else if (!CheckUniqueUsername(nameref.current.value)) {
      return setError("*Username already taken");
    } else if (
      emailref.current.value.search(/^[a-zA-Z]{3}[0-9]{3}@uregina.ca$/)
    ) {
      return setError("*Invalid Email");
    } else if (passwordref.current.value.length < 6) {
      return setError(" Password should be atleast 6 digits ");
    } else if (passwordref.current.value !== Confirmpasswordref.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      SetWait(true);

      await signup(
        emailref.current.value,
        passwordref.current.value,
        nameref.current.value,
        img
      );

      emailref.current.value = "";
      passwordref.current.value = "";
      nameref.current.value = "";
      Confirmpasswordref.current.value = "";

      navigate("/Home");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }

    SetWait(false);
  }

  return (
    <Wrapper>
      <Main__Container>
        <LeftSideOfSignup>
          <Left__Overlay__container>
            <Left__overlay>
              <h1>Welcome Back!</h1>
              <p>login with your personal info</p>
              <button
                className="hidden"
                onClick={() => {
                  navigate("/");
                }}
              >
                Sign In
              </button>
            </Left__overlay>
          </Left__Overlay__container>
        </LeftSideOfSignup>

        <SignupForm>
          <Right__Overlay__container>
            <Right__overlay
              method="POST"
              onSubmit={submithandler}
              ref={formref}
            >
              <h1>Create Account</h1>
              {/* {error && <ErrorClass>{error}</ErrorClass>} */}
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                ref={nameref}
              />
              <input
                type="file"
                autoComplete="off"
                onChange={(e) => setImg(e.currentTarget.files[0])}
              />

              <input
                type="email"
                placeholder="Student Email"
                autoComplete="off"
                ref={emailref}
              />
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                ref={passwordref}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                autoComplete="off"
                ref={Confirmpasswordref}
              />
              {(error && <ErrorClass>{error}</ErrorClass>) || (
                <ErrorClass>
                  <br />
                </ErrorClass>
              )}
              <button disabled={Wait}>Sign Up</button>
            </Right__overlay>
          </Right__Overlay__container>
        </SignupForm>
      </Main__Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--default-bg1);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main__Container = styled.div`
  background-color: var(--default-bg);
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LeftSideOfSignup = styled.div`
  height: 100%;
  width: 50%;
  background-color: #fee227;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Left__Overlay__container = styled.div`
  height: 30%;
`;

const SignupForm = styled.div`
  height: 100%;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Right__overlay = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    background-color: #eee;
    border: none;
    width: 100%;
    margin: 8px 0;
    padding: 12px 15px;
  }
  a {
    margin-top: 10px;
  }
  button {
    border-radius: 20px;
    border: 1px solid #e6b905;
    background: linear-gradient(to right, #ffcc00, #a08001);
    color: #080707;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 85ms ease-in;
    margin-top: 10px;
  }

  button:hover {
    background: #fee227;
  }
  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button:disabled {
    background-color: #aaa1a1;
  }
`;

const Left__overlay = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: var(--default-color);
    font-size: 2.5rem;
  }
  p {
    color: var(--default-color);
  }
  button {
    border-radius: 20px;
    border: 1px solid #e6b905;
    background: linear-gradient(to right, #ffcc00, #a08001);
    color: #080707;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 85ms ease-in;
    margin-top: 10px;
  }

  button:hover {
    background: #f9c802;
  }
  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button:disabled {
    background-color: #aaa1a1;
  }
`;

const Right__Overlay__container = styled.div`
  height: 100%;
  width: 80%;
`;

const ErrorClass = styled.p`
  color: red;
  text-align: center;
  justify-content: center;

  width: 100%;
  margin: 3px 0;

  font-size: 12px;

  font-weight: 200;
`;
