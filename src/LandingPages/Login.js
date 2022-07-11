import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import React from "react";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";

import "../Global.css";

function Login() {
  const emailref = useRef();
  const passwordref = useRef();
  const { login } = useAuth();
  const user = useAuth();
  const [error, setError] = useState("");
  const [Wait, SetWait] = useState(false);
  const navigate = useNavigate();

  async function signInhandler(event) {
    event.preventDefault();

    if (emailref.current.value === "" && passwordref.current.value === "") {
      return setError("Please fill all the field ");
    } else if (
      emailref.current.value.search(/^[a-zA-Z]{3}[0-9]{3}@uregina.ca$/)
    ) {
      return setError("Wrong Email format. Abc123@uregina.ca");
    } else if (passwordref.current.value.length < 6) {
      return setError(" Password should be atleast 6 digits ");
    }

    try {
      setError("");
      SetWait(true);
      await login(emailref.current.value, passwordref.current.value);

      emailref.current.value = "";
      passwordref.current.value = "";

      navigate("/Home");
    } catch {
      setError("failed to Sign In ");
    }
  }

  return (
    <Wrapper>
      <Main__Container>
        <SigninForm>
          <Left__Overlay__container>
            <Logo>
              <img src="/logotest2.svg" alt="UR Connect" />
            </Logo>

            <Left__overlay method="POST" onSubmit={signInhandler}>
              {/* {error && <ErrorClass>{error}</ErrorClass>} */}
              <input
                type="email"
                placeholder="Email"
                autoComplete="off"
                ref={emailref}
              />
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                ref={passwordref}
              />
              {(error && <ErrorClass>{error}</ErrorClass>) || (
                <ErrorClass>
                  <br />
                </ErrorClass>
              )}

              <button disabled={Wait}>Sign In</button>
              <LoginAndForgotPassword>
                <p>
                  <Link to={"/forgot"}>Forgot password?</Link>{" "}
                </p>
              </LoginAndForgotPassword>
            </Left__overlay>
          </Left__Overlay__container>
        </SigninForm>
        <RightSideOfLogin>
          <Right__Overlay__container>
            <Right__overlay>
              <div>
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start socializing</p>
              </div>
              <button
                onClick={() => {
                  navigate("/Signup");
                }}
              >
                Sign Up
              </button>
            </Right__overlay>
          </Right__Overlay__container>
        </RightSideOfLogin>
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

const SigninForm = styled.div`
  height: 100%;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RightSideOfLogin = styled.div`
  height: 100%;
  width: 50%;
  background-color: #fee227;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Right__Overlay__container = styled.div`
  height: 30%;
`;

const Left__Overlay__container = styled.div`
  height: 25%;
  width: 80%;
  margin-top: -35%;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Right__overlay = styled.div`
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

const Left__overlay = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%;
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

const LoginAndForgotPassword = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  p {
    font-size: 12px;
    margin-top: 35px;
  }
`;

const ErrorClass = styled.p`
  color: red;
  text-align: center;
  justify-content: center;

  width: 100%;
  margin: 3px 0;

  font-weight: 200;
`;

// position: absolute;
// display: flex;
// align-items: center;
// text-align: center;
// justify-content: center;
// flex-direction: column;
// padding: 0 40px;
// top: 0;
// height: 100%;
// width: 40%;

/* .form-class {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.5s ease-in-out;
} */
/* 
.sign-in-class {
	left: 0;
	width: 50%;
} */

export default Login;
