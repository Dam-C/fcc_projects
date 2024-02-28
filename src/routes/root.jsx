import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <nav className="nav">
        <Link to={`/`} className="link">
          FCC PROJECTS
        </Link>
        <ul className="nav-projects ">
          <li className="nav-link">
            <Link to={`/project1`} className="link">
              Random Quotes
            </Link>
          </li>
          <li>
            <Link to={`/project2`} className="link">
              Markdown Previewer
            </Link>
          </li>
          <li>
            <Link to={`/project3`} className="link">
              Drum Machine
            </Link>
          </li>
          <li>
            <Link to={`/project4`} className="link">
              Calculator
            </Link>
          </li>
          <li>
            <Link to={`/project5`} className="link">
              Stop Clock
            </Link>
          </li>
        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
