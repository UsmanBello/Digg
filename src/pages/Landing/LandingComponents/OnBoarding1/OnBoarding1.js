import { useState } from 'react'
import './OnBoarding1.css';

//Components
import SignupForm from '../SignupForm/SignupForm';

const  OnBoarding1=({handleNext, handleChange, formData})=> {

  return (
    <div id='landing__page'>
       <div className='left__landing'>

       </div>
       <div className='right__landing'>
            <div className='signup__form__container'>
                <SignupForm
                handleNext={handleNext}
                formData={formData}
                handleChange={handleChange}/>
            </div>
       </div>
    </div>
  );
}

export default OnBoarding1;