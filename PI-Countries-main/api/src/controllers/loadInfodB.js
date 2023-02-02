
const axios = require("axios");
const { Country, Activity } = require("../db");



const getCountries = async () => {

  // Explicacion metodo findAll con include
    let dbCountries = await Country.findAll({
        include: [Activity]
    })
  
    try {
      if (dbCountries.length === 0) {
          //explicacion que esta vacia la dB
            const infoApi = (await axios.get('https://restcountries.com/v3/all')).data;
            
            const countries = infoApi.map((country) => {
                return {
                    id: country.cca3,
                    name: country.name.common,
                    flags: country.flags[0],
                    continents: country.continents[0],
                    capital: country.capital ? country.capital[0] : "Data not Found",
                    subregion: country.subregion ? country.subregion : "Data not Found",
                    area: country.area,
                    population: country.population
                };
            })
           // explicacion creacion data dB
            countries.forEach((country) => {
                Country.findOrCreate({
                    where: { id: country.id },
                    defaults: {
                        id: country.id,
                        name: country.name,
                        flags: country.flags,
                        continents: country.continents,
                        capital: country.capital,
                        subregion: country.subregion,
                        area: country.area,
                        population: country.population,
                    }
                })
            });
        
        //sigue la exp`licacion
            dbCountries = await Country.findAll({
                include: [Activity]
            })
      }
      return dbCountries;
      
    } catch(error){
       throw new Error(error.message);
    }
}

module.exports = { getCountries };








