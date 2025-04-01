import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./page/Index";

import Company from "./page/about/Company";

const App = () => {
  const [Cur_Sec, setCur_Sec] = useState(0);
  const Location = useLocation();

  useEffect(() => {
    if (Location.pathname !== "/") {
      setCur_Sec(0);
    }
  }, [Location.pathname]);

  return (
    <>
      <Header Cur_Sec={Cur_Sec} Location={Location} />
      <main className={Location.pathname !== "/" ? "Sub_Page" : "Main_Page"}>
        <Routes>
          <Route path="/" element={<Index Cur_Sec={Cur_Sec} setCur_Sec={setCur_Sec} />} />
          <Route path="/about/company" element={<Company />} />
        </Routes>
      </main>
      {Cur_Sec === 4 && <Footer />}
    </>
  );
};

export default App;
