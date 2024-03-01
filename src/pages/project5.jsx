import * as comp from "../components/_compIndex";
import { useSelector, useDispatch } from "react-redux";

const Project5 = () => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.clock.sessionLength);
  const kitkat = useSelector((state) => state.clock.breakLength);

  const chgSession = (e) => {
    dispatch({
      type: "clock/chgSessionT",
      payload: parseInt(e.target.value),
    });
  };

  const chgKitkat = (e) => {
    dispatch({
      type: "clock/chgBreak",
      payload: parseInt(e.target.value),
    });
  };

  return (
    <>
      <section>
        <article id="clock-wrapper">
          <h1 id="clock-title">25 + 5 Clock</h1>
          <div id="clock-settings">
            <div id="session-settings">
              <h2 id="session-label">Session Length</h2>

              <div id="session-btns">
                {/* ================== Increment session ================== */}
                <button
                  id="session-increment"
                  className="clockBTN"
                  value="1"
                  onClick={chgSession}
                >
                  +1
                </button>
                {/* ================== Duree session ================== */}
                <div id="session-length">{session}</div>
                {/* ================== Decrement session ================== */}
                <button
                  id="session-decrement"
                  className="clockBTN"
                  value="-1"
                  onClick={chgSession}
                >
                  -1
                </button>
              </div>
            </div>
            <div id="break-settings">
              <h2 id="break-label">Break Length</h2>
              <div id="break-btns">
                {/* ================== Increment break ================== */}
                <button
                  id="break-increment"
                  className="clockBTN"
                  value="1"
                  onClick={chgKitkat}
                >
                  +1
                </button>
                {/* ================== Dureee break ================== */}
                <div id="break-length">{kitkat}</div>
                {/* ================== Decrement break ================== */}
                <button
                  id="break-decrement"
                  className="clockBTN"
                  value="-1"
                  onClick={chgKitkat}
                >
                  -1
                </button>
              </div>
            </div>
          </div>
          <comp.P5Timer />
        </article>
      </section>
    </>
  );
};

export default Project5;
