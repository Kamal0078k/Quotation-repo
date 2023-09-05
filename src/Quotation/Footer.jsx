import React, { useContext, useEffect, useState } from "react";
// import { QuoteContext } from "./../App";
import { QuoteContext } from "./../App";

const Footer = () => {
  const details = useContext(QuoteContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    details.data2.products.items.map((ell) => {
      setTotal((prev) => prev + ell.qty * ell.unitPrice);
    });
  }, []);
  return (
    <div className="text-[12px] mt-4 flex flex-row">
      <div className="text-[12px] w-[503px]">
        T&C*
        <br />
        <ol type="1">
          <li>
            1. 50% amount should be paid as an advance and 50% against the bill.
          </li>
          <li>
            2. Product will be delivered within 25 days from date of PO and
            advance.
          </li>
          <li>3. Payment mode : Cheque / Cash</li>
          <li>4. Warranty:-2years service</li>
        </ol>
      </div>
      <div className="text-right w-[200px]">
        <div>Sub Total :</div>
        <div>GST :</div>
        <div>Grand Total :</div>
      </div>
      <div className="text-center w-[80px]">
        <div>{total}</div>
        <div>18%</div>
        <div>{(total * 0.18).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Footer;
