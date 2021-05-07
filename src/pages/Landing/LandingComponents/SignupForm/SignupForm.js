import { useState } from "react";
import { countryList } from "../../../../utils/Helper";
import {
  isEmptyField,
  acceptedEmail,
  isNumber,
} from "../../../../utils/formValidation";

//ICONS
import dateIcon from "../../../../assets/images/dateIcon.png";

//COMPONENTS
import Invalid from "../../../../components/Invalid/Invalid";
import Required from "../../../../components/Required/Required";
import "./SignupForm.css";

const SignupForm = ({ handleNext, formData, handleChange }) => {
  const [dateInputType, setDateInputType] = useState("text");

  const [error, setError] = useState({
    firstNameRequired: false,
    lastNameRequired: false,
    dobRequired: false,
    genderRequired: false,
    nationalityRequired: false,
    countryOfResidenceRequired: false,
    numberRequired: false,
    emailRequired: false,
    invalidEmail: false,
    invalidNumber: false,
  });

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      dob,
      gender,
      nationality,
      countryOfResidence,
      number,
      email,
    } = formData;
    if (
      isEmptyField(firstName) ||
      isEmptyField(lastName) ||
      isEmptyField(gender) ||
      dob === "" ||
      isEmptyField(nationality) ||
      isEmptyField(countryOfResidence) ||
      isEmptyField(email) ||
      isEmptyField(number) ||
      !acceptedEmail(email) ||
      !isNumber(number)
    ) {
      setError({
        firstNameRequired: isEmptyField(firstName),
        lastNameRequired: isEmptyField(lastName),
        dobRequired: dob === "",
        genderRequired: isEmptyField(gender),
        nationalityRequired: isEmptyField(nationality),
        countryOfResidenceRequired: isEmptyField(countryOfResidence),
        numberRequired: isEmptyField(number),
        emailRequired: isEmptyField(email),
        invalidEmail: !acceptedEmail(email),
        invalidNumber: !isNumber(number),
      });
      return;
    }
    handleNext("onBoarding2");
  };

  const handleChangeHere = (e) => {
    e.target.name === "firstName" &&
      setError({ ...error, firstNameRequired: false });
    e.target.name === "lastName" &&
      setError({ ...error, lastNameRequired: false });
    e.target.name === "dob" && setError({ ...error, dobRequired: false });
    e.target.name === "gender" && setError({ ...error, genderRequired: false });
    e.target.name === "nationality" &&
      setError({ ...error, nationalityRequired: false });
    e.target.name === "countryOfResidence" &&
      setError({ ...error, countryOfResidenceRequired: false });
    e.target.name === "email" &&
      setError({ ...error, emailRequired: false, invalidEmail: false });
    e.target.name === "number" &&
      setError({ ...error, numberRequired: false, invalidNumber: false });
    handleChange(e);
  };

  return (
    <form onSubmit={(e) => handleFormSubmission(e)}>
      <div className="form__header">
        <p>Apply now to work in Dubai</p>
      </div>
      <div className="input__form__row">
        <div className="input__form__column">
          {formData.firstName && <span>First name</span>}
          <input
            placeholder="First Name"
            className={
              formData.firstName ? "drop__text text__input" : "text__input"
            }
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleChangeHere(e)}
          />
          <Required field={"firstName"} display={error.firstNameRequired} />
        </div>
        <div className="input__form__column">
          {formData.lastName && <span>Last name</span>}
          <input
            placeholder="Last Name"
            className={
              formData.lastName ? "drop__text text__input" : "text__input"
            }
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleChangeHere(e)}
          />
          <Required field={"Last name"} display={error.lastNameRequired} />
        </div>
      </div>
      <div className="input__form__row">
        <div className="input__form__column" id="date__input__column">
          {formData.dob && <span>Date of birth</span>}
          <input
            placeholder="Date of birth"
            id="date__picker__input"
            onFocus={() => setDateInputType("date")}
            onBlur={() => setDateInputType("text")}
            className={formData.dob ? "drop__text text__input" : "text__input"}
            type={dateInputType}
            name="dob"
            value={formData.dob}
            onChange={(e) => handleChangeHere(e)}
          />
          {dateInputType === "text" && <img src={dateIcon} id="date__icon" />}
          <Required field={"Date of birth"} display={error.dobRequired} />
        </div>
        <div className="input__form__column" id="gender__select__column">
          <div id="gender__select__title">
            <div id="gender__title">
              {" "}
              <p>Gender</p>
              <Required field={"Gender"} display={error.genderRequired} />
            </div>
          </div>
          <div id="gender__select__radios">
            <label htmlFor="male" className="radio__landing">
              <input
                className="gender__radio__input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={formData.gender === "male"}
                onChange={(e) => handleChangeHere(e)}
              />
              <div className="radio__radio" id="male-margin"></div>
              <div className="radio__label__text"> Male</div>
            </label>
            <label
              htmlFor="female"
              className="radio__landing"
              id="female-radio"
            >
              <input
                className="gender__radio__input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formData.gender === "female"}
                onChange={(e) => handleChangeHere(e)}
              />
              <div className="radio__radio" id="female-margin"></div>
              <div className="radio__label__text"> Female</div>
            </label>
            <label htmlFor="other" className="radio__landing" id="other-radio">
              <input
                className="gender__radio__input"
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={formData.gender === "other"}
                onChange={(e) => handleChangeHere(e)}
              />
              <div className="radio__radio" id="other-margin"></div>
              <div className="radio__label__text">Other</div>
            </label>
          </div>
        </div>
      </div>
      <div className="input__form__row">
        <div className="input__form__column">
          {formData.nationality && <span>Nationality</span>}
          <select
            className={
              formData.nationality ? "drop__text text__input" : "text__input"
            }
            name="nationality"
            onChange={(e) => handleChangeHere(e)}
          >
            <option value={""}> Nationality</option>
            {countryList.map((country, index) => {
              return (
                <option value={country} key={index}>
                  {country}
                </option>
              );
            })}
          </select>
          <Required field={"Nationality"} display={error.nationalityRequired} />
        </div>
        <div className="input__form__column">
          {formData.countryOfResidence && (
            <span className="show__label">Country of residence</span>
          )}
          <select
            className={
              formData.countryOfResidence
                ? "drop__text text__input"
                : "text__input"
            }
            name="countryOfResidence"
            onChange={(e) => handleChangeHere(e)}
          >
            <option value={""}>Country of residence</option>
            {countryList.map((country, index) => {
              return (
                <option value={country} key={index}>
                  {country}
                </option>
              );
            })}
          </select>
          <Required
            field={"Country of residence"}
            display={error.countryOfResidenceRequired}
          />
        </div>
      </div>
      <div className="text__form__row">
        <p>How we can contact you?</p>
      </div>
      <div className="input__form__row">
        <div className="input__form__column">
          {formData.number && <span>Contact number</span>}
          <input
            placeholder="Contact number"
            className={
              formData.number ? "drop__text text__input" : "text__input"
            }
            name="number"
            value={formData.number}
            onChange={(e) => handleChangeHere(e)}
          />
          <Invalid field={"Contact bumber"} display={error.invalidNumber} />
        </div>
        <div className="input__form__column">
          {formData.email && <span>Email address</span>}
          <input
            placeholder="Email address"
            className={
              formData.email ? "drop__text text__input" : "text__input"
            }
            name="email"
            value={formData.email}
            onChange={(e) => handleChangeHere(e)}
          />
          <Invalid field={"Email"} display={error.invalidEmail} />
        </div>
      </div>
      <div id="form__button__container">
        <button className="signup__button" type="submit">
          Apply now
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
