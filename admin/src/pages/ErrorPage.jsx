import React from 'react'

export default function ErrorPage() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="font-bold text-2xl">404 Oops!</h1>
          <p>Sorry, Page not found....</p> <br />
            Go back to Home
        </div>
      </div>
    </>
  );
}
