import React, { useState } from "react";
import { images } from "../assets/svgs";

const Contact = () => {
  const [result, setResult] = useState("Send");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "83482aed-0f8e-4850-8329-d5bd8c62691f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Send Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div>
        <h1 className="font-bold font-poppins text-4xl text-center">
          Contact Us
        </h1>
        <div className="flex flex-row justify-center my-10 gap-20">
          <form onSubmit={onSubmit} className="border-[1px] border-black px-5 py-5 w-[375px] rounded-md">
            <h3 className="font-bold text-lg">Enter Name:</h3>
            <input className="my-3 px-2 py-1 border-[1px] border-black w-full" name="name" required type="text" />
            <h3 className="font-bold text-lg">Enter Email:</h3>
            <input className="my-3 px-2 py-1 border-[1px] border-black w-full" name="email" required type="text" />
            <h3 className="font-bold text-lg">Enter Message:</h3>
            <textarea className="my-3 px-2 py-1 border-[1px] border-black w-full" name="message" required type="text" />
            <input type="submit"  className="bg-purple-600 px-10 py-2 rounded-lg hover:rounded-sm text-white w-full mt-3" value={result}/>
          </form>

          <div>
            <img src={images.contact} alt="contact_us" className="w-[375px]"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
