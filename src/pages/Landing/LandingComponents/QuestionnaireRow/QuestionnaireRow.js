
//ICONS
import editIcon from '../../../../assets/images/edit.png'


import './QuestionnaireRow.css'

const QuestionnaireRow=({question, answer})=>{
    return (
        <div className='questionnaire__row'>
                      <div className='question__container'>
                      <p className='question'>{question}</p>
                      <img src={editIcon} alt='edit basic information' className='edit__icon'/>
                      </div>
                      <div className='answers__container'>
                        <span className='answer'>
                            {answer}
                        </span>
                      </div>
                </div>
    )
}
export default QuestionnaireRow