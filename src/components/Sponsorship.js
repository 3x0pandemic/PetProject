import React from 'react';
import { observer, inject } from 'mobx-react';
import { Button, ProgressBar } from 'react-bootstrap';


class Sponsorship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountSponsored: 0,
      amountInDb: this.props.pet.amountSponsored,
      moneySent: false
    };
    this.handleAmountSponsoredChange = this.handleAmountSponsoredChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.progressPercentage = this.progressPercentage.bind(this);
  }

  handleAmountSponsoredChange(e) {
    let num = parseInt(e.target.value);
    let parsedNum = num ? num : 0;
    this.setState({amountSponsored: parsedNum});
  }

  submitHandler(e){
    e.preventDefault();
    this.sponsorPet(this.state.amountSponsored, this.props.pet.animalId);
    this.setState({moneySent: true})
  }

  sponsorPet(amountSponsored, animalId) {
    fetch('/pet/' + animalId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amountSponsored: amountSponsored
      })
    });
  }

  progressPercentage(num) {
    return (num/500) * 100;
  }

  render() {
    let fullySponsored = this.props.pet.amountSponsored === 500 ? "green-bar" : "";
    if(this.state.moneySent) {
      return(
        <div>
          <h3>Thanks FUR your donation! <br/><br/> &mdash;{this.props.pet.name}</h3>
        </div>
      );
    }
    return(
      <div>
        <br/>
        <ProgressBar className={fullySponsored} now={this.progressPercentage(parseInt(this.state.amountSponsored) + parseInt(this.state.amountInDb))}
                     label={`$${parseInt(this.state.amountSponsored) + parseInt(this.state.amountInDb)}`} />
        {
          this.props.userStore.loggedIn ?
          <form>
            <input onChange={this.handleAmountSponsoredChange} type="email" name="email"
                   value={this.state.handleAmountSponsoredChange} placeholder="$$$ Amount"/>
            <br/>
            <br/>
            <Button onClick={this.submitHandler} type="submit">Sponsor</Button>
          </form> : "Login to help sponsor " + this.props.pet.name
        }
      </div>
    );
  }
}

Sponsorship.propTypes = {
  pet: React.PropTypes.object,
  userStore: React.PropTypes.object
};

export default inject("userStore")(observer(Sponsorship));
