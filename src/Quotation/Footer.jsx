import React, { useContext, useEffect, useState } from "react";
// import { QuoteContext } from "./../App";
import { QuoteContext } from "./../App";

const Footer = () => {
  const details = useContext(QuoteContext);

  return (
    <div className="text-[12px] mt-4 ">
      <hr className="border-black" />
      <div className="text-[12px] mt-1 w-[503px]">
        T&C*
        <br />
        <ol type="1">
          <li>
            1. {details.data2.advance}% amount should be paid as an advance and{" "}
            {100 - details.data2.advance}% against the bill.
          </li>
          <li>
            2. Product will be delivered within {details.data2.day} days from
            date of PO and advance.
          </li>
          <li>3. Payment mode : Cheque / Cash</li>

          <li>
            4. This quotation is only valid for ten days following the creation
            date.
          </li>
          {details.data2.warranty && (
            <li>5. Warranty:{details.data2.warranty}</li>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Footer;
