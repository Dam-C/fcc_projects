import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const P3SoundBTN = ({ name, keypad, link }) => {
  const dispatch = useDispatch();
  const audioRef = React.createRef();
  const vol = useSelector((state) => state.sounds.volume) / 100;
  const muted = useSelector((state) => state.sounds.muted) / 100;

  const playSound = () => {
    audioRef.current.volume = muted ? 0 : vol;
    audioRef.current.play();
    dispatch({
      type: "sounds/displaySound",
      payload: name,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === keypad || event.key === keypad.toLowerCase()) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      id={name === "undefined" ? "temp" : name}
      className="drum-pad"
      onClick={() => playSound()}
    >
      {keypad}
      <audio
        className="clip"
        ref={audioRef}
        id={keypad}
        src={link}
        type="audio/mp3"
      ></audio>
    </div>
  );
};

P3SoundBTN.propTypes = {
  name: PropTypes.string.isRequired,
  keypad: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default P3SoundBTN;
