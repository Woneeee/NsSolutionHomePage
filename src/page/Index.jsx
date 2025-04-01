import React, { useState, useEffect, useRef } from "react";
import { Debounce } from "../config/Debounce";

const Main = ({ Cur_Sec, setCur_Sec }) => {
  const Ref_Sec = useRef([]);

  useEffect(() => {
    // 마우스
    const handleScroll = Debounce((e) => {
      if (e.deltaY > 0) {
        setCur_Sec((prev) => Math.min(prev + 1, Ref_Sec.current.length - 1));
      } else {
        setCur_Sec((prev) => Math.max(prev - 1, 0));
      }
    }, 300);

    // 키보드
    const handleKeyDown = Debounce((e) => {
      if (e.key === "ArrowDown") {
        setCur_Sec((prev) => Math.min(prev + 1, Ref_Sec.current.length - 1));
      } else if (e.key === "ArrowUp") {
        setCur_Sec((prev) => Math.max(prev - 1, 0));
      }
    }, 300);

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [Cur_Sec, setCur_Sec]);

  useEffect(() => {
    if (Ref_Sec.current[Cur_Sec]) {
      Ref_Sec.current[Cur_Sec].scrollIntoView({ behavior: "smooth" });
    }
  }, [Cur_Sec]);

  const handleNavClick = (idx) => {
    setCur_Sec(idx);
  };

  return (
    <>
      <aside className="Main_Nav">
        <ul className={Cur_Sec !== 0 ? "on" : "on0"}>
          <li
            className={Cur_Sec === 0 ? "Active" : ""}
            onClick={() => handleNavClick(0)}
          >
            <em></em>
            <span>Main</span>
          </li>
          <li
            className={Cur_Sec === 1 ? "Active" : ""}
            onClick={() => handleNavClick(1)}
          >
            <em></em>
            <span>Sec 1</span>
          </li>
          <li
            className={Cur_Sec === 2 ? "Active" : ""}
            onClick={() => handleNavClick(2)}
          >
            <em></em>
            <span>Sec 2</span>
          </li>
          <li
            className={Cur_Sec === 3 ? "Active" : ""}
            onClick={() => handleNavClick(3)}
          >
            <em></em>
            <span>Sec 3</span>
          </li>
          <li
            className={Cur_Sec === 4 ? "Active" : ""}
            onClick={() => handleNavClick(4)}
          >
            <em></em>
            <span>Sec 4</span>
          </li>
        </ul>
      </aside>

      <div id="Full_Page">
        <section
          className="Main_Visual Sec"
          ref={(el) => (Ref_Sec.current[0] = el)}
        >
          <div className="Inner">
            <video autoPlay loop muted>
              <source
                src={process.env.PUBLIC_URL + "/video/main.mp4"}
                type="video/mp4"
              />
            </video>
            <div className="Scroll_Img">
              <img src={process.env.PUBLIC_URL + "/img/scroll.png"} alt="" />
            </div>
          </div>
        </section>
        <section className="Sec" ref={(el) => (Ref_Sec.current[1] = el)}>
          Section 1
        </section>
        <section className="Sec" ref={(el) => (Ref_Sec.current[2] = el)}>
          Section 2
        </section>
        <section className="Sec" ref={(el) => (Ref_Sec.current[3] = el)}>
          Section 3
        </section>
        <section className="Sec" ref={(el) => (Ref_Sec.current[4] = el)}>
          Section 4
        </section>
      </div>
    </>
  );
};

export default Main;
