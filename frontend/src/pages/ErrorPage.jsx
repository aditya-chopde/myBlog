import { useContext } from "react";
import { Link, useActionData } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

export default function ErrorPage() {
  const {current, setCurrent} = useContext(StoreContext)
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="font-bold text-2xl">404 Oops!</h1>
          <p>Sorry, Page not found....</p> <br />
          <Link
            to="/"
            className="bg-purple-600 px-5 py-2 rounded-md hover:rounded-none my-5 text-white"
            onClick={()=>{
              setCurrent("home")
            }}
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
