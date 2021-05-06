import ChoiceInput from '../ChoiceInput/ChoiceInput'

import './QuestionRow.css'

const QuestionRow=({question, name,values, formDataValue, handleChange, type})=>{
    
    return (
        <div className='question__row'>
        <p>{question}</p>
        <div className='answer__container'>
                {
                    values.map((value,index)=>{
                      return   <ChoiceInput
                                    key={index}
                                    name={name}
                                    id={name+'-'+value}
                                    value={value}
                                    formDataValue={formDataValue}
                                    handleChange={handleChange}
                                    type={type}
                                    />
                    })
                }
        </div>
      </div>
    )
}
export default QuestionRow