import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

//Component
import Main from "./Main/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;
