import { useDispatch, useSelector } from "react-redux";
import * as act from "../redux/store";
// import { togglePreview } from "../redux/windowsSlice";
// import { updateInput } from "../redux/inputSlice";

const P2MDInput = () => {
  const dispatch = useDispatch();
  const global = useSelector((state) => state.window);
  const mdInput = useSelector((state) => state.input);
  const handleInputChange = (event) => {
    dispatch({
      type: "input/updateInput",
      payload: event.target.value,
    });
  };

  return (
    <section
      className={
        global.input === true ? "editor-wrapper" : "editor-wrapper hide"
      }
    >
      <div className="editor-top">
        <h2 className="top-title">editor</h2>
        <i
          className="hide-cross"
          onClick={() =>
            dispatch({
              type: "window/togglePreview",
            })
          }
        >
          X
        </i>
      </div>
      <textarea
        id="editor"
        className="editor-box"
        onChange={handleInputChange}
        value={mdInput.markdown}
      />
    </section>
  );
};

export default P2MDInput;
