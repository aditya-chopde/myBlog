import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl">404 Oops!</h1>
      <p>Sorry, Page not found....</p> <br />
      <Link
        to="/"
        className="bg-purple-600 px-5 py-2 rounded-md hover:rounded-none my-5 text-white"
      >
        Go back to Home
      </Link>
    </div>
    </>
  );
}
