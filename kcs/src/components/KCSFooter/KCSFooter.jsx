import React from "react";
import { useState, useEffect } from 'react'
import {
  useLocation
} from "react-router-dom";
import './KCSFooter.scss';
//  import icon & img
import BloodPressure from '../../asserts/Footer/BloodPressure.webp'
import BloodSugar from '../../asserts/Footer/BloodSugar.webp'
import Diet from '../../asserts/Footer/Diet.webp'
import Search from '../../asserts/Footer/Search.webp'
import Individual from '../../asserts/Footer/Individual.webp'

export default function KCSFooter(props) {
  let location = useLocation();
  const [footerClassName, setFooterClassName] = useState("Footer");
  useEffect(() => {
    if (location.pathname.includes("SignInUp")) {
      setFooterClassName("nonFooter");
    } else {
      setFooterClassName("");
    }
  }, [location])
  return (
    <footer id={props.id} className={footerClassName}>
      <div className="footer_row">
        <div>
          <a className="footer_item" href="/BloodPressure">
            <div className="item_img">
              <img src={BloodPressure} alt=""></img>
            </div>
            <span>血壓</span>
          </a>
        </div>
        <div>
          <a className="footer_item" href="/BloodSugar">
            <div className="item_img">
              <img src={BloodSugar} alt=""></img>
            </div>
            <span>血糖</span>
          </a>
        </div>
        <div>
          <a className="footer_item" href="/RecordDiet">
            <div className="item_img">
              <img src={Diet} alt=""></img>
            </div>
            <span>飲食</span>
          </a>
        </div>
        <div>
          <a className="footer_item" href="/Search">
            <div className="item_img">
              <img src={Search} alt=""></img>
            </div>
            <span>探索</span>
          </a>
        </div>
        <div>
          <a className="footer_item" href="/PersonalInformation">
            <div className="item_img">
              <img src={Individual} alt=""></img>
            </div>
            <span>個人</span>
          </a>
        </div>
      </div>
    </footer>
  );
}