import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="w-full h-[100vh] text-accent flex justify-center items-center">
        <div className="text-center text-base flex flex-col">
          <h1 className="tracking-far text-base">RIFENTERIOR</h1>
          <h2 className="tracking-far mt-10">EMAIL</h2>
          <a
            href="mailto:rifenterior@gmail.com"
            className="mt-3 tracking-wider cursor-pointer hover:underline"
          >
            rifenterior@gmail.com
          </a>
          <h2 className="tracking-far mt-10">WHATSAPP</h2>
          <a
            href="https://wa.me/6289513471676"
            className="mt-3 tracking-wider hover:underline cursor-pointer"
            target="self"
          >
            0895 1347 1676
          </a>
          <h2 className="tracking-far mt-10">INSTAGRAM</h2>
          <a
            className="mt-3 tracking-wider hover:underline"
            href="https://instagram.com/rifenterior"
            target="self"
          >
            @rifenterior
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
