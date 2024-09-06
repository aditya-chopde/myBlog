import React, { useState } from "react";
import { images } from "../assets/svgs";
import axios from "axios";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/email/add";
    axios.post(url, {
      name, 
      email,
    }).then((response)=>{
      alert(response.data.message)
    })

    document.getElementById("input_name").value = " ";
    document.getElementById("input_email").value = " ";
  };

  return (
    <>
      <div className="flex flex-row gap-10 justify-center items-center my-16">
        <div>
          <h1 className="font-bold font-poppins text-4xl text-center">
            Subscribe to our blog !
          </h1>
          <div className="flex flex-row justify-center my-10 gap-20">
            <form onSubmit={onSubmit} className="border-[1px] border-black px-5 py-5 w-[375px] rounded-md">
              <h3 className="font-bold text-lg">Enter Name:</h3>
              <input
                className="my-3 px-2 py-1 border-[1px] border-black w-full"
                name="name"
                required
                type="text"
                id="input_name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <h3 className="font-bold text-lg">Enter Email:</h3>
              <input
                className="my-3 px-2 py-1 border-[1px] border-black w-full"
                name="email"
                required
                type="text"
                id="input_email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="submit"
                className="bg-purple-600 px-10 py-2 rounded-lg hover:rounded-sm text-white w-full mt-3"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
        <div>
          <img src={images.sub} alt="subscribe_image" className="w-96" />
        </div>
      </div>
    </>
  );
};

export default Subscribe;
