import { useDispatch, useSelector } from "react-redux";
import { marked } from "marked";

const P2MDWindow = () => {
  const dispatch = useDispatch();
  const displayPreview = useSelector((state) => state.window.display);

  marked.use({
    breaks: true,
  });

  const md = marked.parse(useSelector((state) => state.input.markdown));

  const handleToggleWindow = () => {
    dispatch({
      type: "window/togglePreview",
    });
  };

  const getHtmlContent = () => {
    return { __html: marked.parse(md) };
  };

  return (
    <section className="preview-wrapper">
      <div className="preview-top">
        <h2 className="top-title">preview</h2>
        <i className="hide-cross" onClick={handleToggleWindow}>
          {displayPreview ? "X" : "-"}
        </i>
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={getHtmlContent()}
        className={displayPreview ? "" : "hide"}
      />
    </section>
  );
};

export default P2MDWindow;
