import ChoiceInput from "../ChoiceInput/ChoiceInput";

import "./QuestionRow.css";

const QuestionRow = ({
  question,
  name,
  values,
  formDataValue,
  handleChange,
  type,
}) => {
  console.log(values);
  return (
    <div className="question__row">
      <p>{question}</p>
      <div className="answer__container">
        {values.map((val, index) => {
          // console.log(val.answer)
          return (
            <ChoiceInput
              key={index}
              name={name}
              id={name + "-" + val.answer}
              value={val.answer}
              formDataValue={formDataValue}
              handleChange={handleChange}
              type={type}
              imgSrc={val.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default QuestionRow;
