import React from "react";

const Body = () => {
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
        <tr className="text-[12px]">
          <td className="border-[0.1rem] border-black text-center">1</td>
          <td className="border-[0.1rem] border-black text-center">SS</td>
          <td className="border-[0.1rem] border-black text-left px-1">
            Dimensions: L40"xW25"xH49" with wheels Total 1.2mm thick sheet and
            Legs 50x50x1.6mm thick square pipes and Double layer sheeting and 50
            plates capacity and double doors and 2 sides handle and thermo meter
            and Led lite and Indicater and cable and Electricals no warranty and
            6" wheels (PU) 2 brakes 2 without brakes and Top sheeting H 3" and 3
            side's SS 304 grade JINDAL STEEL Material matfinished with
            transportation wheels no warranty
          </td>
          <td className="border-[0.1rem] border-black text-center">2</td>
          <td className="border-[0.1rem] border-black text-center">15140</td>
          <td className="border-[0.1rem] border-black text-center">300000</td>
        </tr>
        <tr className="text-[12px]">
          <td className="border-[0.1rem] border-black text-center">1</td>
          <td className="border-[0.1rem] border-black text-center">SS</td>
          <td className="border-[0.1rem] border-black text-left px-1">
            Dimensions: L40"xW25"xH49" with wheels Total 1.2mm thick sheet and
            Legs 50x50x1.6mm thick square pipes and Double layer sheeting and 50
            plates capacity and double doors and 2 sides handle and thermo meter
            and Led lite and Indicater and cable and Electricals no warranty and
            6" wheels (PU) 2 brakes 2 without brakes and Top sheeting H 3" and 3
            side's SS 304 grade JINDAL STEEL Material matfinished with
            transportation wheels no warranty
          </td>
          <td className="border-[0.1rem] border-black text-center">2</td>
          <td className="border-[0.1rem] border-black text-center">15140</td>
          <td className="border-[0.1rem] border-black text-center">300000</td>
        </tr>
      </table>
    </div>
  );
};

export default Body;
