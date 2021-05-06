import ActionButtons from '../ActionButons/ActionButtons';
import QuestionRow from '../QuestionRow/QuestionRow';
import ScreenHeader from '../ScreenHeader/ScreenHeader';
import './OnBoarding2.css';


const  OnBoarding2=({handleChange, handleNext, handleBack, formData})=> {
  return (
    <div className='onBoarding__background'>
       <div className='page__container'>
            <ScreenHeader progress={'12.5'}/>
           <QuestionRow
             question={'Have you ever visited Dubai?'}
             name={'visitedDubai'}
             values={['No', 'Yes']}
             formDataValue={formData.visitedDubai}
             handleChange={handleChange}
           />
           <QuestionRow
             question={'Do you have friends or family Dubai?'}
             name={'familyInDubai'}
             values={['No', 'Yes']}
             formDataValue={formData.familyInDubai}
             handleChange={handleChange}
           />
            <QuestionRow
            question={'How long do you want to stay in Dubai?'}
            name={'durationInDubai'}
            values={['Up to 3 months', '3 - 6 months', '6 - 9 months', '+12 months', '+3 years']}
            formDataValue={formData.durationInDubai}
            handleChange={handleChange}
            />
           
            <div className='page__action__buttons'>
              <ActionButtons
               previous={'onBoarding1'}
               next={'onBoarding3'}
               handleBack={handleBack}
               handleNext={handleNext}
              />
            </div>
       </div>
    </div>
  );
}

export default OnBoarding2;
