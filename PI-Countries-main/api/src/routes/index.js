const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getCountries = require("./getCountries");
const getCountryId = require("./getCountryId");
const getActivity = require("./getActivity")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", getCountries);
router.use("/countries", getCountryId);
router.use("/activities", getActivity);


module.exports = router;
