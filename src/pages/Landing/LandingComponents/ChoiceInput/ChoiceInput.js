import "./ChoiceInput";

const ChoiceInput = ({
  name,
  id,
  value,
  handleChange,
  formDataValue,
  type,
  imgSrc,
}) => {
  return type === "checkbox" ? (
    <label
      className={
        formDataValue[value] === true ? "selected checkbox" : "checkbox"
      }
    >
      <input
        className="onboarding__input"
        type="checkbox"
        name={name}
        checked={formDataValue[value] === true}
        onChange={(e) => handleChange(e)}
      />
      {value}
    </label>
  ) : value.length > 3 ? ( //TO GIVE SHORTER STRINGS MORE WIDTH TO AVOID CIRLCE SHAPE
    <label
      htmlFor={id}
      className={formDataValue === value ? "selected radio" : "radio"}
    >
      <input
        className="onboarding__input"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={formDataValue === value}
        onChange={(e) => handleChange(e)}
      />
      <img /> {value}
    </label>
  ) : (
    <label
      htmlFor={id}
      className={formDataValue === value ? "selected radio" : "radio"}
    >
      <input
        className="onboarding__input"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={formDataValue === value}
        onChange={(e) => handleChange(e)}
      />
      <img /> {value}
    </label>
  );
};

export default ChoiceInput;
