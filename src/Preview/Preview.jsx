import React, { useEffect, useRef } from "react";

import Head from "../Quotation/Head";
import Quotehead from "../Quotation/Quotehead";
import Body from "../Quotation/Body";

const Preview = () => {
  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className=" w-[100%] " id="quote">
        <Head />
        <Quotehead />
        <Body />
        <Quotehead />
      </div>
    </div>
  );
};

export default Preview;
