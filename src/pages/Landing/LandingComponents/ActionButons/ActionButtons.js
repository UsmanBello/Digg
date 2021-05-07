import "./ActionButtons.css";

const ActionButtons = ({ previous, next, handleBack, handleNext }) => {
  return (
    <>
      <button
        onClick={() => {
          handleBack(previous);
        }}
        className="back__button"
      >
        Back
      </button>
      <button
        onClick={() => {
          handleNext(next);
        }}
        className="next__button"
      >
        Next
      </button>
    </>
  );
};

export default ActionButtons;
