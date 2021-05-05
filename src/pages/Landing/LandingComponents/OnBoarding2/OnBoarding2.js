import './OnBoarding2.css';


const  OnBoarding2=({handleChange, handleNext, handleBack, formData})=> {
  return (
    <div className='onBoarding1__background'>
       <div className='page__container'>
            <header className='progress__container'>
                <h1>digg</h1>
                <div className='progress__container'>
                  <span>Progress</span>
                  <div className='progress__bar1'><div className='progress1'></div></div>
                </div>
            </header>
            <div className='question__row'>
              <p>Have you ever visited Dubai?</p>
              <div className='answer__container'>
                        <label htmlFor='no' className='radio'>
                            <input
                                className='onboarding__input'
                                type='radio'
                                id='no'
                                value='no'
                                checked={formData.visitedDubai === 'no'}
                                onChange={(e)=>handleChange(e)}
                            />
                            {' '}No
                        </label>
                        <label htmlFor='yes' className='radio'>
                            <input
                                className='onboarding__input'
                                type='radio'
                                id='yes'
                                value='yes'
                                checked={formData.visitedDubai === 'yes'}
                                onChange={(e)=>handleChange(e)}
                            />
                            {' '}Yes
                        </label>
              </div>
            </div>
            <div className='question__row'>
            <p>Do you have friends or family Dubai?</p>
              <div className='answer__container'>
              <label htmlFor='no' className='radio'>
                            <input
                                className='onboarding__input'
                                type='radio'
                                id='no'
                                value='no'
                                checked={formData.familyInDubai === 'no'}
                                onChange={(e)=>handleChange(e)}
                            />
                            {' '}No
                        </label>
                        <label htmlFor='yes' className='radio'>
                            <input
                                className='onboarding__input'
                                type='radio'
                                id='yes'
                                value='yes'
                                checked={formData.familyInDubai === 'yes'}
                                onChange={(e)=>handleChange(e)}
                            />
                            {' '}Yes
                        </label>
              </div>
            </div>
            <div className='question__row'>
            <p>How long do you want to stay in Dubai?</p>
              <div className='answer__container'>
                        <label htmlFor='up to 3 months' className='radio'>
                            <input
                                className='onboarding__input'
                                type='radio'
                                id='up to 3 months'
                                value='up to 3 months'
                                checked={formData.durationInDubai === 'up to 3 months'}
                                onChange={(e)=>handleChange(e)}
                            />
                            {' '}up to 3 months
                        </label>
                        <label htmlFor='3 - 6 months' className='radio'>
                            <input
                                className='onboarding__input'
                                type='radio'
                                id='3 - 6 months'
                                value='3 - 6 months'
                                checked={formData.durationInDubai === '3 - 6 months'}
                                onChange={(e)=>handleChange(e)}
                            />
                            {' '}3 - 6 months
                        </label>
                        <label htmlFor='6 to 12 months' className='radio'>
                            <input
                                className='onboarding__input'
                                type='radio'
                                id='6 to 12 months'
                                value='6 to 12 months'
                                checked={formData.durationInDubai === '6 to 12 months'}
                                onChange={(e)=>handleChange(e)}
                            />
                            {' '}6 - 9 months
                        </label>
                        <label htmlFor='+12 months' className='radio'>
                            <input
                                className='onboarding__input'
                                type='radio'
                                id='+12 months'
                                value='+12 months'
                                checked={formData.durationInDubai === '+12 months'}
                                onChange={(e)=>handleChange(e)}
                            />
                            {' '}+12 months
                        </label>
                        <label htmlFor='+3 years' className='radio'>
                            <input
                                className='onboarding__input'
                                type='radio'
                                id='+3 years'
                                value='+3 years'
                                checked={formData.durationInDubai === '+3 years'}
                                onChange={(e)=>handleChange(e)}
                            />
                            {' '}+3 years
                        </label>
                  
              </div>
            </div>
            <div className='page__action__buttons'>
              <button onClick={()=>{handleBack('onBoarding1')}}>
                  back
              </button>
              <button onClick={()=>{handleNext('onBoarding3')}}>
                  next
              </button>
            </div>
       </div>
    </div>
  );
}

export default OnBoarding2;