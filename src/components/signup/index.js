import React, { useState } from "react";
import { login, signup } from "../../redux/actions";
import "../../sass/login/_login.scss";
import { useDispatch, connect } from "react-redux";

function Index({ errors }) {
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
    dispatch(signup(data));
    e.preventDefault();
  };

  return (
    <div className="login_container">
      <div className="top-shape"></div>
      <div className="small-circle"></div>
      <div className="login-form-container">
        <div className="login_heading">
          <h2>Signup</h2>
        </div>
        <p>Welcome, Create an account.</p>
        {errors.map(error => (
          <label className="error">
            {error}
          </label>
        ))}
        <form>
          <div className="input-box">
            <input
              type="text"
              name="username"
              value={data.username}
              required
              onChange={handleChange}
            />
            <label className="input-label">username</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              value={data.password}
              required
              onChange={handleChange}
            />
            <label className="input-label">password</label>
          </div>
          <button onClick={submit}>Signup</button>
        </form>
        <p>
          {" "}
          Already have an account ? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  errors: state.Reducer.signup,
});

export default connect(mapStateToProps, {})(Index);
