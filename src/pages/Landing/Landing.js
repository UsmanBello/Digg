import { useState, useMemo } from 'react'
import {getInitialInterests} from '../../utils/Helper'
import './Landing.css';

//Components
import OnBoarding1 from './LandingComponents/OnBoarding1/OnBoarding1'
import OnBoarding2 from './LandingComponents/OnBoarding2/OnBoarding2';
import OnBoarding3 from './LandingComponents/OnBoarding3/OnBoarding3';
import OnBoarding4 from './LandingComponents/OnBoarding4/OnBoarding4';
import OnBoarding5 from './LandingComponents/OnBoarding5/OnBoarding5';
import OnBoarding6 from './LandingComponents/OnBoarding6/OnBoarding6';
import OnBoarding7 from './LandingComponents/OnBoarding7/OnBoarding7';
import OnBoarding8 from './LandingComponents/OnBoarding8/OnBoarding8';
import OnBoarding9 from './LandingComponents/OnBoarding9/OnBoarding9';


const  Landing=()=> {
   
  // const initialInterests= useMemo(() => getInitialInterests(), []);

  const [progress, setProgress] = useState({
    onBoarding1: true,
    onBoarding2: false,
    onBoarding3: false,
    onBoarding4: false,
    onBoarding5: false,
    onBoarding6: false,
    onBoarding7: false,
    onBoarding8: false,
    onBoarding9: false
   })
  const [formData, setFormData]= useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    nationality:'',
    countryOfResidence: '',
    number: '',
    email: '',
    visitedDubai: '',
    familyInDubai: '',
    durationInDubai: '',
    reasonForVisit: '',
    specialty: '',
    interests: '',//initialInterests,
    savings: '',
    education: '',
    timeToArrival: ''
})


const handleChange=(e)=>{
  // console.log([e.target.name] + e.target.value)
  console.log(e.target.type)
  // console.log(formData.interests)
  if(e.target.type==='checkbox'){
      setFormData({...formData, interests: {...formData.interests, [e.target.name]: e.target.checked}})
      console.log(formData.interests)
  }else{
    console.log('here')
     setFormData({...formData, [e.target.name]: e.target.value})
  }
}
const handleNext=(next)=>{
    console.log(formData)
    setProgress({
      onBoarding1: false,
      onBoarding2: next==='onBoarding2',
      onBoarding3: next==='onBoarding3', 
      onBoarding4: next ==='onBoarding4',
      onBoarding5: next==='onBoarding5',
      onBoarding6: next==='onBoarding6',
      onBoarding7: next==='onBoarding7',
      onBoarding8: next==='onBoarding8',
      onBoarding9: next==='onBoarding9',
    })
}
const handleBack =(back)=>{
    console.log(formData)
    setProgress({
      onBoarding1: back==='onBoarding1',
      onBoarding2: back==='onBoarding2',
      onBoarding3: back==='onBoarding3', 
      onBoarding4: back ==='onBoarding4',
      onBoarding5: back==='onBoarding5',
      onBoarding6: back==='onBoarding6',
      onBoarding7: back==='onBoarding7',
      onBoarding8: back==='onBoarding8',
      onBoarding9: back===false,
    })
}

  return (
    <>
    {progress.onBoarding1 &&
      <OnBoarding1 
      formData={formData}
      handleChange={handleChange}
      handleNext={handleNext}/>}
      {
        progress.onBoarding2 &&
        <OnBoarding2
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handleBack={handleBack}/>
      }
      {progress.onBoarding3 &&
        <OnBoarding3
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handleBack={handleBack}/>
      }
      {progress.onBoarding4 &&
        <OnBoarding4
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handleBack={handleBack}/>
      }
      {progress.onBoarding5 &&
        <OnBoarding5
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handleBack={handleBack}/>
      }
      {progress.onBoarding6 &&
        <OnBoarding6
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handleBack={handleBack}/>
      }
      {progress.onBoarding7 &&
        <OnBoarding7
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handleBack={handleBack}/>
      }
      {progress.onBoarding8 &&
        <OnBoarding8
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handleBack={handleBack}/>
      }
      {progress.onBoarding9 &&
        <OnBoarding9
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handleBack={handleBack}/>
      }
      </>
  );
}

export default Landing;