const {Router} = require('express');
const router = Router();
const {getByTemp, getAllTemperaments} = require('../controllers/controllerTemperament');


//📍 GET | /temperaments
router.get('/', async (req, res, next) => {
    try {
        let allTempDb = await getAllTemperaments();
        res.status(200).json({data:allTempDb})
    } catch (error) {
       next(error);
    }
})

router.get ('/temperament', async (req, res, next)=> {
    const {temperament} = req.query
    try {
        const apiTemps = await getByTemp(temperament);
        res.status(200).json({data:apiTemps})
    } catch (error) {
        console.log(error)
        next(error)
    }
})


module.exports = router;