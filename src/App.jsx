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
  const [data, setData] = useState({
    to: "",
    created: "",
    products: {
      items: [],
    },
  });

  const [data2, setData2] = useState({
    to: "",
    created: "",
    products: {
      items: [],
    },
  });

  const contextValue = useMemo(
    () => ({
      data,
      setData,
      data2,
      setData2,
    }),
    [data, data2]
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
