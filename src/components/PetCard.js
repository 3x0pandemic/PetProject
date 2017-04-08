import React from 'react';
import DisplayPets from './DisplayPets';
import PopUpPet from './PopUpPet';
import { observer, inject } from 'mobx-react';
import { Button, ButtonToolbar, Col, Row, Thumbnail, Grid, Glyphicon, ProgressBar } from 'react-bootstrap';


class PetCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lgShow: false
    };
    this.getCookie = this.getCookie.bind(this);
    this.heartPet = this.heartPet.bind(this);
    this.isFavorite = this.isFavorite.bind(this);
    this.cardProgressPercentage = this.cardProgressPercentage.bind(this);
  }

  isFavorite() {
    let favoritePets = this.props.userStore.pets || [];
    let animalIds = favoritePets.map(function(pet) {
      return pet.animalId;
    });
    return animalIds.indexOf(this.props.pet.animalId) > -1;
  }

  getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  heartPet(e) {
    this.props.userStore.heartPet(this.props.pet);
  }

  cardProgressPercentage(num) {
    return (num/500) * 100;
  }

  render() {
    let lgClose = () => this.setState({ lgShow: false });
    let heartButtonClass = this.isFavorite() ? "heart-button" : "";
    let fullySponsored = this.props.pet.amountSponsored >= 500 ? "green-bar" : "red-bar";
    return(
      <div className="pet-div" key={this.props.pet.name} id={this.props.pet.animalId}>
        <Thumbnail className="pet-card" src={this.props.pet.mainPhoto} alt="Image">
          <div className={fullySponsored}>
            <ProgressBar now={this.cardProgressPercentage(this.props.pet.amountSponsored)}
                         label={`$${this.props.pet.amountSponsored}`} />
          </div>
          <h2>{this.props.pet.name}</h2>
          <h4>Sponsor Me!</h4>
          <ButtonToolbar>
            <Button key={this.props.pet.animalId} bsStyle="primary" onClick={()=>{
              this.setState({ lgShow: true });
            }}>
              Pet Info
            </Button>
            {
              this.props.userStore.loggedIn ?
                <Button onClick={this.heartPet} key={this.props.pet.name} bsStyle="primary">
                  <Glyphicon className={heartButtonClass} glyph="heart" />
                </Button> : ''
            }
            <PopUpPet pet={this.props.pet} show={this.state.lgShow} onHide={lgClose} />
          </ButtonToolbar>
        </Thumbnail>
      </div>
    );
  }
}

PetCard.propTypes = {
  pet: React.PropTypes.object,
  userStore: React.PropTypes.object
};

export default inject("userStore")(observer(PetCard));
