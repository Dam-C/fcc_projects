import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <section>
        <h2>ERROR</h2>
        <p>Unexpected error occured</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </section>
    </>
  );
};
export default ErrorPage;
