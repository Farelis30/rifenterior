"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { portfolio } from "@/lib/portfolioData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const Page = ({ params }) => {
  const id = parseInt(params.id);
  const result = portfolio.filter((value) => value.id === id);
  const images = result[0].images.map((value) => value.url);
  const next = portfolio.find((value) => value.id === id + 1);
  const previous = portfolio.find((value) => value.id === id - 1);

  return (
    <div>
      <div className="px-10">
        <div className="flex flex-col overflow-hidden">
          {images.map((value, index) => (
            <ContainerScroll
              titleComponent={
                index === 0 && (
                  <>
                    <h1 className="text-4xl font-semibold text-white dark:text-white">
                      {result[0].name}
                    </h1>
                    <div className="flex flex-col md:flex-row justify-start md:justify-center gap-4 mt-10 md:mt-10 w-full text-accent">
                      {previous && (
                        <Link
                          href={"/portfolio/" + previous.id}
                          className="px-4 py-2 border rounded-xl w-full md:w-fit hover:bg-accent/10 cursor-pointer flex items-center gap-4 group"
                        >
                          <FaArrowLeft className="group-hover:animate-bounce" />
                          <p>
                            Previous Project : <br />
                            <span className="uppercase tracking-widest text-base">
                              {previous.name}
                            </span>
                          </p>
                        </Link>
                      )}
                      {next && (
                        <Link
                          href={"/portfolio/" + next.id}
                          className="px-4 py-2 border rounded-xl w-full md:w-fit hover:bg-accent/10 cursor-pointer flex items-center gap-4 group"
                        >
                          <FaArrowRight className="group-hover:animate-bounce" />
                          <p>
                            Next Project : <br />
                            <span className="uppercase tracking-widest text-base">
                              {next.name}
                            </span>
                          </p>
                        </Link>
                      )}
                    </div>
                    <div className="mb-10 h-6"></div>
                  </>
                )
              }
              key={index}
            >
              <Image
                src={value}
                alt="hero"
                priority
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
