import React from "react";

const Service = () => {
  const data = [
    {
      name: "Logo Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad nulla vitae laudantium labore, veritatis voluptas, omnis nihil tenetur,",
    },
    {
      name: "Custom Web",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad nulla vitae laudantium labore, veritatis voluptas, omnis nihil tenetur,",
    },
    {
      name: "Website Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad nulla vitae laudantium labore, veritatis voluptas, omnis nihil tenetur,",
    },
    {
      name: "Mobile App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad nulla vitae laudantium labore, veritatis voluptas, omnis nihil tenetur,!",
    },
  ];
  return (
    <div className="container mx-auto   mt-[120px] space-y-16">
      <h1 className="text-3xl md:text-5xl tracking-tighter font-Mona text-center uppercase font-bold">
        I Can help you With
      </h1>
      <div className="flex gap-5 ">
        {
            data.map((data,index)=>(
                <div className={`space-y-36 border-l-[3px] border-[#e4d9ca] px-4  `}>
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
