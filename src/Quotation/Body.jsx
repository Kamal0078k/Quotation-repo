import React, { useContext, useEffect, useState } from "react";
// import { QuoteContext } from "./../App";
import { QuoteContext } from "./../App";
const Body = () => {
  const details = useContext(QuoteContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    details.data2.products.items.map((ell) => {
      setTotal((prev) => prev + ell.qty * ell.unitPrice);
    });
  }, []);
  return (
    <div className="w-[100%] mt-4">
      <table className="text-[14px] w-[100%]">
        <tr>
          <th className="border-[0.1rem] border-black w-10">S.no</th>
          <th className="border-[0.1rem] border-black w-[80px]">Item</th>
          <th className="border-[0.1rem] border-black w-[650px]">
            Description
          </th>
          <th className="border-[0.1rem] border-black  w-[50px]">Qty</th>
          <th className="border-[0.1rem] border-black  w-[100px]">
            Unit Price
          </th>
          <th className="border-[0.1rem] border-black w-[160px]">
            Total Price
          </th>
        </tr>
        {details.data2.products.items.map((ell) => (
          <tr
            className="text-[14px]"
            key={details.data2.products.items.indexOf(ell)}
          >
            <td className="border-[0.1rem] border-black text-center">
              {details.data2.products.items.indexOf(ell) + 1}
            </td>
            <td className="border-[0.1rem] border-black text-center">
              {ell.name}
            </td>
            <td className="border-[0.1rem] border-black text-left px-1">
              {ell.description}
            </td>
            <td className="border-[0.1rem] border-black text-center">
              {ell.qty}
            </td>
            <td className="border-[0.1rem] border-black text-center">
              {ell.unitPrice}
            </td>
            <td className="border-[0.1rem] border-black text-center">
              {(ell.unitPrice * ell.qty).toFixed(2)}
            </td>
          </tr>
        ))}
      </table>
      <div className="flex w-[100%] flex-row gap-5 justify-end text-[14px] px-2">
        <div className="text-right ">
          <div>
            <b>Sub Total:</b>
          </div>
          <div>
            {" "}
            <b>GST(18%):</b>
          </div>
          <hr className="border-black" />
          <div>
            <b>Grand Total:</b>
          </div>
        </div>
        <div>
          <div>Rs.{total.toFixed(2)}/-</div>
          <div>Rs.{(total * 0.18).toFixed(2)}/-</div>
          <hr className="border-black" />
          <div>Rs.{(total * 1.18).toFixed(2)}/-</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
