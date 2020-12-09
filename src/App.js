import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard"
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
