import React from "react";

const Emails = () => {
  return (
    <>
      <div className="my-8">
        <h1 className="text-3xl font-bold my-5">Emails</h1>
        <div>
          {/* Emails List */}
          <table className="w-[750px] border border-gray-600 p-5 rounded-lg my-3 cursor-pointer">
            <thead>
              <tr className="border border-black">
                <th className="border border-black">Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-black">
                <td className="border border-black px-5">Aditya Chopde</td>
                <td className="border border-black px-5">
                  its.adityac@gmail.com
                </td>
              </tr>
              <tr className="border border-black">
                <td className="border border-black px-5">Aditya Chopde</td>
                <td className="border border-black px-5">
                  its.adityac@gmail.com
                </td>
              </tr>
              <tr className="border border-black">
                <td className="border border-black px-5">Aditya Chopde</td>
                <td className="border border-black px-5">
                  its.adityac@gmail.com
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Emails;
