import React, { useContext } from "react";
// import { QuoteContext } from "./../App";
import { QuoteContext } from "./../App";
const Body = () => {
  const details = useContext(QuoteContext);
  return (
    <div className="w-[100%] mt-2">
      <table className="text-[12px] w-[100%]">
        <tr>
          <th className="border-[0.1rem] border-black w-10">S.no</th>
          <th className="border-[0.1rem] border-black w-[70px]">Item</th>
          <th className="border-[0.1rem] border-black w-[700px]">
            Description
          </th>
          <th className="border-[0.1rem] border-black  w-[50px]">Qty</th>
          <th className="border-[0.1rem] border-black  w-[100px]">
            Unit Price
          </th>
          <th className="border-[0.1rem] border-black w-[120px]">
            Total Price
          </th>
        </tr>
        {details.data2.products.items.map((ell) => (
          <tr
            className="text-[12px]"
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
    </div>
  );
};

export default Body;
