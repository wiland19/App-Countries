
const { Country, Activity } = require("../db");


const getActivities = async () => {
  try {

    const allActivities = await Activity.findAll({
      include: [Country]
    })
    return allActivities;
    
  } catch (error) {
     throw new Error(error.message);
  }
};

const addActivities = async (id,name, difficulty, duration, season,countryName) => {
  
  try {

    const newActivity = await Activity.create({ id, name, difficulty, duration, season, countryName });

    const selectCountry = await Country.findAll({
      where: {
        name: countryName
      }
    });

    return newActivity.addCountry(selectCountry);
    
  } catch (error) {
     throw new Error(error.message);
  }
  
};

module.exports = { getActivities, addActivities };