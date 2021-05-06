import { educationOptions } from '../../../../utils/Helper'
import ActionButtons from '../ActionButons/ActionButtons';
import QuestionRow from '../QuestionRow/QuestionRow';
import ScreenHeader from '../ScreenHeader/ScreenHeader';
// import './OnBoarding7.css';


const  OnBoarding7=({handleChange, handleNext, handleBack, formData})=> {

  return (
    <div className='onBoarding__background'>
       <div className='page__container'>
           <ScreenHeader progress={'75'}/>
           <QuestionRow
             question={'What is your education level?'}
             name={'education'}
             values={educationOptions}
             formDataValue={formData.education}
             handleChange={handleChange}
           />
            <div className='page__action__buttons'>
              <ActionButtons
               previous={'onBoarding6'}
               next={'onBoarding8'}
               handleBack={handleBack}
               handleNext={handleNext}
              />
            </div>
       </div>
    </div>
  );
}

export default OnBoarding7;