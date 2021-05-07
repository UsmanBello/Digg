import { savingsOptions } from "../../../../utils/Helper";

import ActionButtons from "../ActionButons/ActionButtons";
import QuestionRow from "../QuestionRow/QuestionRow";
import ScreenHeader from "../ScreenHeader/ScreenHeader";
// import './OnBoarding6.css';

const OnBoarding6 = ({ handleChange, handleNext, handleBack, formData }) => {
  return (
    <div className="onBoarding__background">
      <div className="page__container">
        <ScreenHeader progress={"62.5"} />
        <QuestionRow
          question={"Do you have any financial savings?"}
          name={"savings"}
          values={savingsOptions}
          formDataValue={formData.savings}
          handleChange={handleChange}
        />
        <div className="page__action__buttons">
          <ActionButtons
            previous={"onBoarding5"}
            next={"onBoarding7"}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding6;
