import React from "react";
import "../../sass/login/_login.scss";
export default function index() {
  return (
    <div className="login_container">
      <div className="top-shape"></div>
      <div className="small-circle"></div>
      <div className="login-form-container">
          <div className="login_heading">
          <h2>Login</h2>
          </div>
          <p>Welcome, back!</p>
        <form> 
          <div className="input-box">
            <input type="text" name="username" required/>
            <label className="input-label">username</label>
          </div>
          <div className="input-box">
            <input type="password" name="password" required />
            <label className="input-label">password</label>
          </div>
          <button>Login</button>
        </form>
        <p> Don't have an account ? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
}
