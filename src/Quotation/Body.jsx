import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Body = () => {
  const doc = new jsPDF();
  autoTable(doc, { html: "#table" });
  autoTable(doc, {
    head: [["Name", "Email", "Country"]],
    body: [
      ["David", "david@example.com", "Sweden"],
      ["Castille", "castille@example.com", "Spain"],
      // ...
    ],
  });
  return <div className="w-[100%] mt-2" id="table"></div>;
};

export default Body;
