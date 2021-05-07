import ActionButtons from "../ActionButons/ActionButtons";
import QuestionRow from "../QuestionRow/QuestionRow";
import ScreenHeader from "../ScreenHeader/ScreenHeader";

const OnBoarding2 = ({ handleChange, handleNext, handleBack, formData }) => {
  return (
    <div className="onBoarding__background">
      <div className="page__container">
        <ScreenHeader progress={"12.5"} />
        <QuestionRow
          question={"Have you ever visited Dubai?"}
          name={"visitedDubai"}
          values={[
            { answer: "No", image: "../../../../assets/images/no.png" },
            { answer: "Yes", image: "../../../../assets/images/yes.png" },
          ]}
          formDataValue={formData.visitedDubai}
          handleChange={handleChange}
        />
        <QuestionRow
          question={"Do you have friends or family Dubai?"}
          name={"familyInDubai"}
          values={[
            { answer: "No", image: "../../../../assets/images/no.png" },
            { answer: "Yes", image: "../../../../assets/images/yes.png" },
          ]}
          formDataValue={formData.familyInDubai}
          handleChange={handleChange}
        />
        <QuestionRow
          question={"How long do you want to stay in Dubai?"}
          name={"durationInDubai"}
          values={[
            {
              answer: "Up to 3 months",
              image: "../../../../assets/images/calendar.png",
            },
            {
              answer: "3 - 6 months",
              image: "../../../../assets/images/calendar.png",
            },
            {
              answer: "6 - 9 months",
              image: "../../../../assets/images/calendar.png",
            },
            {
              answer: "+12 months",
              image: "../../../../assets/images/calendar.png",
            },
            {
              answer: "+3 years",
              image: "../../../../assets/images/calendar.png",
            },
          ]}
          formDataValue={formData.durationInDubai}
          handleChange={handleChange}
        />

        <div className="page__action__buttons">
          <ActionButtons
            previous={"onBoarding1"}
            next={"onBoarding3"}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding2;
