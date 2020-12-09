import React, { useState } from "react";
import "../../sass/dashboard/_dashboard.scss";
import Goat from "../../imgs/goat.png";
import Cat from "../../imgs/cat.png";
import Dog from "../../imgs/dog.png";


export default function MiddlePanel() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div className="middle-panel">
      <input
        name="search"
        value={query}
        onChange={handleChange}
        placeholder="Search"
      />
      <h4>Channel Updates</h4>
      <div className="update-box">
        <div className="update">
          <h3>Goats</h3>
          <img src={Goat} alt="Goat" />
        </div>
        <div className="update-info">
          <h2>Updtate on Goats</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}
