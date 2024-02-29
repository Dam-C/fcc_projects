import { useDispatch, useSelector } from "react-redux";
import * as act from "../redux/store";
// import { toggleInput } from "../redux/windowSlice";
import { marked } from "marked";

const P2MDWindow = () => {
  const dispatch = useDispatch();
  const global = useSelector((state) => state.window);

  marked.use({
    breaks: true,
  });

  const md = marked.parse(useSelector((state) => state.input.markdown));

  const getHtmlContent = () => {
    return { __html: marked.parse(md) };
  };

  return (
    <section
      className={
        global.preview === true ? "preview-wrapper" : "preview-wrapper hide"
      }
    >
      <div className="preview-top">
        <h2 className="top-title">preview</h2>
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
      <div id="preview" dangerouslySetInnerHTML={getHtmlContent()} />
    </section>
  );
};

export default P2MDWindow;
