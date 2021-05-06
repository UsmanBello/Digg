import './SignupForm.css'

const SignupForm=({handleNext, formData, handleChange})=>{

const handleFormSubmission=(e)=>{
    e.preventDefault()
    handleNext('onBoarding2')
}

    return (
        <form onSubmit={(e)=>handleFormSubmission(e)}>
            <div className='form__header'>
                <p>Apply now to work in Dubai</p> 
            </div>
            <div className='input__form__row'>
                <div className='input__form__column'>
                {formData.firstName && <span >First name</span>}

                <input 
                placeholder='First Name'
                className='text__input'
                name='firstName'
                value={formData.firstName}
                onChange={(e)=>handleChange(e)}/>
                </div>
                <div className='input__form__column'>
                {formData.lastName && <span >Last name</span>}
                    <input
                    placeholder='Last Name'
                    className='text__input'
                    name='lastName'
                    value={formData.lastName}
                    onChange={(e)=>handleChange(e)}/>
                </div>
            </div>
            <div className='input__form__row'>
                <div className='input__form__column'>
               {formData.dob && <span>Date of birth</span>}
                <input
                placeholder='Date of birth'
                className= 'text__input'
                name='dob'
                value={formData.dob}
                onChange={(e)=>handleChange(e)}/>
                </div>
                <div className='input__form__column' id='gender__select__column'>
                    <div id='gender__select__title'>
                        <p>Gender</p>
                    </div>
                    <div id='gende__select__radios'>
                        <label htmlFor='male' className='radio'>
                            <input
                                className='gender__radio__input'
                                type='radio'
                                name='gender'
                                id='male'
                                value='male'
                                checked={formData.gender === 'male'}
                                onChange={(e)=>handleChange(e)}
                            />
                            {' '}Male
                        </label>
                        <label htmlFor='female' className='radio' id='female-radio'>
                            <input
                            className='gender__radio__input'
                            type='radio'
                            name='gender'
                            id='female'
                            value='female'
                            checked={formData.gender === 'female'}
                            onChange={(e)=>handleChange(e)}
                            />
                            {' '}Female
                        </label>
                    </div>
                </div>
            </div>
            <div className='input__form__row'>
            <div className='input__form__column'>
             {formData.nationality  && <span>Nationality</span>}
                    <input
                    placeholder='Nationality'
                    className='text__input'
                    name='nationality'
                    value={formData.nationality}
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div className='input__form__column'>
                {formData.countryOfResidence && <span className='show__label'>Country of residence</span>}
                    <input
                    placeholder='Country of residence'
                    className='text__input'
                    name='countryOfResidence'
                    value={formData.countryOfResidence}
                    onChange={(e)=>handleChange(e)}/>
                </div>
            </div>
            <div className='text__form__row'>
                <p>How we can contact you?</p>
            </div>
            <div className='input__form__row'>
            <div className='input__form__column'>
            {formData.number &&<span>Contact number</span>}
                    <input
                    placeholder='Contact number'
                    className='text__input'
                    name='number'
                    value={formData.number}
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div className='input__form__column'>
               {formData.email &&<span>Email address</span>}
                    <input
                    placeholder='Email address'
                    className='text__input'
                    name='email'
                    value={formData.email}
                    onChange={(e)=>handleChange(e)}/>
                </div>
            </div>
            <div id='form__button__container'>
                <button className='signup__button' type='submit'>Apply now</button>
            </div>
        </form>
        
    )
}

export default SignupForm
