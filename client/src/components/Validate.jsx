const validate = ({
  name,
  height,
  image,
  life_span,
  weightMax,
  weightMin,
  temperament,
}) => {
  let errors = {};
  let regexImg =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
  let regexName = /^[a-zA-Z]+$/;

  if (!name.trim()) {
    errors.name = "Name is required";
  } else if (!regexName.test(name)) {
    errors.name = "Name must be a string";
  } else if (name.length > 40 || name.length < 2) {
    errors.name =
      "Please choose a name which is longer than 1 character and shorter than 40 characters";
  }

  if (!weightMin) {
    errors.weightMin = "Please choose a minimun weight";
  } else if (weightMin.trim() > 100 || weightMin.trim() < 1) {
    errors.weightMin =
      "Minimun weight can not be higher than 100 or lesser than 1";
  }
  if (!weightMax) {
    errors.weightMax = "Please choose a maximun weight";
  } else if (weightMax.trim() > 100 || weightMax.trim() < 1) {
    errors.weightMax =
      "Maximun weight can not be higher than 100 or lesser than 1";
  }
  if (weightMax && weightMin) {
    if (parseInt(weightMin) >= parseInt(weightMax)) {
      errors.weightMax =
        "Maximun weight can not be inferior or equal than minimun weight";
    }
  }
  if (!height) {
    errors.height = "Please choose a maximun height and a maximun height";
  }
  if (!life_span) {
    errors.life_span = "Please choose an approximate life span";
  }
  if (!image.trim()) {
    errors.image = "Please insert an image";
  } else if (!regexImg.test(image.trim())) {
    errors.image = "Please insert a valid file";
  }
  if (!temperament) {
    errors.temperament = "Please choose at least one temperament";
  } else if (temperament.length > 5) {
    errors.temperament = "You can only select up to 5 temperaments";
  }
  if (temperament && temperament.length <= 5 && errors.temperament) {
    delete errors.temperament;
  }
  return errors;
};

export default validate;
