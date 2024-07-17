"use client";
import { navLink } from "@/lib/router";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const path = usePathname();
  const [sidebar, setsidebar] = useState(false);

  const toogleSidebar = () => {
    setsidebar((currentState) => !currentState);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full hidden md:block shadow-md">
        <div className="flex justify-between items-center gap-4 md:px-4 xl:px-10 bg-primary-900/60 text-accent">
          <h1 className="tracking-far">RIFENTERIOR</h1>

          <div className="flex justify-end ">
            <ul className="grid grid-cols-5 place-items-center p-2 font-medium ">
              {navLink.map((value) => (
                <Link
                  href={value.router}
                  key={value.name}
                  className={`cursor-pointer tracking-widest uppercase ${
                    path === value.router
                      ? "bg-yellow-700 rounded-full xl:px-4 xl:py-2 md:px-1 md:py-[2px]"
                      : "px-4 py-2"
                  }`}
                >
                  {value.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Navbar android */}
      <nav className="fixed top-0 z-50 bg-transparent p-10 w-full block md:hidden">
        <div className="flex justify-between">
          <div>
            <Image
              src={"/logo/fitLogo.png"}
              width={1369 / 4}
              height={331 / 4}
              className="w-1/3  h-auto"
              alt="logo"
            />
          </div>
          <div onClick={toogleSidebar}>
            <RxHamburgerMenu size={35} className="text-white" />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 z-50 bg-white p-10 w-full h-full block md:hidden transition-transform duration-500 transform ${
          sidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <div>
            <Image
              src={"/logo/fitLogo.png"}
              width={1369 / 4}
              height={331 / 4}
              className="w-1/3  h-auto invert-[100%]"
              alt="logo"
            />
          </div>
          <div onClick={toogleSidebar}>
            <RxCross1 size={35} className="text-black" />
          </div>
        </div>
        <ul className="mt-[10vh] text-2xl flex flex-col gap-16">
          {navLink.map((value) => (
            <li
              key={value.name}
              className="tracking-far uppercase"
              onClick={toogleSidebar}
            >
              <Link
                href={value.router}
                className={`cursor-pointer tracking-far uppercase relative`}
              >
                {value.name}
                {path === value.router ? (
                  <div className="absolute bg-yellow-700 mt-2 w-full h-1 rounded-md"></div>
                ) : (
                  <></>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
