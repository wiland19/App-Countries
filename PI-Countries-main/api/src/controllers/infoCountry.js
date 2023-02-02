
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");


const getCountryId = async (id) => {

  try {

    return await Country.findByPk(id.toUpperCase(), { include: [Activity] });
    
  } catch (error) {
    
    return error;
    
  }
  
}

const getCountryName = async (name) => {

  try {
    const nameCountries = await Country.findAll({

      //realiza la busqueda en mayuscula o minuscula o resultados similares
        // operador Op.like
       where: {
                name: {
                    [Op.iLike] : `%${name}%`
                }
            },
      include: [Activity]

    });

    return nameCountries;
    
  } catch (error) {

    throw new Error(error.message);
    
  }

};

module.exports = { getCountryId, getCountryName };