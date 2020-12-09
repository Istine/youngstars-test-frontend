import React, { useEffect, useState } from "react";
import "../../sass/dashboard/_dashboard.scss";
import Care from "../../imgs/care.png";
import Goat from "../../imgs/goat.png";
import Cat from "../../imgs/cat.png";
import Dog from "../../imgs/dog.png";
import { connect, useDispatch } from "react-redux";
import { get_my_channels } from "../../redux/actions";
//<a href='https://pngtree.com/so/care'>care png from pngtree.com</a>
function MobileAddchannel({ my_channels, get_my_channels }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_my_channels());
  }, []);

  const getImage = (animal) => {
    switch (animal) {
      case "Dog":
        return Dog;
      case "Goat":
        return Goat;
      case "Cat":
        return Cat;
      default:
        return Dog;
    }
  };

  return (
      <div className="second-board-two">
        <h3>My Channels</h3>
        <ul>
          {my_channels[0] !== "Something went wrong." ? my_channels.map((channel) => (
            <li>
              <img src={getImage(channel)} alt="dog" />
              {channel}
            </li>
          )):  <label style={{
              textAlign:"center",
              color:"orangered"
          }}>
          {my_channels}
        </label> }
        </ul>
      </div>
  );
}

const mapStateToProps = (state) => ({
  my_channels: state.Reducer.my_channels,
});

export default connect(mapStateToProps, { get_my_channels })(MobileAddchannel);

