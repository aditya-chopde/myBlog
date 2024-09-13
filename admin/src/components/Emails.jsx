import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import axios from "axios";
import { svg } from "../assets/svgs";

const Emails = () => {
  const [data, setData] = useState([]);
  const { url } = useContext(BlogContext);

  useEffect(() => {
    axios.get(`${url}/email/allemails`).then((response) => {
      setData(response.data);
    });
  }, []);

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
                <th className="border border-black">Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id} className="border border-black">
                  <td className="border border-black px-5">{item.name}</td>
                  <td className="border border-black px-5">{item.email}</td>
                  <div className="items-center flex justify-center py-2">
                    <img
                      src={svg.delete_svg}
                      alt="delete_email"
                      className="w-5 transition-all hover:scale-110"
                    />
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Emails;
