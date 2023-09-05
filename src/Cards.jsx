import React, { useContext, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { QuoteContext } from "./App";

const Cards = () => {
  const details = useContext(QuoteContext);
  useEffect(() => {
    console.log(details.data.products.items.length);
  }, [details]);
  return (
    <div className="w-[100%]">
      {details.data.products.items.map((ell) => (
        <Card key={details.data.products.items.indexOf(ell)}>
          <CardContent>
            <b>Item:{ell.name}</b> <br /> <b>Description:{ell.description}</b>{" "}
            <br /> <b>Qty: {ell.qty}</b> <br />{" "}
            <b>UnitPrice: {ell.unitPrice}</b> <br />
          </CardContent>
          <CardActions>
            <Button size="small">Update</Button>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
