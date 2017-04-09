import mongoose from 'mongoose';
import ReactDOM from 'react-dom';
import { Col, Button, ButtonToolbar, Modal } from 'react-bootstrap';
import DisplayPets from './DisplayPets';
import Sponsorship from './Sponsorship';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';
import React, {Component, PropTypes} from 'react';


class PopUpPet extends React.Component{
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg card-text">{this.props.pet.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col xs={12} md={8} lg={4}>
          <br/>
          <br/>
            <img id="image-gallery-image" className="img-responsive"
            src={this.props.pet.mainPhoto}/>
            <Sponsorship updateSponsorshipState={this.props.updateSponsorshipState} pet={this.props.pet}/>
          </Col>
          <Col xs={12} md={8} lg={8}>
          <br/>
          <br/>
            <p id="card-text">Animal ID: {this.props.pet.animalId}</p>
            <p id="card-text">Breed: {this.props.pet.breed}</p>
            <p id="card-text">Age: {this.props.pet.age}</p>
            <p id="card-text">Gender: {this.props.pet.gender}</p>
            <p id="card-text">Size: {this.props.pet.size}</p>
            <p id="card-text">Color: {this.props.pet.color}</p>
            <p id="card-text">Spayed or Neutered: {this.props.pet.spayNeuter}</p>
            <p id="card-text">Declawed: {this.props.pet.declawed}</p>
            <p id="card-text">Intake Date: {this.props.pet.intakeDate}</p>
            <p id="card-text">Description: </p><p>{this.props.pet.description}</p>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

PopUpPet.propTypes = {
  pet: React.PropTypes.object,
  onHide: React.PropTypes.func,
  updateSponsorshipState: React.PropTypes.func
};

export default PopUpPet;
