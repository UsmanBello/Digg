import { timeToArrivalOptions } from '../../../../utils/Helper'

import ActionButtons from '../ActionButons/ActionButtons';
import QuestionRow from '../QuestionRow/QuestionRow';
import ScreenHeader from '../ScreenHeader/ScreenHeader';
// import './OnBoarding8.css';


const  OnBoarding8=({handleChange, handleNext, handleBack, formData})=> {

 
  return (
    <div className='onBoarding__background'>
       <div className='page__container'>
           <ScreenHeader progress={'87.5'}/>
           <QuestionRow
             question={'How soon do you want to come to Dubai?'}
             name={'timeToArrival'}
             values={timeToArrivalOptions}
             formDataValue={formData.timeToArrival}
             handleChange={handleChange}
           />
            <div className='page__action__buttons'>
              <ActionButtons
               previous={'onBoarding7'}
               next={'onBoarding9'}
               handleBack={handleBack}
               handleNext={handleNext}
              />
            </div>
       </div>
    </div>
  );
}

export default OnBoarding8;