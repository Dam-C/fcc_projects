import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";

const Root = () => {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth });
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const handlePageChange = (p) => {
    dispatch({
      type: "home/chgPage",
      payload: p,
    });
  };
  return (
    <>
      <nav className="nav">
        <NavLink
          to={`/`}
          className="home-link"
          onClick={() => handlePageChange("")}
        >
          FCC PROJECTS
        </NavLink>
        <ul className="nav-projects ">
          <li className="nav-link">
            <NavLink
              to={`/project1`}
              className="link"
              onClick={() => handlePageChange("Random Quotes")}
            >
              {screenSize.width <= 750 ? "P1" : "Random Quotes"}
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to={`/project2`}
              className="link"
              onClick={() => handlePageChange("Markdown Previewer")}
            >
              {screenSize.width <= 750 ? "P2" : "Markdown Previewer"}
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to={`/project3`}
              className="link"
              onClick={() => handlePageChange("Drum Machine")}
            >
              {screenSize.width <= 750 ? "P3" : "Drum Machine"}
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to={`/project4`}
              className="link"
              onClick={() => handlePageChange("Calculator")}
            >
              {screenSize.width <= 750 ? "P4" : "Calculator"}
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to={`/project5`}
              className="link"
              onClick={() => handlePageChange("Stop Clock")}
            >
              {screenSize.width <= 750 ? "P5" : "Stop Clock"}
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
      <footer className="footer">coded by Damien Charlois</footer>
    </>
  );
};

export default Root;
