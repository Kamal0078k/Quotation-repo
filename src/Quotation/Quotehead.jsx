import React, { useContext } from "react";
import { QuoteContext } from "./../App";

const Quotehead = () => {
  const details = useContext(QuoteContext);
  const date = new Date();
  const day = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return (
    <div className="w-[100%]">
      <div className="text-center text-2xl"> QUOTATION</div>
      <div className="flex flex-row justify-between  text-[14px]">
        <div className="w-[600px]">
          <div className="h-[140px]">
            To,
            <br /> {details.data2.to}
          </div>
          <div>GSTIN: 36AKVPA5000B2ZP </div>
        </div>
        <div>
          <div>Date: {day}</div>
          <div className="border-[0.1rem] mt-2 rounded-md bg-red-100 px-1 border-black">
            BANK DETAILS:<br></br> Name : Bhagyalaxmi SS Fabrications <br></br>
            A/C.No : 860220110000243 <br></br>IFSC : BKID0008602 <br /> Bank of
            India, Malkajgiri.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotehead;
