import { useState } from 'react'
import './Landing.css';

//Components
import OnBoarding1 from './LandingComponents/OnBoarding1/OnBoarding1'
import OnBoarding2 from './LandingComponents/OnBoarding2/OnBoarding2';

const  Landing=()=> {

  const [progress, setProgress] = useState({
    onBoarding1: true,
    onBoarding2: false,
    onBoarding3: false,
    onBoarding4: false,
    onBoarding5: false
   })
  const [formData, setFormData]= useState({
    firstName: '',
    lastName: '',
    dob: 0,
    gender: '',
    nationality:'',
    countryOfResidence: '',
    number: '',
    email: '',
    visitedDubai: '',
    familyInDubai: '',
    durationInDubai: '',
    

})


const handleChange=(e)=>{
  console.log(e.target.value)
  if(e.target.type==='radio'){
      setFormData({...formData, gender: e.target.value})
  }else{
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
      onBoarding5: next==='onBoarding5'
    })
}
const handleBack =(back)=>{
    console.log(formData)
    setProgress({
      onBoarding1: back==='onBoarding1',
      onBoarding2: back==='onBoarding2',
      onBoarding3: back==='onBoarding3', 
      onBoarding4: back ==='onBoarding4',
      onBoarding5: back==='onBoarding5'
    })
}

  return (
    <>
    {progress.onBoarding1 &&
      <OnBoarding1 
      formData={formData}
      handleChange={handleChange}
      handleSubmit1={handleNext}/>}
      {
        progress.onBoarding2 &&
        <OnBoarding2
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handleBack={handleBack}/>
      }
      </>
  );
}

export default Landing;