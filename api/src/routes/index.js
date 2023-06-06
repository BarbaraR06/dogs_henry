const { Router } = require('express');
const Dogs = require('../routes/dogsRoute.js');
const Temperaments = require('../routes/temperamentsRoute.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', Dogs);
router.use('/temperament', Temperaments);

module.exports = router;
