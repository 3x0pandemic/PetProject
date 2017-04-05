import React from 'react';
import PetCard from './PetCard';
// import { observer, inject } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';

class DisplayPets extends React.Component {
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
      .then(data => this.setState({petPics: data}));
  }

  //create a new array that is a filtered version of this.state.petPics
  //example: if this.state.species === dog than the resulting array will only have dogs
  //When creating the petPics array, map over filtered array instead of this.state.petPics
  render() {
    let catOrDogArray = [];
    if(this.state.species === 'cat' || this.state.species === 'dog') {
      catOrDogArray = this.state.petPics.filter(function(pet) {
        return pet.species.toLowerCase() === this.state.species.toLowerCase();
      }.bind(this));
    } else {
      //else we are displaying Favorites
      catOrDogArray = this.props.userStore.pets;
    }

    let self = this;
    let lgClose = () => this.setState({ lgShow: false });

    let petPics = catOrDogArray.map(function(pet){
      return(
       <PetCard pet={pet} key={pet._id}/>
      );
    });

    return (
      <div id="wrapper">
        <div id="columns">
          {petPics}
        </div>
      </div>
    );
  }
}

DisplayPets.propTypes = {
  userStore: React.PropTypes.object
};

export default DisplayPets;
