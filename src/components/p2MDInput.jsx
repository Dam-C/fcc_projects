import { useDispatch, useSelector } from "react-redux";

const P2MDInput = () => {
  const dispatch = useDispatch();
  const mdInput = useSelector((state) => state.input);
  const displayInput = useSelector((state) => state.input.display);

  const handleInputChange = (event) => {
    dispatch({
      type: "input/updateInput",
      payload: event.target.value,
    });
  };

  const handleToggleInput = () => {
    dispatch({
      type: "input/toggleInput",
    });
  };

  return (
    <section className="editor-wrapper">
      <div className="editor-top">
        <h2 className="top-title">editor</h2>
        <i className="hide-cross" onClick={handleToggleInput}>
          {displayInput ? "X" : "-"}
        </i>
      </div>
      <textarea
        id="editor"
        className={displayInput ? "editor-box" : "editor-box hide"}
        onChange={handleInputChange}
        value={mdInput.markdown}
      />
    </section>
  );
};

export default P2MDInput;
