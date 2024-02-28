import { useSelector, useDispatch } from "react-redux";

const Project1 = () => {
  const dispatch = useDispatch();
  const newQuote = useSelector((state) => state.quote);
  return (
    <>
      <section>
        <h2>Projet 1</h2>
        <p>Random quote</p>
        <section id="quote-box">
          <article id="quote">
            <h1 id="text">
              <span>&quot;</span>
              <br />
              {newQuote.quote}
              <br />
              <span className="bottom-quote">&quot;</span>
            </h1>
            <div>
              <p id="author">
                from <em>{newQuote.by}</em>
              </p>
              <p id="movie">
                in {newQuote.from} {newQuote.year}
              </p>
            </div>
          </article>
          <aside id="btns">
            <div id="socials">
              <a id="tweet-quote" href="twitter.com/intent/tweet">
                twitter
              </a>
              <a id="tumblr-quote" href="">
                tumblr
              </a>
            </div>
            <button
              id="new-quote"
              onClick={() =>
                dispatch({
                  type: "quote/changeQuote",
                })
              }
            >
              New quote
            </button>
          </aside>
        </section>
      </section>
    </>
  );
};

export default Project1;
