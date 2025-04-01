import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const Header = ({ Cur_Sec, Location }) => {
  const [Hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const PATH = Location.pathname;
  console.log("PATH", PATH);
  const NotHome = PATH !== "/";

  const Logo_Src =
    Cur_Sec === 0 && !Hovered && !NotHome
      ? `${process.env.PUBLIC_URL}/img/NS_logo_W.png`
      : `${process.env.PUBLIC_URL}/img/NS_logo_B.png`;

  return (
    <header
      className={`Header ${
        Cur_Sec !== 0 || Hovered || NotHome ? "Main_ACT" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="Inner">
        <h1 className="Logo">
          <Link to="/" className="Route_Link">
            <img
              className="Logo_IMG"
              src={`${process.env.PUBLIC_URL}/img/logo.svg`}
              alt="NS Logo"
            />
          </Link>
        </h1>
        <nav className="gnb">
          <ul className="Main_Menu">
            <li>
              <Link
                to="/about/company"
                className={PATH.startsWith("/about") ? "active" : ""}
              >
                ABOUT US
              </Link>
              <ul className="Sub_Menu">
                <li>
                  <NavLink to="/about/company">회사소개</NavLink>
                </li>
                <li>
                  <NavLink to="/about/vision">VISION</NavLink>
                </li>
                <li>
                  <NavLink to="/about/core-values">핵심가치</NavLink>
                </li>
                <li>
                  <NavLink to="/about/history">연혁</NavLink>
                </li>
                <li>
                  <NavLink to="/about/certifications">인증</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/business/software"
                className={PATH.startsWith("/business") ? "active" : ""}
              >
                BUSINESS
              </Link>
              <ul className="Sub_Menu">
                <li>
                  <NavLink to="/business/software">소프트웨어 개발</NavLink>
                </li>
                <li>
                  <NavLink to="/business/infra">인프라 구축</NavLink>
                </li>
                <li>
                  <NavLink to="/business/support">정부지원사업</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/solution"
                className={PATH.startsWith("/solution") ? "active" : ""}
              >
                SOLUTION
              </Link>
              <ul className="Sub_Menu">
                <li>
                  <NavLink to="/solution/control">통합제어</NavLink>
                </li>
                <li>
                  <NavLink to="/solution/monitoring">모니터링</NavLink>
                </li>
                <li>
                  <NavLink to="/solution/effect">구축 효과</NavLink>
                </li>
                <li>
                  <NavLink to="/solution/example">적용 사례</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/board/news"
                className={PATH.startsWith("/board") ? "active" : ""}
              >
                NOTICE
              </Link>
              <ul className="Sub_Menu">
                <li>
                  <NavLink to="/board/news">회사소식</NavLink>
                </li>
                <li>
                  <NavLink to="/board/inquiry">도입문의</NavLink>
                </li>
                <li>
                  <NavLink to="/board/notice">공지사항</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="Bar">
          <HiMiniBars3CenterLeft />
        </div>
      </div>
    </header>
  );
};

export default Header;
