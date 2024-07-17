import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center px-10">
      <div className="w-full h-full flex flex-col md:flex-row xl:justify-start md:justify-around items-center">
        <div className="w-full md:w-1/3 xl:w-1/2 mt-10">
          <CardContainer>
            <CardBody className="bg-primary-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-accent"
              >
                ARIF FADILLAH
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-primary-200 text-base max-w-sm mt-2 "
              >
                Hi, i will help you to design your dream house
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/model.jpg"
                  height="1300"
                  width="1300"
                  className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="mt-10 mb-5">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/contact"
                  className="border w-full mt-8 px-10 py-5 text-white rounded-full text-center hover:bg-white/10"
                >
                  Contact Me
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div className="md:w-1/3 mb-10 md:mb-0 pb-10 md:pb-0 text-white">
          <h1 className="text-3xl text-center md:text-start uppercase tracking-far font-semibold">
            Profile
          </h1>
          <p className="mt-10 leading-10 text-justify">
            Hello! I'm Arif and i am interior designer with a passion for
            creating beautiful and comfortable living spaces. With my expertise
            in interior design, I can help turn your house into a dream home
            that reflects your personal style and tastes. Let's work together to
            bring your interior design vision to life and create a home that
            you'll love coming back to every day!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
