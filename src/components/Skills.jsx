import React from "react";

const Skills = () => {
  const data = [
    {
      yearRange: "2016–24",
      name:'Aklikx Technology',
      category: "Visual Design",
      skills: [
        "Figma",
        "After Effects",
        "Photoshop",
        "Final Cut Pro",
        "Midjourney",
        "Canva",
        "Illustrator",
      ],
    },
    {
      yearRange: "2018–24",
      name:'Infinite Global Office',
      category: "Project Development",
      skills: [
        "Webflow",
        "HTML & CSS",
        "JavaScript",
        "Final Cut Pro",
        // "React.js",
        "Next.js",
        "Xano",
        "Node.js",
      ],
    },
    {
      yearRange: "2022–24",
      name:'Sigi Technologies',
      category: "Project Manager",
      skills: [
        "Notion",
        "Google Sheets",
        "Microsoft To Do",
        "Trello",
        "Asana",
        "ClickUp",
      ],
    },
  ];

  return (
    <div  className=" min-h-screen  mt-[120px]">
      <h1 className="text-3xl md:text-5xl tracking-tighter font-Mona text-center uppercase font-bold">
        Experience & Skills
      </h1>
      <div className="flex flex-col container px-2 md:px-0  mx-auto mt-[60px]">
        {data.map((data, index) => (
          <div key={index} className="border-b border-[#d1c6b7] py-14 flex flex-wrap gap-10  lg:flex-nowrap justify-between items-start">
            <div className="font-Mona text-2xl font-bold">
                {data.name}
            </div>
            <div className="font-Mona font-medium">
                {data.yearRange}
            </div>
            <div className="font-Mona font-medium text-xl">
                {data.category}
            </div>
            <div className="w-[300px]">
                <ul className="flex gap-1 font- text-sm font-Mona flex-wrap  gap-x-5 ">

                {
                    data.skills.map((skill,index)=>(
                        <li className="flex items-center gap-2">
                            <div className="size-1 rounded-full bg-black"></div>
                            {skill}</li>
                    ))

                }
                </ul>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
