import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>Something went wrong</p>
      <Link to="/">Go To HomePage...</Link>
    </div>
  );
};

export default NotFound;
