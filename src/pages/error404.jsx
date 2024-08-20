import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

function PageNotFoundError() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-1/4 text-center">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Error"
        />
      </div>
      <div className="w-1/4 text-center">
        <h1 className="font-bold text-2xl mt-6">ERROR 404</h1>
        <h2>There was an error processing your request.</h2>
        <Link to="/">
          <Button className="mt-6">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFoundError;