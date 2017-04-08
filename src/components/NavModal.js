import ReactDOM from 'react-dom';
import { Col, Button, ButtonToolbar, Modal, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';
import React, {Component, PropTypes} from 'react';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router';

class NavModal extends React.Component{

  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg card-text">Login or Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
            <Tab eventKey={1} title="Login"><Login setIsLoggedInState={this.props.setIsLoggedInState} /></Tab>
            <Tab eventKey={2} title="Register"><Register/></Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

NavModal.propTypes = {
  onHide: React.PropTypes.func,
  setIsLoggedInState: React.PropTypes.func
};

export default NavModal;
