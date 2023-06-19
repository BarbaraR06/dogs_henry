import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewDog, getAllTemperaments } from "../redux/actions";
import validate from "../components/Validate";
import { Link } from "react-router-dom";
import styles from "../css/Form.module.css";
import { Navigate } from "react-router-dom";
import descarga from "../img/descarga.jfif";

const Form = () => {
  const dispatch = useDispatch();

  const temperaments = useSelector((state) => state.temperaments);

  const [inputs, setInputs] = useState({
    name: "",
    height: "",
    image: descarga,
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

  const handleDelete = (event) => {
    setInputs({
      ...inputs,
      temperament: inputs.temperament.filter((inst) => inst !== event),
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
      image: descarga,
      life_span: "",
      weightMax: "",
      weightMin: "",
      temperament: [],
    });
    setErrors({});
    setRedirectToHome(true);
  };

  const handleSelectDefaultImage = () => {
    setInputs({
      ...inputs,
      image: descarga,
    });
  };
  
  useEffect(() => {
    dispatch(getAllTemperaments());
  }, );

  return (
    <div>
      {redirectToHome && <Navigate to="/home" />}
      <Link to="/home" className={styles.button}>
        Go back
      </Link>
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
                placeholder={"For example: 55 "}
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
                placeholder={"For example: 10 - 15 years"}
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
                    <option
                      className={styles.opciones}
                      value={temp}
                      key={temp}
                    >
                      {temp}
                    </option>
                  );
                })}
              </select>
              <h4>My dog is...</h4>
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
                  !inputs.temperament.length ||
                  !inputs.name
                }
              >
                Add my dog
              </button>
              {errors.temperament && <strong>{errors.temperament}</strong>}
              <button
                type="button"
                onClick={handleSelectDefaultImage}
                className={styles.button}
              >
                Select Default Image
              </button>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;