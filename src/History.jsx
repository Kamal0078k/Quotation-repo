import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import { Button, Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";

import { db } from "./firebase";
import {
  collection,
  query,
  where,
  orderBy,
  startAt,
  onSnapshot,
  getDoc,
  getDocs,
  Timestamp,
  doc,
} from "firebase/firestore";

const History = () => {
  const InvoiceRef = collection(db, "quotation");
  const [quotation, setQuotation] = useState([]);
  const [search, setSearch] = useState("");
  const fetchdata = async () => {
    const data = await getDocs(InvoiceRef);
    setQuotation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const q = query(
      InvoiceRef,
      where("to", ">=", search),
      orderBy("to"),
      startAt(search)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedData = [];
      snapshot.forEach((doc) => {
        const docData = doc.data();
        fetchedData.push(docData);
      });
      setQuotation(fetchedData);
      return unsubscribe;
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="w-screen mt-4 px-4">
      <div className="flex gap-2">
        <TextField
          id="outlined-basic"
          size="small"
          label="Search"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-[100%]"
          variant="outlined"
        />
        <Button variant="contained" onClick={searchHandler}>
          Search
        </Button>
      </div>

      {quotation.length === 0 ? (
        <>Loading...</>
      ) : (
        quotation.map((ell) => {
          console.log(ell.created.toDate().getFullYear());
          const date = `${ell.created.toDate().getDate()}/${ell.created
            .toDate()
            .getMonth()}/${ell.created.toDate().getFullYear()}`;
          return (
            <Card key={ell.id} className="mt-2 bg-red-200">
              <CardContent>
                {" "}
                <b>To: </b> {ell.to} <br />
                <b>created:</b> {date}{" "}
              </CardContent>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default History;
