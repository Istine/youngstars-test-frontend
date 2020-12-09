import React, { useState, useEffect } from "react";
import "../../sass/dashboard/_dashboard.scss";
import decode from "jwt-decode";
import { getTokenLocalstorage } from "../../redux/sagas";
import { connect, useDispatch } from "react-redux";
import { show_all_channels, show_my_channels_mobile } from "../../redux/actions";

function MobileNav({
    show_all_channels,
    show_channels,
    show_my_channels_mobile,
    show_mobile
}) {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState((state) => !state);
  };

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

  const toggle2 = () => {
      show_my_channels_mobile();
  }

  return (
    <nav>
      <div onClick={toggle} className="mobile-menu-box">
        <div className="menu"></div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
      <div
        className="list"
        style={{
          height: state ? "100px" : "0",
          transition: "height 500ms ease",
        }}
      >
        <div onClick={allchannels} className="list-item">{show_channels ? 'Hide':"Add channel"}</div>
    <div onClick={toggle2} className="list-item">{show_mobile ? "Hide": "My channels"}</div>
        <div onClick={logout} className="list-item">
          logout
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  show_channels: state.Reducer.show_channels,
  show_mobile:state.Reducer.show_my_channels_mobile

});

export default connect(mapStateToProps, { show_all_channels, show_my_channels_mobile })(MobileNav);
