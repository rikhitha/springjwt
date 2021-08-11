import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Error from "./components/Error";
import SendReport from "./components/SendReport";

function App() {
  const mystyle = {
    color: "white",
    
    padding: "60px",
    fontFamily: "Arial",
    height: "5px",
    backgroundImage:' url("https://www.loginradius.com/blog/start-with-identity/static/3b4c33cef1861297f7da778dff9074a7/a3513/login-security.png")',
    width: "100%"
  };
  return (
    <Router>
      <div style={mystyle}>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/dashboard">Cibil Report</Link>
      </li>
      <li>
        <Link to="/SendReport">Send Report</Link>
      </li>
      
      </div>
      <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/dashboard" exact component={Dashboard}></Route>
          <Route path="/SendReport" exact component={SendReport}></Route>
          <Route path="/error/:type" exact component={Error}></Route>
        </Switch>
    </Router>
  );
}

export default App;
