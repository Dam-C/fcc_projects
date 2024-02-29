import * as comp from "../components/_compIndex";
import { useSelector } from "react-redux";

const Project3 = () => {
  const pads = useSelector((state) => state.sounds.soundBank.soundsList);

  return (
    <>
      <section id="drum-machine">
        {/* <h2>Projet 3</h2>
        <p>Random quote</p> */}

        <div id="drum-display">
          <div className="drum-board">
            {pads.map((pad, index) => (
              <comp.P3SoundBTN
                key={index}
                name={pad.name}
                keypad={pad.keypad}
                link={pad.link}
              />
            ))}
          </div>
          <comp.P3Settings />
        </div>
      </section>
    </>
  );
};

export default Project3;
