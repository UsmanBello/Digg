import { useState } from 'react'
import './OnBoarding1.css';

//Components
import SignupForm from '../SignupForm/SignupForm';
import ScreenHeader from '../ScreenHeader/ScreenHeader'

const  OnBoarding1=({handleNext, handleChange, formData})=> {

  return (
    <div id='landing__page'>
       <div className='left__landing'>
          
       </div>
       <div className='right__landing'>
          <header className='page__header'>
            <h1 className='brand__title'>digg</h1>
            </header>
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