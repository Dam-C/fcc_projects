const Home = () => {
  return (
    <>
      <section className="home-wrapper">
        <h2 className="home-title">Salutations</h2>
        <p className="home-text">
          Un petit site regroupant les 5 projets réalisés pour la obtenir la
          certification "Front End Libraries" de freeCodeCamp.
          <br />
          <br />
          Technos :
          <br />
          React, Sass, Redux
          <br />
          <br />
          &gt;&gt;{" "}
          <a className="home-fcclink" href="https://www.freecodecamp.org/learn">
            freeCodeCamp
          </a>
        </p>
      </section>
    </>
  );
};

export default Home;
