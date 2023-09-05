import React, { useEffect, useRef } from "react";

import Head from "../Quotation/Head";
import Quotehead from "../Quotation/Quotehead";
import Body from "../Quotation/Body";
import Footer from "../Quotation/Footer";

const Preview = () => {
  useEffect(() => {
    setTimeout(() => {
      window.print();
    }, 1000);
  }, []);

  return (
    <div className="w-screen">
      <div className=" w-[100%] " id="quote">
        <Head />
        <Quotehead />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Preview;
