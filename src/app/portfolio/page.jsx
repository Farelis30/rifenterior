import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { portfolio } from "@/lib/portfolioData";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div>
      <div className="w-full h-[100vh] grid place-items-center text-accent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 pb-20 px-10">
          {portfolio.map((value) => (
            <>
              <p className="text-xl font-bold block md:hidden">{value.name}</p>
              <Link href={"/portfolio/" + value.id}>
                <DirectionAwareHover
                  imageUrl={value.imageUrl}
                  className="cursor-pointer w-full h-72"
                  children={
                    <>
                      <p>{value.name}</p>
                    </>
                  }
                />
              </Link>
              <div className="flex items-center gap-4 md:hidden">
                <FaArrowRight className="group-hover:animate-bounce" />
                <Link
                  href={"/portfolio/" + value.id}
                  className="text-center active:underline"
                >
                  See More
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
