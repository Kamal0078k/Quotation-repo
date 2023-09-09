import React, { useEffect, useRef } from "react";

import Head from "../Quotation/Head";
import Quotehead from "../Quotation/Quotehead";
import Body from "../Quotation/Body";
import Footer from "../Quotation/Footer";
import image from "./../assets/bsf.svg";

const Preview = () => {
  useEffect(() => {
    setTimeout(() => {
      window.print();
    }, 1000);
  }, []);

  return (
    <div className="w-screen h-[1000px] relative">
      <div className="absolute  -rotate-[30deg] text-[450px] top-40 -left-3">
        <img src={image} />
      </div>
      <div className=" w-[100%] absolute" id="quote">
        <Head />
        <Quotehead />
        <div className="flex flex-col justify-between h-[600px]">
          <div className="flex-1">
            <Body />
          </div>
          <div className="h-[10%]">
            <Footer />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Preview;
