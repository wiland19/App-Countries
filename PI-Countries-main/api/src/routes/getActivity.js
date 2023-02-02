
const { getActivities, addActivities } = require("../controllers/infoActivity");
const { Router } = require("express");
const { Country, Activity } = require("../db");

const router = Router();

router.get("/", async function (req, res) {

  try {

    const allActivities = await getActivities();
    res.status(200).json(allActivities);
    
  } catch (error) {
    throw new Error(error.message);
  }
  
});

router.post("/", async function (req, res) {
  
  const { name, difficulty, duration, season, countryName } = req.body;
  
  try {

    const newActivity = await addActivities();

    res.status(200).json(newActivity)
    
  } catch (error) {
    res.status(400).send("No se pudo");
    
  }
})

module.exports = router;