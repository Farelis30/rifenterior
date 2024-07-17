"use client";
import { ImagesSlider } from "@/components/ui/image-slider";
import { projectData } from "@/lib/projectData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Page = ({ params }) => {
  const id = parseInt(params.id);
  const result = projectData.filter((value) => value.id === id);
  const next = projectData.find((value) => value.id === id + 1);
  const previous = projectData.find((value) => value.id === id - 1);
  const images = result[0].image.map((value) => value.url);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="px-0 md:px-20 mt-28 md:mt-[10vh] mb-10 md:mb-[10vh] flex flex-col md:flex-row items-center">
        <div
          className={`w-full md:w-[700px] h-96 bg-fill flex rounded-md relative ${
            loading ? "animate-pulse bg-primary-800" : ""
          }`}
        >
          <Image
            src={result[0].image[0].url}
            alt={result[0].city}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded"
            style={{ objectPosition: `center ${-scrollY * 0.15}px` }}
            onLoad={() => setLoading(false)}
          />
        </div>
        <div className="w-full px-10 mb-10 md:w-1/2 text-white">
          <p className="mt-[8vh] text-3xl tracking-widest">
            {result[0].category}
          </p>
          <p className="mt-3">{result[0].by}</p>
          <p className="mt-3 uppercase tracking-widest text-2xl font-semibold">
            {result[0].city}
          </p>
          {result[0].content && <p className="mt-6">{result[0].content}</p>}
          <div className="flex flex-col md:flex-row gap-4 mt-10 w-full">
            {previous && (
              <Link
                href={"/project/" + previous.id}
                className="px-4 py-2 border rounded-xl w-full md:w-fit hover:bg-accent/10 cursor-pointer flex items-center gap-4 group"
              >
                <FaArrowLeft className="group-hover:animate-bounce" />
                <p>
                  Previous Project : <br />
                  <span className="uppercase tracking-widest text-base">
                    {previous.city}
                  </span>
                </p>
              </Link>
            )}
            {next && (
              <Link
                href={"/project/" + next.id}
                className="px-4 py-2 border rounded-xl w-full md:w-fit hover:bg-accent/10 cursor-pointer flex items-center gap-4 group"
              >
                <FaArrowRight className="group-hover:animate-bounce" />
                <p>
                  Next Project : <br />
                  <span className="uppercase tracking-widest text-base">
                    {next.city}
                  </span>
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-screen grid place-items-center relative">
        <ImagesSlider images={images} overlay={false} className="h-full" />
      </div>
    </div>
  );
};

export default Page;
