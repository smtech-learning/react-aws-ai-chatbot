import React, { Component } from "react";
import { Auth } from "aws-amplify";
// import registration from '../Images/registration.png';

class REgister1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      phone_numbe: "",
      confirmation_code: "",
      signedup: false,
      confirmed: false,
      userNameErrorExists: false,
      userNameErrorDescritpion: ""
    };
    this.state = { hasError: false };
    this.state = { errorDescription: "" };

    this.handlechnage = this.handlechnage.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit(e) {
    e.preventDefault();
    const {
      username,
      password,
      email,
      phone_number,
      signedup,
      confirmed
    } = this.state;
    if (!signedup && !confirmed) {
      Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number
        },
        validationData: []
      })
        .then(data => {
          console.log(data);
          this.setState({ signedup: true });
          this.setState({ password: "", email: "", phone_number: "" });
        })
        .catch(err => {
          this.setState({ hasError: true });
          this.setState({ errorDescription: err.message });
        });
    } else if (signedup && !confirmed) {
      const { username, confirmation_code } = this.state;
      Auth.confirmSignUp(username, confirmation_code, {
        forceAliasCreation: true
      })
        .then(data => {
          this.setState({ confirmed: true });
          this.setState({ username: "", email: "", confirmation_code: "" });
        })
        .catch(err => {
          this.setState({ hasError: true });
          this.setState({ errorDescription: err.message });
        });
    } else if (signedup && confirmed) {
    }
  }

  handlechnage(e) {
    if (e.target.name === "username") {
      this.setState({ username: e.target.value }, () => {
        this.validateUserName();
      });
    } else if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    } else if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else if (e.target.name === "phone_number") {
      this.setState({ phone_number: e.target.value });
    } else if (e.target.name === "confirmation_code") {
      this.setState({ confirmation_code: e.target.value });
    }
  }

  validateUserName = () => {
    const { username } = this.state;
    this.setState({ userNameErrorExists: username.length > 12 ? false : true });
    console.log(this.state.userNameErrorExists);
  };

  render() {
    if (!this.state.signedup) {
      return (
        <div className='register-container'>
          <form
            onSubmit={this.handlesubmit}
            class='form-container'
            autocomplete='off'
          >
            <input
              id='_suburb'
              type='text'
              style={{ display: "none" }}
              disabled
            />

            {this.state.hasError && (
              <h5 className='errorStyle'> {this.state.errorDescription}</h5>
            )}

            <input
              type='text'
              autocomplete='off_randomstring'
              className='login-style'
              name='username'
              placeholder='Enter e-mail address'
              onChange={this.handlechnage}
            />

            <input
              type='text'
              autocomplete='off_randomstring'
              className='login-style'
              name='email'
              placeholder='Renter the e-mail address'
              onChange={this.handlechnage}
            />

            <input
              type='password'
              autocomplete='new-password'
              className='login-style'
              name='password'
              placeholder='Enter Password'
              onChange={this.handlechnage}
            />

            <input
              type='text'
              autocomplete='off_randomstring'
              className='login-style'
              name='phone_number'
              placeholder='Enter Phone Number (Format should be: +1XXXXXXXXXX)'
              onChange={this.handlechnage}
            />
            <br />
            <button className='btn btn-primary'> Submit </button>
          </form>
        </div>
      );
    } else if (this.state.signedup && !this.state.confirmed) {
      return (
        <div className='register-container'>
          <img src={registration} height='250px' />
          <form onSubmit={this.handlesubmit} class='form-container'>
            <h5>
              {" "}
              You should have received the verification code in the e-mail.
              Plese check the e-mail and enter the verification code below and
              click Submit !
            </h5>
            {this.state.hasError && (
              <h5 className='errorStyle'> {this.state.errorDescription}</h5>
            )}

            <input
              type='text'
              name='confirmation_code'
              className='login-style'
              placeholder='Enter Verification Code'
              onChange={this.handlechnage}
            />
            <br />
            <button className='btn btn-primary'> Submit </button>
          </form>
        </div>
      );
    } else if (this.state.signedup && this.state.confirmed) {
      return (
        <div className='register-container'>
          <img src={registration} height='250px' />
          <div className='form-container'>
            <h3> Congratulations !! Registration successfully completed. </h3>
            <br />
            <button className='btn btn-primary'> Go to Login Page </button>
          </div>
        </div>
      );
    }
  }
}

export default REgister1;
