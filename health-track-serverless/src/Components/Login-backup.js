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
import { SignIn } from 'aws-amplify-react'
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut ,AmplifySignIn} from '@aws-amplify/ui-react';


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

  const GoogleLogin = async e => {
    e.preventDefault();
    try {
      await Auth.federatedSignIn({ provider: "Google" })
      history.push("/home");
    } catch (e) {
      setHasError(true);
      setErrorDescription(e.message);
    } finally {
      
    }
  };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LoginInputSection >
          <Wrapper>
          <AmplifyAuthenticator>
              <AmplifySignIn hideSignUp headerText="Serverless" />
            </AmplifyAuthenticator>
          </Wrapper>
        </LoginInputSection>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default Login;
