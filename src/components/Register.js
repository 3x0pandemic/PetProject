import { Button, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';
import React from 'react';


class Register extends React.Component{
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      registered: false,
      subscribed: false,

    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.addNewUserToDatabase = this.addNewUserToDatabase.bind(this);
    this.handleSubscribedChange = this.handleSubscribedChange.bind(this);
  }

  getInitialState() {
    return {
      value: ''
    };
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubscribedChange(e) {
    this.setState({subscribed: true});
  }



  getNameValidationState() {

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


  addNewUserToDatabase(e) {
    e.preventDefault();
    fetch('/user/newUser',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        subscribed: this.state.subscribed
      })
    });
    this.setState({registered: true});
  }


  render() {
    if(this.state.registered === true) {
      return(
        <div>
          <br/>
          <br/>
          <br/>
          <h3>Welcome {this.state.name}!</h3>
        </div>
      );
    }
    return (
      <div>
        <form>
        <FormGroup
        controlId="formBasicText"
        validationState={this.getNameValidationState()}>
        <br/>
        <br/>
        <br/>
        <br/>
        <ControlLabel>Name</ControlLabel>
        <FormControl
        type="text"
        value={this.state.value}
        placeholder="Enter Your Name"
        onChange={this.handleNameChange}/>
        <FormControl.Static />
        </FormGroup>

        <FormGroup
        controlId="formBasicText"
        validationState={this.getEmailValidationState()}>
        <ControlLabel>Email Address</ControlLabel>
        <FormControl
        type="email"
        value={this.state.value}
        placeholder="Enter Your Email Address"
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
        placeholder="Create A Password"
        onChange={this.handlePasswordChange}/>
        <FormControl.Feedback/>

        </FormGroup>



          <br/>
          <Button onClick={this.addNewUserToDatabase}  type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}



export default Register;
