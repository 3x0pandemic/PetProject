import DisplayPets from './DisplayPets';
import { observer, inject } from 'mobx-react';

class FavoritesDisplay extends DisplayPets {
  constructor() {
    super();

  }
}

export default inject("userStore")(observer(FavoritesDisplay));
