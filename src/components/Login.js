import ReactDOM from 'react-dom';
import { Col, Button, ButtonToolbar, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';
import React, {Component, PropTypes} from 'react';
import { observer, inject } from 'mobx-react';

class Login extends React.Component{
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      token: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  getInitialState() {
    return {
      value: ''
    };
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  loginHandler(e){
    e.preventDefault();
    this.props.userStore.authenticateUser(this.state);
  }

  getEmailValidationState() {

  }

  getPasswordValidationState() {
    const length = this.state.password.length;
    if (length > 5) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }


  render() {
    if(this.props.userStore.loggedIn){
      return(
        <div>
        <br/>
        <br/>
        <br/>
        <h3>Welcome {this.state.email}!</h3>
        </div>
      );
    }
    return (
      <div>
      <br/>
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getEmailValidationState()}>
            <br/>
            <br/>
            <br/>
            <ControlLabel>Email Address</ControlLabel>
          <FormControl
            type="email"
            value={this.state.value}
            placeholder="Enter Email Address"
            onChange={this.handleEmailChange}/>
            <FormControl.Feedback/>
          </FormGroup>

          <FormGroup
            controlId="formBasicText"
            validationState={this.getPasswordValidationState()}>
            <ControlLabel>Password</ControlLabel>
         <FormControl
            type="password"
            value={this.state.value}
            placeholder="Enter Password"
            onChange={this.handlePasswordChange}/>
            <FormControl.Feedback/>
          </FormGroup>

          <Button onClick={this.loginHandler} type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  userStore: React.PropTypes.object
};

export default inject("userStore")(observer(Login));
