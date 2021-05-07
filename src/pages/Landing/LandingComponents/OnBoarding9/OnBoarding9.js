import ActionButtons from "../ActionButons/ActionButtons";
import ScreenHeader from "../ScreenHeader/ScreenHeader";
import "./OnBoarding9.css";

//ICONS
import editIcon from "../../../../assets/images/edit.png";
import QuestionnaireRow from "../QuestionnaireRow/QuestionnaireRow";
const OnBoarding9 = ({ handleNext, handleBack, formData }) => {
  return (
    <div className="onBoarding__background">
      <div className="page__container">
        <ScreenHeader progress={"100"} />
        <div className="page__message">
          <p>Complete - Review your application</p>
        </div>
        <div className="basic__information__review__container">
          <header className="basic__information__review__header">
            <p>Basic Information</p>
            <img
              src={editIcon}
              className="edit__icon"
              alt="edit basic information"
            />
          </header>
          <div className="information__container">
            <span className="information">
              <span className="information__title">
                <strong>Name:</strong>
              </span>
              {` ${formData.firstName} ${formData.lastName}`}
            </span>
            <span className="information">
              <span className="information__title">Date of birth:</span>
              {` ${formData.dob}`}
            </span>
            <span className="information">
              <span className="information__title">Gender:</span>
              {` ${formData.gender}`}
            </span>
            <span className="information">
              <span className="information__title">Nationality:</span>
              {` ${formData.nationality}`}
            </span>
            <span className="information">
              <span className="information__title">Country of residence:</span>
              {` ${formData.countryOfResidence}`}
            </span>
            <span className="information">
              <span className="information__title">Contact Number:</span>
              {` ${formData.number}`}
            </span>
            <span className="information">
              <span className="information__title">Email:</span>
              {` ${formData.email}`}
            </span>
          </div>
        </div>
        <div className="questionnaire__review__container">
          <header className="questionnaire__review__header">
            <p>Basic Information</p>
          </header>
          <div className="questionnaire__container">
            <QuestionnaireRow
              question={"Have you ever visited Dubai?"}
              answer={formData.visitedDubai}
            />
            <QuestionnaireRow
              question={"Do you have any friends and family in Dubai?"}
              answer={formData.familyInDubai}
            />
            <QuestionnaireRow
              question={"How long do you want to stay in Dubai?"}
              answer={formData.durationInDubai}
            />
            <QuestionnaireRow
              question={"Why do you want to come to  Dubai?"}
              answer={formData.reasonForVisit}
            />
            <QuestionnaireRow
              question={"What industries would you prefer to work in?"}
              answer={formData.specialty}
            />
            <QuestionnaireRow
              question={"What are your interests?"}
              answer={formData.interests}
            />
            <QuestionnaireRow
              question={"Do you have any financial savings"}
              answer={formData.savings}
            />
            <QuestionnaireRow
              question={"What is your level of education?"}
              answer={formData.education}
            />
            <QuestionnaireRow
              question={"How soon do you want to visit Dubai"}
              answer={formData.timeToArrival}
            />
          </div>
        </div>
        <div className="page__action__buttons" id="last__action__bottons">
          <ActionButtons
            previous={"onBoarding8"}
            next={"onBoarding9"}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding9;
