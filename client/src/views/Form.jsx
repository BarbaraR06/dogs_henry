import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewDog, getAllTemperaments } from "../redux/actions";
import validate from "../components/Validate";
import { Link } from "react-router-dom";
import styles from "../css/Form.module.css";
import { Navigate } from "react-router-dom";


const Form = () => {
  const dispatch = useDispatch();

  const temperaments = useSelector((state) => state.temperaments);

  const [inputs, setInputs] = useState({
    name: "",
    height: "",
    image: "",
    life_span: "",
    weightMax: "",
    weightMin: "",
    temperament: [],
  });

  const [redirectToHome, setRedirectToHome] = useState(false);

  const [errors, setErrors] = useState({});

  const handleInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(validate({ ...inputs, [event.target.name]: event.target.value }));
  };

  const handleTemperament = (event) => {
    let { value } = event.target;
    if (inputs.temperament.includes(value)) {
      return alert("Temperaments cannot be repeated");
    }
    if (value === "all") {
      return;
    }
    setInputs({
      ...inputs,
      temperament: [...inputs.temperament, value],
    });
    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleDelete = (temp) => {
    setInputs({
      ...inputs,
      temperament: inputs.temperament.filter((inst) => inst !== temp),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createNewDog(inputs));
    console.log(inputs);
    alert("Dog created");
    setInputs({
      name: "",
      height: "",
      image: "",
      life_span: "",
      weightMax: "",
      weightMin: "",
      temperament: [],
    });
    setErrors({});
    setRedirectToHome(true);
  };

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, []);

  return (
    <div>
      {redirectToHome && <Navigate to="/home" />}
      <form className={styles.Formulario}>
        <div className={styles.inputs}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={(event) => handleInputs(event)}
            />
            {errors.name && <strong>{errors.name}</strong>}
          </div>
          <div>
            <label>Image: </label>
            <input
              type="text"
              name="image"
              value={inputs.image}
              placeholder={"Format jpg or png"}
              onChange={(event) => handleInputs(event)}
            />
            {errors.image && <strong>{errors.image}</strong>}
          </div>
          <br />

          <div>
            <label>
              Weight
              <br />
              <br />
              Min (kg):
              <input
                type="text"
                name="weightMin"
                value={inputs.weightMin}
                onChange={(event) => handleInputs(event)}
              />
              {errors.weightMin && <strong>{errors.weightMin}</strong>}
              <br />
              Max (kg):
              <input
                type="text"
                name="weightMax"
                value={inputs.weightMax}
                onChange={(event) => handleInputs(event)}
              />
              {errors.weightMax && <strong>{errors.weightMax}</strong>}
            </label>
          </div>

          <br />

          <div>
            <label>
              Height (cm):
              <input
                type="text"
                name="height"
                value={inputs.height}
                onChange={(event) => handleInputs(event)}
              />
              {errors.height && <strong>{errors.height}</strong>}
            </label>
          </div>

          <br />

          <div>
            <label>
              Life expectancy:
              <input
                type="text"
                name="life_span"
                value={inputs.life_span}
                onChange={(event) => handleInputs(event)}
              />
              {errors.life_span && <strong>{errors.life_span}</strong>}
            </label>
          </div>

          <br />

          <label>
            Temperaments:
            <div className={styles.temperaments}>
              <select onChange={(event) => handleTemperament(event)}>
                <option className={styles.opciones} value="all"></option>
                {temperaments.map((temp) => {
                  return (
                    <option className={styles.opciones} value={temp} key={temp}>
                      {temp}
                    </option>
                  );
                })}
              </select>
              {inputs.temperament.map((temp) => (
                <div className={styles.toDelete} key={temp}>
                  <p>{temp}</p>
                  <button onClick={() => handleDelete(temp)}>X</button>
                </div>
              ))}
              <button
                type="submit"
                onClick={(event) => handleSubmit(event)}
                className={styles.button}
                disabled={
                  errors.name ||
                  errors.weightMin ||
                  errors.weightMax ||
                  errors.height ||
                  errors.life_span ||
                  errors.image ||
                  !inputs.temperament.length ||
                  !inputs.name
                }
              > Add dog to the database
              </button>
              {errors.temperament && <strong>{errors.temperament}</strong>}
            </div>
          </label>
          <Link to="/home" className={styles.buttonBack}>
        Go back to Home
      </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;