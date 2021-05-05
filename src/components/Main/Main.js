import './Main.css';
import { Switch, Route } from "react-router-dom";

//Components
import Landing from '../../pages/Landing/Landing';

const Main = () => {
  
  return (
    <main className="main">
         <Switch>
             <Route exact path="/" component={Landing}/>
             {/* <Route exact path="/onboarding" component={OnBoarding}/> */}
        </Switch>
    </main>
  );
}

export default Main;