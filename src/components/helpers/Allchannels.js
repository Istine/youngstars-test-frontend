import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { add_channel, get_all_channels } from "../../redux/actions";
import "../../sass/_globals.scss";

function Allchannels({ channels, get_all_channels, add_channel, message }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_all_channels());
  }, [dispatch]);

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, checked, value } = e.target;
    let val = data.find((val) => val === value);
    if (!val) {
      setData((state) => [...state, value]);
    } else {
      const new_data = data.filter((val) => val !== value);
      setData(new_data);
    }
  };

  const onSubmit = (e) => {
    add_channel(data);
    e.preventDefault();
  };

  return (
    <div className="all-channels">
      <h2>All channels</h2>
      <span style={{
        color:message === "successfully added"?"limegreen":"orangered"
      }}>{message}</span>
      <ul>
        {channels.map((channel, index) => (
          <li key={index}>
            {channel.name}
            <input
              type="checkbox"
              value={channel.name}
              checked={data[channel.name]}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  channels: state.Reducer.channels,
  message: state.Reducer.is_add_success,
});

export default connect(mapStateToProps, { get_all_channels, add_channel })(
  Allchannels
);
