import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
// import { Card } from "@mui/material";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { QuoteContext } from "./App";
import { db } from "./../src/firebase";
import { collection, addDoc, Timestamp, doc } from "firebase/firestore";

const Form = () => {
  const InvoiceRef = collection(db, "quotation");
  const details = useContext(QuoteContext);
  const [item, seItem] = useState({
    name: "",
    description: "",
    qty: "",
    unitPrice: "",
  });
  useEffect(() => {
    console.log(details.data);
  }, [details]);

  const tofirebase = async () => {
    details.setData2(details.data);
    try {
      addDoc(InvoiceRef, {
        ...details.data,
        created: Timestamp.now(),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="w-screen pt-10 flex flex-col items-start gap-4 justify-center
     px-4"
    >
      <TextField
        id="outlined-basic"
        label="To"
        size="small"
        className="w-[100%]"
        variant="outlined"
        onChange={(e) => {
          details.setData({
            ...details.data,
            to: e.target.value,
          });
        }}
      />
      <TextField
        id="outlined-basic"
        size="small"
        value={item.name}
        className="w-[100%]"
        label="Item"
        variant="outlined"
        onChange={(e) => {
          seItem({
            ...item,
            name: e.target.value,
          });
        }}
      />
      <TextField
        id="outlined-basic"
        size="small"
        value={item.description}
        label="Description"
        multiline
        className="w-[100%]"
        variant="outlined"
        onChange={(e) => {
          seItem({
            ...item,
            description: e.target.value,
          });
        }}
      />
      <TextField
        id="outlined-basic"
        size="small"
        value={item.qty}
        label="Qty"
        type="number"
        className="w-[100%]"
        variant="outlined"
        onChange={(e) => {
          seItem({
            ...item,
            qty: e.target.value,
          });
        }}
      />
      <TextField
        id="outlined-basic"
        size="small"
        type="number"
        value={item.unitPrice}
        label="Unit Price"
        className="w-[100%]"
        variant="outlined"
        onChange={(e) => {
          seItem({
            ...item,
            unitPrice: e.target.value,
          });
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          details.setData({
            ...details.data,
            products: {
              items: [...details.data.products.items, item],
            },
          });
          seItem({
            name: "",
            description: "",
            qty: "",
            unitPrice: "",
          });
        }}
      >
        Add Product
      </Button>
      <Cards />
      <Link to="/preview">
        <Button onClick={tofirebase} variant="contained">
          Preview
        </Button>
      </Link>
      <Link to="/history">
        <Button variant="contained">History</Button>
      </Link>
    </div>
  );
};

export default Form;
