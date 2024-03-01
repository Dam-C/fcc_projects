import { useSelector } from "react-redux";
import { kalkulPads } from "../assets/kalkulPads";
import * as comp from "../components/_compIndex";

const Project4 = () => {
  const kalkulus = useSelector((state) => state.kalkul.kalkulus);
  const curr = useSelector((state) => state.kalkul.currentInput);

  return (
    <>
      <section>
        <article id="calculator">
          <div id="full-display">{kalkulus}</div>
          <div id="display">{curr}</div>
          {kalkulPads.map((pad, i) => (
            <comp.P4KalkBTN
              key={i}
              id={pad.htmlID}
              disp={pad.kalkulDisplay}
              forKalk={pad.specs}
              inputType={pad.kalkType}
            />
          ))}
        </article>
      </section>
    </>
  );
};

export default Project4;
