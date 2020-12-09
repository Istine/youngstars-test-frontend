import React, { useEffect, useState } from "react";
import "../../sass/dashboard/_dashboard.scss";
import LeftPanel from "./LeftPanel";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";
import { getTokenLocalstorage } from "../../redux/sagas";
import decode from "jwt-decode";
import MobileNav from "./MobileNav";

export default function Index() {
  const [username, setUsername] = useState("");
  //check if logged in
  useEffect(() => {
    let token = getTokenLocalstorage();
    if (token) {
      let data = decode(token);
      const date = new Date(0);
      date.setUTCSeconds(data.exp);
      if (!data.username && date < new Date()) {
        localStorage.clear();
        window.location.href = "/login";
      }
      setUsername(data.username);
    } else {
      localStorage.clear();
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="dashboard-container">
      <MobileNav />
      <LeftPanel username={username} />
      <MiddlePanel />
      <RightPanel />
    </div>
  );
}
