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
    // Debounce 는 특정 함수가 일정시간안에 여러번 호출되더라도, 마지막 호출만 처리하도록 만들어줌
    // 이 코드에서는 스크롤 이벤트가 너무 자주 발생하는 것을 방지하고, 사용자가 스크롤을 멈춘 후 일정 시간 지나면 한번만 실행
    console.log(Ref_Sec.current);

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
    // wheel 이벤트 리스너
    // keydown 이벤트 리스너

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [Cur_Sec, setCur_Sec]);
  //  의존성 배열
  // Cur_Sec, setCur_Sec 중 하나라도 변경되면, useEffect 가 실행
  // 리턴 값은 이벤트 리스너 정리 (불필요한 이벤트 리스너가 남지 않도록 처리)
  // 먼저, 이전에 등록된 이벤트 리스너를 제거하고, 그 후에 새로운 이벤트 리스너를 등록

  useEffect(() => {
    if (Ref_Sec.current[Cur_Sec]) {
      Ref_Sec.current[Cur_Sec].scrollIntoView({ behavior: "smooth" });
      // element.scrollIntoView(options);
    }
  }, [Cur_Sec]);

  const handleNavClick = (idx) => {
    setCur_Sec(idx);
  };
  // handleNavClick 함수는 네비게이션 클릭 시 현재 섹션을 변경하는 역할
  // Cur_Sec 가 바뀌면 알아서 useEffect 를 통해 다음 페이지 또는 이전 페이지로 스크롤이 됨

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
