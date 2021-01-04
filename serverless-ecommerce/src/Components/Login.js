import React, { Component, useState } from "react";
import "../Styles/Custom.css";
import serverlessarch from "../Images/server-less-arch.png";
import {
  Route,
  Link,
  withRouter,
  Switch,
  useHistory,
  useParams
} from "react-router-dom";
import { Auth } from "aws-amplify";
import styled, { ThemeProvider } from "styled-components";
import { device } from "./device";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import ForgotPassword from "./ForgotPassword";
import Buttons from "./Buttons";

const theme = {
  colors: {
    primary: "#0077B5",
    secondary: "#000000"
  }
};

const Wrapper = styled(Card)`
  margin: 20px;
  background: ${props => props.theme.colors.primary};
  padding: 50px;
  border-radius: 5px;
  // box-shadow: 5px 5px 5px gray;
  // box-shadow: 0 2px 50px 0 #0076ff;
  box-shadow: 0 2px 50px 0 #fff;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const LoginInputSection = styled.div`
  @media ${device.tablet} {
    max-width: 400px;
  }
  max-width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

/* The below component is NOT in use I kept fopr some reference code if I were to use plain old CSS versus MaterialUI*/
const LoginWrapper = styled.div`
  margin: 10px;
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px gray;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ButtonsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgb(13, 88, 202);
  justify-content: center;
  align-content: center;
  font-size: 2rem;
`;

/* The below component is NOT in use I kept fopr some reference code on how to pass a arrow function*/
const Input2 = styled((...props) => <input {...props} />)`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgb(13, 88, 202);
  justify-content: center;
  align-content: center;
  font-size: 2rem;
`;

/* The below component is NOT in use I kept fopr some reference code on how to add attributes*/

const Input3 = styled.input.attrs({ value: props => props.value })`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgb(13, 88, 202);
  justify-content: center;
  align-content: center;
  font-size: 2rem;
`;
const StyledTextField = styled(TextField)`
  font-size: 40;
`;

function Login() {
  const [hasError, setHasError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  console.log(history);

  const handlechnage = e => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const PageLogin = async e => {
    e.preventDefault();
    try {
      await Auth.signIn(email, password);
      history.push("/home");
    } catch (e) {
      setHasError(true);
      setErrorDescription(e.message);
    }
  };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LoginInputSection>
          <Wrapper>
            {hasError && <h5 className='errorStyle'> {errorDescription}</h5>}
            <form>
              <div class='text-center social-btn'>
                <a
                  href='#'
                  onClick={() => Auth.federatedSignIn({ provider: "Google" })}
                  class='btn btn-primary btn-block'
                >
                  <i class='fa fa-google'></i> Sign in with <b>Google</b>
                </a>
              </div>
              <div class='or-seperator'>
                <i>or</i>
              </div>
              <div class='form-group'>
                <div class='input-group'>
                  <span class='input-group-addon'>
                    <i class='fa fa-user'></i>
                  </span>
                  <input
                    type='text'
                    class='form-control'
                    name='email'
                    placeholder='Enter user id'
                    required='required'
                    onChange={handlechnage}
                  />
                </div>
              </div>
              <div class='form-group'>
                <div class='input-group'>
                  <span class='input-group-addon'>
                    <i class='fa fa-lock'></i>
                  </span>
                  <input
                    type='password'
                    class='form-control'
                    name='password'
                    placeholder='Enter Password'
                    required='required'
                    onChange={handlechnage}
                  />
                </div>
              </div>
              <div class='form-group'>
                <button
                  type='submit'
                  class='btn btn-success btn-block login-btn'
                  onClick={PageLogin}
                >
                  Sign in
                </button>
              </div>

              <div class='clearfix'>
                <Link to='/forgotpassword' className='pull-right text-success'>
                  Forgot Password?
                </Link>
              </div>

              <div class='hint-text small'>
                Don't have an account?
                <Link to='/register' class='text-success'>
                  Register Now!
                </Link>
              </div>
            </form>
          </Wrapper>
        </LoginInputSection>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default Login;
