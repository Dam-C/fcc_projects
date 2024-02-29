//import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

const P3Settings = () => {
  const volume = useSelector((state) => state.sounds.volume);
  const mute = useSelector((state) => state.sounds.muted);

  const dispatch = useDispatch();

  const handleMute = () => {
    dispatch({
      type: "sounds/setMute",
    });
  };

  const handleVolChange = (e) => {
    dispatch({
      type: "sounds/changeVolume",
      payload: parseInt(e.target.value),
    });
  };

  return (
    <div className="drum-settings">
      <div className="on-off-btn" onClick={handleMute}>
        <div className={!mute ? "on-btn" : "on-btn turn-off"}>
          {!mute && "ON"}
        </div>
        <div className={mute ? "off-btn" : "off-btn turn-off"}>
          {mute && "OFF"}
        </div>
      </div>

      <div className="display-sound-name">
        {useSelector((state) => state.sounds.soundPlayed)}
      </div>
      <div className="volume">
        <div className="volumeDisplay">{volume}</div>
        <input
          className="customSlider"
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          onChange={handleVolChange}
        />
        <label htmlFor="volume">Volume</label>
      </div>
      {/* <div className="soundbank-select">soundbank</div> */}
    </div>
  );
};

export default P3Settings;
