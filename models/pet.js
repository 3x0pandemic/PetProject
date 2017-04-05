import mongoose from 'mongoose';

let PetSchema = new mongoose.Schema({
  url: String,
  animalId: Number,
  name: String,
  mainPhoto: String,
  species: String,
  breed: String,
  age: String,
  gender: String,
  size: String,
  color: String,
  spayNeuter: String,
  declawed: String,
  intakeDate: String,
  description: String,
  adopted: { type: Boolean, default: false },
  amountSponsored: { type: Number, default: 0 } 
});

export default mongoose.model('Pet', PetSchema);
