import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard"
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
    <div style ={{
      maxWidth:"1300px",
      width:"100%",
      height:"100vh",
      margin:"auto",
      position:"relative"
    }}>
    <Router>
    <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
    </div>
    </Provider>
  );
}

export default App;
