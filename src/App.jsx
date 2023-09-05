import { useState, createContext, useMemo } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Preview from "./Previe/Preview";
import Form from "./Form";
import History from "./History";

export const QuoteContext = createContext(null);
function App() {
  const [day, setDay] = useState(0);
  const [warranty, setWarranty] = useState("");
  const [data, setData] = useState({
    to: "",
    created: "",
    warranty: "",
    day: "",
    products: {
      items: [],
    },
  });

  const [data2, setData2] = useState({
    to: "",
    created: "",
    warranty: "",
    day: "",
    products: {
      items: [],
    },
  });

  const contextValue = useMemo(
    () => ({
      data,
      day,
      warranty,
      setWarranty,
      setDay,
      setData,
      data2,
      setData2,
    }),
    [data, day, data2, warranty]
  );
  return (
    <QuoteContext.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </QuoteContext.Provider>
  );
}

export default App;
