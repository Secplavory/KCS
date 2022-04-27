import React from "react";
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {
 Navbar,
//  Nav,
//  NavLink
} from "react-bootstrap"; //bootstrap導入
import './KCSNavbar.scss';
// icon導入
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GrHistory } from 'react-icons/gr';
import { BiMessageRounded } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

export default function KCSNavbar(props) {
  const [navbarClassName, setNavbarClassName] = useState("SignInUp");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(location.pathname.includes("SignInUp")){
      setNavbarClassName("SignInUp");
    }else if(location.pathname.includes("PersonalInformation")){
      setNavbarClassName("PI");
    }else if(location.pathname.includes("RecordDiet")){
      setNavbarClassName("RD");
    }else if(location.pathname.includes("Search")){
      setNavbarClassName("SP");
    }else if(location.pathname.includes("BloodPressure") || location.pathname.includes("BloodSugar")){
      setNavbarClassName("Blood");
    }
  }, [location])

  return (
    <Navbar id={props.id} fixed="sticky" expand="true" className={ navbarClassName }>
      <div className="left">
        <button className="back" onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft />
        </button>
      </div>
      <div className="center">
        <FaSearch />
        <input type="text"></input>
      </div>
      <div className="right">
          <a className="message" href="/">
            <BiMessageRounded />
          </a>
          <a className="history" href="/">
            <GrHistory />
          </a>
          <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
        </div>
      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid">
          <NavLink href="/BloodPressure" className="ms-auto">血壓</NavLink>
          <NavLink href="/BloodSugar" className="ms-auto">血糖</NavLink>
          <NavLink href="/RecordDiet"  className="ms-auto">飲食</NavLink>
          <NavLink href="/Search" className="ms-auto">探索</NavLink>
          <NavLink href="/PersonalInformation"  className="ms-auto">個人資訊</NavLink>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
}