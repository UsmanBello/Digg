import "./ScreenHeader.css";

const ScreenHeader = ({ progress, showProgress }) => {
  return (
    <header className="page__header">
      <h1 className="brand__title">digg</h1>
      <div className="progress__container">
        <span>Progress</span>
        <div className="progress__bar1">
          <div className="progress1" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </header>
  );
};

export default ScreenHeader;
