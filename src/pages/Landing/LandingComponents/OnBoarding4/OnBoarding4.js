import { specialtiesOptions }  from '../../../../utils/Helper'

import ActionButtons from '../ActionButons/ActionButtons';
import QuestionRow from '../QuestionRow/QuestionRow';
import ScreenHeader from '../ScreenHeader/ScreenHeader';
// import './OnBoarding4.css';


const  OnBoarding4=({handleChange, handleNext, handleBack, formData})=> {

  return (
    <div className='onBoarding__background'>
       <div className='page__container'>
           <ScreenHeader progress={'37.5'}/>
           <QuestionRow
             question={'What industry will you prefer to work in?'}
             name={'specialty'}
             values={specialtiesOptions}
             formDataValue={formData.specialty}
             handleChange={handleChange}
           />
            <div className='page__action__buttons'>
              <ActionButtons
               previous={'onBoarding3'}
               next={'onBoarding5'}
               handleBack={handleBack}
               handleNext={handleNext}
              />
            </div>
       </div>
    </div>
  );
}

export default OnBoarding4;