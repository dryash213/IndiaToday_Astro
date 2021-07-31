import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { Switch, Route } from 'react-router';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Splitter from './Components/BillSplitter/BillSplit';

function App() {
  return (
    <div className="text-style">
      <Switch>
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/billSplitter" component={Splitter}/>
      </Switch>
    </div>
  );
}

export default App;
