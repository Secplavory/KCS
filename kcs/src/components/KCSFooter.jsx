import React from "react";
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './KCSFooter.scss';
//  import icon & img
import BloodPressure from '../asserts/Footer/BloodPressure.png'
import BloodSugar from '../asserts/Footer/BloodSugar.png'
import Diet from '../asserts/Footer/Diet.png'
import Search from '../asserts/Footer/Search.png'
import Individual from '../asserts/Footer/Individual.png'

export default function KCSFooter(props) {
  const [footerClassName, setFooterClassName] = useState("nonFooter");
  const location = useLocation();
  useEffect(() => {
    if(location.pathname.includes("SignInUp")){
      setFooterClassName("nonFooter");
    }else{
      setFooterClassName("");
    }
  }, [location])
  return (
    <footer id={ props.id } className={ footerClassName }>
      <div className="footer_row">
        <div>
          <a className="footer_item" href="/NormalUser/BloodPressure">
            <div className="item_img">
              <img src={ BloodPressure } alt=""></img>
            </div>
            <span>血壓</span>
          </a>
        </div>
        <div>
          <a className="footer_item" href="/NormalUser/BloodSugar">
            <div className="item_img">
              <img src={ BloodSugar } alt=""></img>
            </div>
            <span>血糖</span>
          </a>
        </div>
        <div>
          <a className="footer_item" href="/NormalUser/RecordDiet">
            <div className="item_img">
              <img src={ Diet } alt=""></img>
            </div>
            <span>飲食</span>
          </a>
        </div>
        <div>
          <a className="footer_item" href="/NormalUser/Search">
            <div className="item_img">
              <img src={ Search } alt=""></img>
            </div>
            <span>探索</span>
          </a>
        </div>
        <div>
          <a className="footer_item" href="/NormalUser/PersonalInformation">
            <div className="item_img">
              <img src={ Individual } alt=""></img>
            </div>
            <span>個人</span>
          </a>
        </div>
      </div>
    </footer>
  );
}