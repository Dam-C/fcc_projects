import { useDispatch } from "react-redux";

const P4KalkBTN = ({ id, disp, forKalk }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "kalkul/getInput",
      payload: forKalk,
    });
  };

  return (
    <div id={id} className="pad-btn" onClick={handleClick}>
      {disp}
    </div>
  );
};

export default P4KalkBTN;
