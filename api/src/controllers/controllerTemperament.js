require("dotenv").config();
const { default: axios } = require("axios");
const { API_KEY } = process.env;
const { getDogsDb } = require("../controllers/controllerDog");
const { Temperament } = require("../db");

//📍 GET | /temperament/
const getAllTemperaments = async () => {
  let dataApi = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  let tempApi = dataApi.data
    .map((temp) => temp.temperament)
    .toString()
    .split(",");
  let temps = [...new Set(tempApi.sort())];
  temps.sort().map((temp) => {
    Temperament.findOrCreate({
      where: { name: temp },
    });
  });
  let allTempDb = await Temperament.findAll();

  return allTempDb;
};

//📍 GET | /temperament/temperament?temperament="..."
const getByTemp = async (temperament) => {
  try {
    let resultApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    let resultsTemp = resultApi.data.filter((t) => t.temperament !== undefined);
    let resultsFilter = resultsTemp.filter((t) =>
      t.temperament.includes(`${temperament}`)
    );
    let apiTemps = resultsFilter.map((raza) => {
      return {
        id: raza.id,
        name: raza.name,
        image: raza.image.url,
        bredFor: raza.bred_for,
        temperament: raza.temperament,
        lifeSpan: raza.life_span,
        weight: raza.weight.metric,
        height: raza.height.metric,
      };
    });
    let tempDB = await getDogsDb();
    const filterTempsDB = tempDB.filter((d) =>
      d.temperaments.includes(`${temperament}`)
    );

    const allTemperaments = [...apiTemps, ...filterTempsDB];
    return allTemperaments;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllTemperaments,
  getByTemp,
};
