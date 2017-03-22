import React from 'react';
import mongoose from 'mongoose';
import { Button, Col, Row, Thumbnail, Grid } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';


export default class DisplayPets extends React.Component {
  constructor() {
    super();
    this.state = {
      petPics: []
    };
    this.loadPetsFromDb = this.loadPetsFromDb.bind(this);
  }

  componentDidMount() {
    this.loadPetsFromDb();
  }

  loadPetsFromDb() {
    fetch('/petsdata')
    .then(result => result.json())
    .then(data => this.setState({
      petPics: data}));
  }

  render() {
    let petPics = this.state.petPics.map(function(pet){
      return(
        <div className="pet-div" key={pet.name} id={pet.animalId}>
          <Col xs={6} md={4} lg={4}>
            <Thumbnail className="pet-card" src={pet.mainPhoto} alt="Image">
              <h3>{pet.name}</h3>
              <p>Sponsor Me!</p>
              <p>
                <Button className="yellow-button">Button</Button>&nbsp;
                <Button className="blue-button" bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
        </div>
    );
    });

    return (
      <div>
        {petPics}
      </div>
    );
  }
}

DisplayPets.propTypes = {
  petPics: React.PropTypes
};

//Basic Pet Display
// <img src={pet.mainPhoto}></img>
// <h2>{pet.name}</h2>
// <h3>{pet.description}</h3>
