import React from "react";

const Projects = () => {
  const data = [
    {
      name: "E-Commerce Platform - ShopSmart",
      discription:
        "A modern, responsive e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The platform handles 10,000+ daily users and processes over $500K in monthly transactions.",
      sourcelink: "https://github.com/bitsmart/shopsmart-platform",
      imgs: [
        "https://cdn.dribbble.com/userupload/14264905/file/original-4efc83a8e7fee334fcc8730d9594f994.png?resize=752x501&vertical=center",
        "https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      category: ["web_design", "ecommerce"],
    },
    {
      name: "Mobile Banking App - SecurePay",
      discription:
        "A comprehensive mobile banking application for iOS and Android. Includes features like account management, fund transfers, bill payments, investment tracking, and biometric authentication. The app serves 50,000+ users with 99.9% uptime.",
      sourcelink: "https://github.com/bitsmart/securepay-mobile",
      imgs: [
        "https://cdn.dribbble.com/userupload/24586329/file/original-3bd1cefd1d1faecc2046e01452a55318.jpg?resize=752x564&vertical=center",
        "https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      category: ["mobile_app"],
    },
    {
      name: "Restaurant Management System - FoodFlow",
      discription:
        "A complete restaurant management solution including order management, inventory tracking, staff scheduling, and customer analytics. The system integrates with POS devices and delivery platforms, helping restaurants increase efficiency by 40%.",
      sourcelink: "https://github.com/bitsmart/foodflow-system",
      imgs: [
        "https://cdn.dribbble.com/userupload/42794607/file/original-d2978f03230a69f19982f5d51440a716.png?resize=752x&vertical=center",
        "https://images.pexels.com/photos/3183151/pexels-photo-3183151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      category: ["web_design"],
    },
    {
      name: "Fitness Tracking App - FitLife",
      discription:
        "A comprehensive fitness tracking application with workout planning, nutrition tracking, progress monitoring, and social features. The app syncs with wearable devices and provides personalized recommendations based on user goals and performance.",
      sourcelink: "https://github.com/bitsmart/fitlife-app",
      imgs: [
        "https://cdn.dribbble.com/userupload/42960255/file/original-6d237569d9d4ccb57b2a22e1de6cdd26.png?resize=752x564&vertical=center",
        "https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      category: ["mobile_app", "health_fitness"],
    },
    {
      name: "Real Estate Platform - PropertyHub",
      discription:
        "A modern real estate platform connecting buyers, sellers, and agents. Features include property listings, virtual tours, mortgage calculator, and advanced search filters. The platform has helped facilitate over 1,000 property transactions.",
      sourcelink: "https://github.com/bitsmart/propertyhub-platform",
      imgs: [
        "https://cdn.dribbble.com/userupload/24852330/file/original-afc30b70782ed1b8f3c322841b4b6ad1.png?resize=752x564&vertical=center",
        "https://images.pexels.com/photos/323706/pexels-photo-323706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      category: ["web_design"],
    },
    {
      name: "Learning Management System - EduTech",
      discription:
        "An advanced learning management system for educational institutions. Includes course creation, student management, assessment tools, and analytics dashboard. The platform supports 100,000+ students across 50+ educational institutions.",
      sourcelink: "https://github.com/bitsmart/edutech-lms",
      imgs: [
        "https://cdn.dribbble.com/userupload/43064923/file/original-671cd888bf8b5b256cd01c0caed0b976.jpg?resize=752x457&vertical=center",
        "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      category: ["web_design", "education"],
    }
    // {
    //   name: "Fashion E-Commerce - StyleStore",
    //   discription:
    //     "A premium fashion e-commerce platform specializing in designer clothing and accessories. Features include virtual try-on, size recommendations, personalized styling, and AR-powered shopping experience. The platform serves 25,000+ fashion-conscious users with 200+ designer brands.",
    //   sourcelink: "https://github.com/bitsmart/stylestore-fashion",
    //   imgs: [
    //     "https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   ],
    //   category: ["web_design", "ecommerce"],
    // },
    // {
    //   name: "Investment Portfolio App - WealthTrack",
    //   discription:
    //     "A sophisticated investment tracking and portfolio management application. Features include real-time market data, portfolio analytics, risk assessment, and automated rebalancing. The app manages over $50M in assets for 15,000+ active investors with advanced security protocols.",
    //   sourcelink: "https://github.com/bitsmart/wealthtrack-investment",
    //   imgs: [
    //     "https://images.pexels.com/photos/7567559/pexels-photo-7567559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   ],
    //   category: ["mobile_app"],
    // },
    // {
    //   name: "Hotel Management System - StayHub",
    //   discription:
    //     "A comprehensive hotel management solution for boutique hotels and resorts. Features include booking management, guest services, housekeeping coordination, and revenue analytics. The system has helped hotels increase occupancy rates by 35% and improve guest satisfaction scores.",
    //   sourcelink: "https://github.com/bitsmart/stayhub-hotel",
    //   imgs: [
    //     "https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   ],
    //   category: ["web_design"],
    // },
  ];
  return (
    <div className="container mx-auto min-h-screen  mt-[120px]">
      <h1 className="text-3xl md:text-5xl tracking-tighter font-Mona text-center uppercase font-bold">
        Recent Projects
      </h1>
      <div className=" md:px-0 px-4 flex items-center justify-center gap-8 gap-y-10  mt-[40px] flex-wrap ">
        {
            data.map((data,index)=>(
                <div key={index} className="  w-full md:w-[550px] md:h-[550px] overflow-hidden     ">
                    <img src={data.imgs[0]} alt="" className="w-full h-[320px] md:h-[380px] rounded-2xl object-cover " />
                    <div className=" py-3  ">
                        <h1 className="text-xl font-Mona font-bold mb-[5px] tracking-tight">{data.name}</h1>
                        <p className="text-xs md:text-sm font-Mano font-medium text-black/70">{data.discription}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Projects;
