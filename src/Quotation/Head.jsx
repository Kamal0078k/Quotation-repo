import React, { useContext } from "react";
import { QuoteContext } from "./../App";
const Head = () => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center gap-4">
      <div className="text-[10px] ml-[70%]">
        <div>Prop: Suresh</div>
        <div>Cell: 996376533, 9515992534</div>
        <div>Mail: bhagyalaxmissfabrications@gmail.com</div>
      </div>
      <div className="text-red-500  text-4xl border-[0.1rem] rounded-md   w-[100%] text-center py-2 border-black">
        <b>M/S BHAGYA LAXMI SS FABRICATIONS</b>
      </div>
      <div className="text-[10px] mr-[50%] -mt-2">
        3-13-107/1, SURYANAGAR COLONY, CHANIKYAPURI COLONY, FCI GODOWNS ROAD,
        MALLAPUR, MEDCHAL MALKAJGIRI , Pin 500076, HYDERABAD , TELANGANA{" "}
      </div>
    </div>
  );
};

export default Head;
