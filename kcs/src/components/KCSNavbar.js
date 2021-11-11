import React from "react";
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {
 Navbar,
 Nav,
} from "react-bootstrap"; //bootstrap導入
import './KCSNavbar.scss';
// icon導入
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GrHistory } from 'react-icons/gr';
import { BiMessageRounded } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

export default function KCSNavbar(props) {
  const [navbarClassName, setNavbarClassName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    if(location.pathname.includes("PersonalInformation")){
      setNavbarClassName("PI");
    }else if(location.pathname.includes("RecordDiet")){
      setNavbarClassName("RD");
    }else if(location.pathname.includes("Search")){
      setNavbarClassName("SP");
    }

  }, [location])

  return (
    <Navbar id={props.id} fixed="sticky" expand="lg" className={ navbarClassName }>
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
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid">
          <Nav.Link className="ms-auto">血壓</Nav.Link>
          <Nav.Link className="ms-auto">血糖</Nav.Link>
          <Nav.Link className="ms-auto">飲食</Nav.Link>
          <Nav.Link className="ms-auto">探索</Nav.Link>
          <Nav.Link className="ms-auto">個人資訊</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}