import DisplayPets from './DisplayPets';
import { observer, inject } from 'mobx-react';

class CatDisplay extends DisplayPets {
  constructor() {
    super();
    this.state.species = "cat";
  }
}

export default inject("userStore")(observer(CatDisplay));
