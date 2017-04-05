import DisplayPets from './DisplayPets';
import { observer, inject } from 'mobx-react';

class DogDisplay extends DisplayPets {
  constructor() {
    super();
    this.state.species = "dog";
  }
}

export default inject("userStore")(observer(DogDisplay));
