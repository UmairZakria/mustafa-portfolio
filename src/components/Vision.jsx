import React from "react";

const Vision = () => {
  return (
    <div id="About" className=" mt-[120px] ">
      <h1 className="text-3xl md:text-5xl tracking-tighter font-Mona text-center uppercase font-bold">
        Turning My Vision
      </h1>
      <div className=" bg-[#f8e567] relative overflow-hidden">
        <div
          className="absolute  inset-0 top-[-400%]   z-"
          style={{
            background: `
            radial-gradient(circle  at 50% 0%, rgba(255, 255, 237, 1) 80%, transparent 90%) 

          `,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="absolute  inset-0 bottom-[-130%]   z-"
          style={{
            background: `
            radial-gradient(circle   at 50% 100%, rgba(255, 255, 237, 1) 50%, transparent 100%), 
            radial-gradient(circle   at 0% 100%, rgba(255, 255, 237, 1) 40%, transparent 50%),
            radial-gradient(circle   at 100% 100%, rgba(255, 255, 237, 1) 40%, transparent 50%) 


          `,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="absolute  top-1/2 -translate-y-1/2 left-0 w-full  min-h-[300px] ">
          <div className="container  mx-auto  flex md:flex-nowrap flex-wrap-reverse md:px-0 px-2 items-center justify-between">
            <div className="w-[400px] space-y-10">
              <h3 className=" font-Mona font-medium md:font-semibold   text-2xl">
                Crafting digital solutions that inspire, engage, and deliver
                measurable impact.
              </h3>
              <div className="flex flex-wrap gap-5 justify-between items-center md:gap-y-14">
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl  font-semibold  font-Mona">5+</div>
                  <p>Years of Experience</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl  font-semibold  font-Mona">89+</div>
                  <p>Completed projects</p>
                </div>
                <div className="space-y-2 ">
                  <div className="text-4xl md:text-5xl   font-semibold  font-Mona">50+</div>
                  <p>Satisfied Client</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl  font-semibold  font-Mona">18+</div>
                  <p>Different countries</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/vision.jpg" className="hidden  lg:block md:w-[40vw] xl:w-[600px] shadow-2xl shadow-[#f8e567]/30 md:rounded-xl lg:rounded-3xl" alt="" />
            </div>
          </div>
        </div>

        <div className=" min-h-[80vh]"></div>
      </div>
    </div>
  );
};

export default Vision;
