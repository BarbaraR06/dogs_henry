const { Router } = require('express');
const { Op } = require('sequelize');
const router = Router();
const { 
  getApiDogs,
  getDogsDb,
  getDogsName,
  getDogById,
  postDog, } = require('../controllers/controllerDog');


//📍 GET | /dogs
router.get('/', async (req, res) => {
  try {
    const allDogs = await getApiDogs();
    res.status(200).json(allDogs);
    console.log (allDogs);
  } catch (error) {
    console.log(error);
  }
});

//📍 GET | /dogs --> de la base de datos
router.get ('/db', async (req, res, next) => {
  try {
    const allDogsDB = await getDogsDb();
    res.status(200).json({data:allDogsDB});
  } catch (error) {
    next (error)
  }
})

//📍 GET | /dogs/name?="..."
router.get('/name', async (req, res, next) => {
  const { name } = req.query;
  try {
      const dogs = await getDogsName(name);
      res.status(200).json({ data: dogs });
  } catch (error) {
     console.log (dogs)
      next(error);
  }
});

//📍 GET | /dogs/:idRaza
// Verifica si el ID corresponde a un perro de la API
router.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
      const dogId= await getDogById(id)
      res.status(200).json({ data: dogId })

  } catch (error) {
      console.log(dogId)
      next (error)
  }
})


//📍 POST | /dogs
router.post('/', async (req, res, next) => {
 const {name, bredFor, lifeSpan, weight, height, image, temperament} = req.body;
 try {
  const newDog = await postDog (name, bredFor, lifeSpan, weight, height, image, temperament)
  res.status(200).json({ data: newDog })
} catch (error) {
  next(error)
 }
})


module.exports = router;