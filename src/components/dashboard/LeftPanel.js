import React, { useEffect } from "react";
import "../../sass/dashboard/_dashboard.scss";
import Avatar from "../../imgs/pet.jpeg";
import decode from "jwt-decode";
import { getTokenLocalstorage } from "../../redux/sagas";
import { connect, useDispatch } from "react-redux";
import { show_all_channels } from "../../redux/actions";


function LeftPanel({ username,show_channels, show_all_channels }) {

  const dispatch = useDispatch()

  //check if logged in
  useEffect(() => {
    let token = getTokenLocalstorage();
    let data = decode(token);
    const date = new Date(0);
    date.setUTCSeconds(data.exp);
    if (!data.username && date < new Date()) {
      localStorage.clear();
      window.location.href = "/login";
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const allchannels = () => {
    show_all_channels();
  };

  return (
    <div className="left-panel">
      <img src={Avatar} alt="Avatar" />
      <h3>{username}</h3>
      <ul>
        <li onClick={allchannels}>{show_channels ? 'Hide':"add channel"}</li>
      </ul>
      <div onClick={logout} className="logout">
        Logout
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  show_channels: state.Reducer.show_channels,
});

export default connect(mapStateToProps, { show_all_channels })(LeftPanel);
