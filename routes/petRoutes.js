import React from 'react';
import webpack from 'webpack';
import Pet from '../models/pet';
import express from 'express';
let petRoutes = express.Router();

petRoutes.use(function(req, res, next){
  console.log('something is happening!');
  res.setHeader('Content-Type', 'application/json');
  next();
});

petRoutes.route('/petsdata')
  .get(function(req, res, next){
    Pet.find({"adopted": "false"}, function(err, pets){
      if(err){
        next(err);
      } else {
        res.json(pets);
      }
    });
  });

petRoutes.put('/pet/:animalId', function(req, res, next) {
  Pet.update({animalId: req.params.animalId}, { $inc: { amountSponsored: req.body.amountSponsored }},
    function(err, pet) {
      if(err) {
        return next(err);
      } else {
        res.json(pet);
      }
    });
});

export default petRoutes;
