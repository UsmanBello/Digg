import { useState } from "react";
import "./OnBoarding1.css";

//Components
import SignupForm from "../SignupForm/SignupForm";
import ScreenHeader from "../ScreenHeader/ScreenHeader";

const OnBoarding1 = ({ handleNext, handleChange, formData }) => {
  return (
    <div id="landing__page">
      <div className="left__landing">
        <header className="page__header">
          <h1 className="brand__title" id="landing__header__left">
            digg
          </h1>
        </header>
        <div className="landing__container__texts">
          <div className="top__text">
            <p>
              "Coming to Dubai with One Step Dubai has been the best decision of
              my life. I am now living in Dubai with a good job and I will be
              getting married next year!"
            </p>
          </div>
          <div className="bottom__text">
            <p>Mohammed, One Step Dubai student</p>
            <p>Pakistan</p>
          </div>
        </div>
      </div>
      <div className="right__landing">
        <header className="page__header">
          <h1 className="brand__title">digg</h1>
        </header>
        <div className="signup__form__container">
          <SignupForm
            handleNext={handleNext}
            formData={formData}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding1;
