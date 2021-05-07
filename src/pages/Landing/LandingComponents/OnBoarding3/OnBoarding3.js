import { reasonsOptions } from "../../../../utils/Helper";
import ActionButtons from "../ActionButons/ActionButtons";
import QuestionRow from "../QuestionRow/QuestionRow";
import ScreenHeader from "../ScreenHeader/ScreenHeader";

const OnBoarding3 = ({ handleChange, handleNext, handleBack, formData }) => {
  return (
    <div className="onBoarding__background">
      <div className="page__container">
        <ScreenHeader progress={"25"} />
        <QuestionRow
          question={"Why do you want to come to Dubai?"}
          name={"reasonForVisit"}
          values={reasonsOptions}
          formDataValue={formData.reasonForVisit}
          handleChange={handleChange}
        />
        <div className="page__action__buttons">
          <ActionButtons
            previous={"onBoarding2"}
            next={"onBoarding4"}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding3;
