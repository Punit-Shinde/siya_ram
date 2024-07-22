import React from "react";
import PS from "../assets/ps.png";
import insta from "../assets/insta.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full p-5 flex pt-2 border-t-2 border-primary items-center gap-3">
        {/* <div className="flex justify-center items-center gap-5 m-2">
          <div className="flex justify-center items-center">
            <img
              src={Logo}
              alt="logo"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <h3 className="flex flex-col">
            <span className="text-primary font-bold text-3xl">Siya Ram's</span>{" "}
            <span>
              Cafe <span className="text-primary">&</span> Fast Food
            </span>
          </h3>
        </div> */}

        <h1 className="px-2 text-sm  ">
          Design & developed by{" "}
          <span className="text-primary">Punit Shinde</span> with 💝, message me on <a href="https://www.instagram.com/punit__shinde/" className="underline text-blue-400">instagram</a> for
          similiar websites or apps,
        </h1>
        <a href="https://www.instagram.com/punit__shinde/">
          <img src={insta} alt="instagram link" className="w-12 m-2 animate-bounce" />
        </a>
        <a href="https://punit-shinde.github.io/Portfolio/">
          <img src={PS} alt="instagram link" className="w-12 m-2 animate-bounce" />
        </a>
      </div>
    </>
  );
};

export default Footer;
