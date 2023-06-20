const { 
  getAllDogs,
  getDogsName,
  getDogById,
  postDog,
  updateDog,  
  deleteDog} = require('../controllers/controllerDog');


//📍 GET | /dogs
const getDogsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      let result = await getAllDogs();
      return res.status(200).json(result);
    } else {
      let result = await getDogsName(name);
      return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



//📍 GET | /dogs --> de la base de datos
const getDogsByIdHandler = async (req, res) => {
  const { id } = req.params;
  let origin = isNaN(id) ? "db" : "api";
  try {
    let result = await getDogById(id, origin);
    if (result.error) throw new Error(result.error);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//📍 GET | /dogs/name?="..."
const getDogsByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    let result = await getDogsName(name);
    if (result.length) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ message: 'No se encontraron razas de perros con ese nombre.' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



const createNewDogHandler = async (req, res) => {
  let payload = req.body;
  try {
    const newDog = await postDog(payload);
    res.status(200).json({ dog: newDog }); // Envia los datos del perro creado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//📍 PUT | /dogs
const updateDogHandler = async (req, res) => {
  const { id } = req.params; //para obtener el identificador unico del perro
  const data = req.body; //body se utiliza para obtener los datos actualizados del perro

  try {
    const result = await updateDog(id, data);
    res.status(200).json({ message: "Dog updated", result });
  } catch {
    res.status(400).json({ error: error.message });
  }
};

const deleteDogHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Dog.deleteDog(id);
    res.status(200).json({ message: "Dog deleted", result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}




module.exports = {
    getDogsHandler,
    getDogsByIdHandler,
    createNewDogHandler,
    getDogsByNameHandler,
    updateDogHandler,
    deleteDogHandler,
}