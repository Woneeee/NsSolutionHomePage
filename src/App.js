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
  // 주로 여러 페이지에서 섹션이나 상태를 관리할 때 사용. 예를 들어, 사용자가 다른 페이지로 이동할 때 특정 상태(cur_Sec)를 초기화하는 목적
  // 예를 들어, 페이지 내에서 여러 섹션을 전환하는 기능이 있는 경우, 사용자가 다른 페이지로 이동할 때 섹션이 자동으로 초기화되어야 하는 경우
  // 따라서, 이 코드는 페이지 이동 시 특정 상태를 초기화하려는 목적

  return (
    <>
      <Header Cur_Sec={Cur_Sec} Location={Location} />
      <main className={Location.pathname !== "/" ? "Sub_Page" : "Main_Page"}>
        <Routes>
          <Route
            path="/"
            element={<Index Cur_Sec={Cur_Sec} setCur_Sec={setCur_Sec} />}
          />
          <Route path="/about/company" element={<Company />} />
        </Routes>
      </main>
      {Cur_Sec === 4 && <Footer />}
    </>
  );
};
// App.js에서 모든 페이지를 라우트로 다 관리

export default App;
