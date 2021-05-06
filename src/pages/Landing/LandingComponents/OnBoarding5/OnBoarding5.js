import {interestsOptions} from '../../../../utils/Helper'

import ActionButtons from '../ActionButons/ActionButtons';
import QuestionRow from '../QuestionRow/QuestionRow';
import ScreenHeader from '../ScreenHeader/ScreenHeader';
// import './OnBoarding5.css';


const  OnBoarding5=({handleChange, handleNext, handleBack, formData})=> {

  return (
    <div className='onBoarding__background'>
       <div className='page__container'>
           <ScreenHeader progress={'50'}/>
           <QuestionRow
             question={'What are your interests?'}
             name={'interests'}
             values={interestsOptions}
             formDataValue={formData.interests}
             handleChange={handleChange}
            //  type={'checkbox'}
           />
            <div className='page__action__buttons'>
              <ActionButtons
               previous={'onBoarding4'}
               next={'onBoarding6'}
               handleBack={handleBack}
               handleNext={handleNext}
              />
            </div>
       </div>
    </div>
  );
}

export default OnBoarding5;