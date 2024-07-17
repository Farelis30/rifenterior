import { projectData } from "@/lib/projectData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div>
      <div className="w-full h-[100vh] flex justify-center text-primary-200">
        <div className="pt-[15vh]">
          <h1 className="text-xl text-center tracking-far">PROJECT</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-8">
            {projectData.map((value) => (
              <Link
                className="border border-primary-150 text-center p-5 rounded-md cursor-pointer hover:bg-primary-950/80 hover:shadow-xl hover:scale-105 transition-transform duration-150"
                key={value.id}
                href={"/project/" + value.id}
              >
                <h2 className="tracking-far">{value.category}</h2>
                <div className="font-semibold">
                  <p className="mt-3">{value.by}</p>
                  <p className="mt-3 text-xl tracking-far uppercase">
                    {value.city}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div>
            <Image
              src={"/logoHome.png"}
              width={2778 / 10}
              height={1940 / 10}
              className="w-full h-auto block md:hidden"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
