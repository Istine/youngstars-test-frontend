import React, { useEffect, useState } from "react";
import "../../sass/login/_login.scss";
import { connect, useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import decode from "jwt-decode";
import { getTokenLocalstorage } from "../../redux/sagas";

function Index({ isloggedIn, errors }) {
  //check if logged in
  useEffect(() => {
    let token = getTokenLocalstorage();
    if (token) {
      let data = decode(token);
      const date = new Date(0);
      date.setUTCSeconds(data.exp);
      if (data.username && date > new Date()) {
        window.location.href = "/dashboard";
      } else {
        localStorage.clear();
      }
    }
    
  }, []);

  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = (e) => {
    dispatch(login(data));
    e.preventDefault();
  };

  return (
    <div className="login_container">
      <div className="top-shape"></div>
      <div className="small-circle"></div>
      <div className="login-form-container">
        <div className="login_heading">
          <h2>Login</h2>
        </div>
        <p>Welcome, back!</p>
        {errors.map((err) => (
          <label className="error">{err}</label>
        ))}
        <form>
          <div className="input-box">
            <input
              type="text"
              name="username"
              required
              value={data.username}
              onChange={handleChange}
            />
            <label className="input-label">username</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              required
              value={data.password}
              onChange={handleChange}
            />
            <label className="input-label">password</label>
          </div>
          <button onClick={submit}> Login</button>
        </form>
        <p>
          {" "}
          Don't have an account ? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

const MapStateToProps = (state) => ({
  errors: state.Reducer.signin,
  isloggedIn: state.Reducer.login,
});

export default connect(MapStateToProps, {})(Index);
