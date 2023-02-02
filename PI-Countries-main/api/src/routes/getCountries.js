const { Router } = require('express');
const { getCountries } = require("../controllers/loadInfodB");
const { getCountryName } = require("../controllers/infoCountry");


const router = Router()


router.get('/', async function(req, res) {
    const { name } = req.query;
  try {
      
    if (name) {
      
      const nameCountries = await getCountryName(name);
      if (nameCountries.length) {
        res.status(200).json(nameCountries);
      } else {
        res.status(400).send("Country Not Found");
      }
      // si no encuentro nada por name
    } else {

      const allCountries = await getCountries();

      if (allCountries) {
         res.status(200).json(allCountries);  
      } else {
        res.status(400).send("Countries Not Found");
      }
    }
       
    } catch (error) {
    throw new Error(error.message);
    }
});




module.exports = router;