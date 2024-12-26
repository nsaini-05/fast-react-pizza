import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "../utilities/LinkButton.jsx";
function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go Back </LinkButton>
    </div>
  );
}

export default Error;
