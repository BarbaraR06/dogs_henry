const { Router } = require('express');
const { getDogsHandler,
  createNewDogHandler,
  getDogsByIdHandler,
  updateDogHandler,
} = require ('../handlers/dogsHandler')

const dogsRouter = Router();

dogsRouter.get('/', getDogsHandler);
dogsRouter.get('/:id', getDogsByIdHandler);
dogsRouter.post('/', createNewDogHandler);
dogsRouter.put('/:id', updateDogHandler);

module.exports = dogsRouter;

