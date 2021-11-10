import React from "react";
import {
 Navbar,
 Nav,
} from "react-bootstrap"; //bootstrap導入
import './KCSNavbar.scss';
// icon導入
import { GrHistory } from 'react-icons/gr';
import { BiMessageRounded } from "react-icons/bi";
export default function KCSNavbar(props) {
  return (
    <Navbar id={props.id} fixed="sticky" expand="lg" className="ml-auto">
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