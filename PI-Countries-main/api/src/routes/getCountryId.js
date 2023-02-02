
const { Router } = require("express");
const { getCountryId } = require("../controllers/infoCountry");
const router = Router();


router.get("/:id", async function (req, res) {
  
  const { id } = req.params;

  try {

    const idCountry = await getCountryId(id);
    if (idCountry) {
      res.status(200).json(idCountry);
    } else {
      res.status(400).send("Country not Found By Id")
    }
    
  } catch (error) {
    
    return error;
    
  }

})

module.exports = router;