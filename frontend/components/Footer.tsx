import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-[#FEF4EA] h-80 px-80 gap-5">
      <div className="flex  mx-5 mt-10">
        <Image src="/Aspira.svg" alt="logo" width={100} height={100} />
      </div>
      <div className="mt-2 p-2">
        <h2 className="text-blue-600 font-bold text-2xl">
          Want to know industry news everyday ?
        </h2>
      </div>
      <div className="">
        <h4 className="text-blue-600 texl-sm  ">Subscibe to our mail</h4>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[400px]"
          />
          <Button className="bg-orange-600 ">Subscribe</Button>
        </div>
      </div>
      <div>
        <p>
          We're committed to your privacy. Aspira uses the information you
          provide to us to contact you about our relevant content, products, and
          services. You may unsubscribe from these communications at any time.
          For more information, check out our privacy policy.
        </p>
      </div>
    </div>
  );
};

export default Footer;
