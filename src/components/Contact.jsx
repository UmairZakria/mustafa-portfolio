import React from "react";
import { useState, useEffect } from "react";
import { MoveRight, Linkedin,Github,CodeXml,BriefcaseBusiness } from "lucide-react";
const Contact = () => {
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  return (
    <div id="contact" className="relative overflow-hidden min-h-screen py-[15vh] md:py-[10vh] bg-[#fcea77]">
      <div
        style={{
          background: `
      radial-gradient(circle at 50% 50%, rgba(255, 230, 179, 0.5) 40%, transparent 90%),
      radial-gradient(circle at 50% 50%, rgba(252, 234, 119, 0.8) 40%, transparent 90%),
      radial-gradient(circle at 50% 100%, rgba(255, 255, 237, 1) 30%, transparent 40%),
      radial-gradient(circle at 0% 50%, rgba(255, 255, 237, 1) 20%, transparent 30%),
      radial-gradient(circle at 100% 50%, rgba(255, 255, 237, 1) 20%, transparent 30%)

    `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0   "
      ></div>
      <div
        className="absolute  inset-0  top-[-120%] "
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(255, 255, 237, 1) 60%, transparent 85%) 
          `,
          // Ensure the background covers the entire div
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className=" px-2 md:px-0 relative bg-[#ffffff2d] font-Mona border-[1px] border-gray-200 rounded-3xl  py-[10vh]  container mx-auto space-y-10">
        <h2 className="text-center font-semibold  xl:text-4xl text-2xl md:text-4xl">
          Lets Collaborate & Start Project
        </h2>
        <form
          className="flex flex-col gap-6 w-full md:w-[50vw] mx-auto"
        >
          {error && <span className="text-lg text-red-600">{error}</span>}

          <div className="w-full flex md:flex-row flex-col gap-6">
            <input
              onChange={(e) => setFname(e.target.value)}
              className="w-full p-4 shadow-lg bg-white placeholder:text-black  rounded-md"
              type="text"
              placeholder="First Name*"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 shadow-lg bg-white placeholder:text-black  rounded-md"
              type="email"
              placeholder=" Email*"
            />
          </div>
          <div className="w-full flex md:flex-row flex-col gap-6">
            <input
              required
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 shadow-lg bg-white placeholder:text-black  rounded-md"
              type="tel"
              placeholder="Phone"
            />
            <input
              required
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-4 shadow-lg bg-white placeholder:text-black  rounded-md"
              type="text"
              placeholder=" Subject"
            />
          </div>
          {/* <textarea className="w-full p-4 shadow-md rounded-lg h-[120px]" name="" placeholder="Message" id=""></textarea> */}
          <textarea
            required
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 shadow-lg bg-white placeholder:text-black  rounded-md h-[150px]"
            name=""
            placeholder="Message"
            id=""
          ></textarea>

          <button
            type="submit"
            className="mt-6 px-6 py-3 group hover:animate-pulse hover:scale-105 shadow-xl  transition-all ease-in-out duration-300  flex gap-2 place-self-end rounded-full bg-white  text-black cursor-pointer"
          >
            Send Message <MoveRight className="" size={24} />
          </button>
        </form>
      </div>
      <div className="  w-full  py-3 absolute bottom-0 left-0">
        <div className="container md:px-0 px-2 gap-2 flex flex-wrap items-center justify-center md:justify-between mx-auto font-Poppins">
          <div>
            Designed & Created by{" "}
            <a href="www.linkedin.com/in/umair-zakria-67477b33a" className="font-Mona pb- font-semibold uppercase border-b">
              Umair Zakria
            </a>{" "}
            — Free and Open for All.
          </div>
          <div className="flex gap-8 flex-wrap text-black/60">
          <a className="border-b-[1px] group p-[2px]  border-black/40" href="www.linkedin.com/in/umair-zakria-67477b33a">
          
            <Linkedin className="group-hover:animate-bounce" />
          </a>
          <a className="border-b-[1px] group p-[2px]  border-black/40" href="https://umairzakria.vercel.app/">
            <BriefcaseBusiness className="group-hover:animate-bounce" />
          </a>
          <a className="border-b-[1px] group p-[2px]  border-black/40" href="https://github.com/UmairZakria/mustafa-portfolio">
            <CodeXml className="group-hover:animate-bounce"/>
          </a>
          <a className="border-b-[1px] group p-[2px]  border-black/40" href="https://github.com/UmairZakria" >

            <Github className="group-hover:animate-bounce"/>
          </a>
          </div>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minima? Culpa suscipit assumenda exercitationem! Odio debitis commodi iure officiis quaerat cumque sequi, qui quam dignissimos incidunt deserunt aspernatur? Porro, doloremque. */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
