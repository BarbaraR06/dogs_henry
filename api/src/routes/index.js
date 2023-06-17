const { Router } = require('express');
const dogsRouter = require('./dogsRoute.js');
const tempRouter = require('./temperamentsRoute.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogsRouter);

router.use('/temperaments', tempRouter);



module.exports = router;
