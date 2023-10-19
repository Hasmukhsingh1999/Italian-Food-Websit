import { menu } from "@/components/data/data";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center ">
      {menu.map((category, index) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-[2vw] md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-full`}>
            <h1 className="uppercase font-bold text-2xl">{category.title}</h1>
            <p className="text-sm mt-2 w-1/2">{category.desc}</p>
            <button
              className={`hidden md:block mt-4 ${
                index === 0 || index === menu.length - 1
                  ? "bg-white text-black" // Apply white background to the first and last buttons
                  : `bg-${category.color} text-${
                      category.color === "black" ? "white" : "red-500"
                    }`
              } py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;

