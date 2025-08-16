import React from "react";

const Service = () => {
  const data = [
    {
      name: "Brand Identity Design",
      description:
        "Create distinctive brand identities with custom logos that capture your company's essence and stand out in today's competitive market.",
    },
    {
      name: "Custom Website",
      description:
        "Build tailored web solutions that perfectly align with your business needs, from e-commerce platforms to specialized web applications.",
    },
    {
      name: "UI/UX Design",
      description:
        "Transform your online presence with stunning, user-centric designs that convert visitors while maintaining your brand's unique personality.",
    },
    {
      name: "Mobile Application ",
      description:
        "Develop native and cross-platform mobile applications with intuitive interfaces and seamless user experiences that keep your audience engaged.",
    },
  ];
  return (
    <div id="Service" className="container mx-auto   mt-[120px] space-y-16">
      <h1 className="text-3xl md:text-5xl tracking-tighter font-Mona text-center uppercase font-bold">
        I Can help you With
      </h1>
      <div className="flex md:justify-center  gap-10 md:px-0 px-4 xl:flex-nowrap flex-wrap">
        {
            data.map((data,index)=>(
                <div className={`space-y-36 md:flex-1/3  border-l-[3px] border-[#e4d9ca] px-4  `}>
                    <div className="text-5xl [transform:scale(0.9,1.1)] inline-block font-medium italic font-Mona text-[#e4d9ca]">
                        0{1+index}
                    </div>
                    <div>

                    <h2 className="text-2xl font-Mona mb-2 font-bold ">{data.name}</h2>
                    <p className="text-sm text-black/60 font-semibold leading-relaxed">{data.description}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Service;
