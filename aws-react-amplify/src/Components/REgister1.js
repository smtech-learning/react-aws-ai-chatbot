import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class REgister1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            phone_numbe:'',
            confirmation_code: '',
            signedup:false
        }
        this.handlechnage = this.handlechnage.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);

    }

    handlesubmit(e) {
        e.preventDefault();
        console.log('handle submit');
        const { username, password, email, phone_number ,signedup} = this.state;
        if (!signedup) {
            Auth.signUp({
                username,
                password,
                attributes: {
                    email,             // optional
                    phone_number,      // optional - E.164 number convention
                    // Other custom attributes...
                },
                validationData: [],  // optional
            })
                .then(data => {
                    console.log(data);
                    this.setState({ signedup: true });
                    this.setState({ password: '', email: '', phone_number: '' });
                })
                .catch(err => console.log(err));
        } else {
            // After retrieveing the confirmation code from the user
            const { username, confirmation_code } = this.state;

            Auth.confirmSignUp(username, confirmation_code, {
                // Optional. Force user confirmation irrespective of existing alias. By default set to True.
                forceAliasCreation: true
            }).then(data => {
                console.log(data);
                this.setState({ username: '', email: '', confirmation_code: '' });

            })
              .catch(err => console.log(err));
        }
    }

    handlechnage(e) {
        if (e.target.name === 'username') {
            this.setState({ username: e.target.value })
        } else if (e.target.name === 'password') {
            this.setState({ password: e.target.value })
            
        } else if (e.target.name === 'email') {
            this.setState({ email: e.target.value })
        } else if (e.target.name === 'phone_number') {
            this.setState({ phone_number: e.target.value })
        } else if (e.target.name === 'confirmation_code') {
            this.setState({ confirmation_code: e.target.value })
        }
    }

    render() {
        if (!this.state.signedup) {
            return (
                <div className="container">
                    <form onSubmit={this.handlesubmit}>
                        <input type="text" name="username" placeholder="username" onChange={this.handlechnage} />
                        <input type="password" name="password" placeholder="password" onChange={this.handlechnage} />
                        <input type="text" name="phone_number" placeholder="phone_number" onChange={this.handlechnage} />
                        <input type="text" name="email" placeholder="email" onChange={this.handlechnage} />
                        <button class="btn"> Submit  </button>
                    
                    </form>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <form onSubmit={this.handlesubmit}>
                    <input type="text" name="confirmation_code" placeholder="confirmationcode" onChange={this.handlechnage} />
                    <button class="btn"> Submit  </button>
                </form>
                    
                </div>
            )
        }
  }
}

export default REgister1;