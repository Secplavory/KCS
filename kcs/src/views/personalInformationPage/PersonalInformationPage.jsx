import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from 'axios';
import './PersonalInformationPage.scss';

import { AiOutlinePlus } from "react-icons/ai";
import Individual from '../../asserts/PersonalInformationPage/Individual.png'
import BloodPressure from '../../asserts/PersonalInformationPage/BloodPressure.png'
import BloodSugar from '../../asserts/PersonalInformationPage/BloodSugar.png'
import ColorfulCircle from '../../asserts/PersonalInformationPage/ColorfulCircle.png'
import BloodPressure_1 from '../../asserts/PersonalInformationPage/BloodPressure_1.png'
import BloodPressure_2 from '../../asserts/PersonalInformationPage/BloodPressure_2.png'
import BloodPressure_3 from '../../asserts/PersonalInformationPage/BloodPressure_3.png'

function PersonalInformationPage(props) {
  const ref = useRef();
  const [userName, setUserName] = useState("味道洪");
  const [userAge, setUserAge] = useState("");
  const [userSex, setUserSex] = useState("");
  const [userBloodPressureFirst, setUserBloodPressureFirst] = useState("");
  const [userBloodPressureSecond, setUserBloodPressureSecond] = useState("");
  const [userBloodPressureThird, setUserBloodPressureThird] = useState("");
  const [userBloodSugar, setUserBloodSugar] = useState("");
  const handleScroll = useCallback(() => {
    var bottom = document.querySelector("#PI .bottom");
    var footer = document.querySelector("#Footer");
    var bottom_y = bottom.getBoundingClientRect().y;
    var viewport_height = window.innerHeight;
    var declare_height = viewport_height - bottom_y - 58;
    // console.log(declare_height)
    bottom.style.height = declare_height.toString() + "px";
    footer.style.bottom = (0).toString() + "px";;
  }, []);
  const getUserInfo = useCallback(async (userHash) =>{
    try{
        const data = await axios.get("http://localhost:5000/api/getUserInfo/" + userHash); 
        const userInfo = data['data'];
        setUserName(userInfo['name'])
        setUserAge(userInfo['age']);
        setUserSex(userInfo['sex']);
        setUserBloodPressureFirst(userInfo['bloodPressureFirst']);
        setUserBloodPressureSecond(userInfo['bloodPressureSecond']);
        setUserBloodPressureThird(userInfo['bloodPressureThird']);
        setUserBloodSugar(userInfo['bloodSugar']);
    } 
    catch (error){
        // alert("TEST MODE!!");    
    }  
  }, []);

  useEffect(() => {
    const div = ref.current;
    getUserInfo(props.userHash);
    div.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
  }, [props, getUserInfo, handleScroll]);

  return (
    <div id="PI">
      <div className="top">
        <div className="pi_left">
          <div className="title">
            <div className="title_img">
              <img src={ Individual } alt=""></img>
            </div>
            <span>{ userName }</span>
          </div>
          <div className="des">
            <div className="vertical_line"></div>
            <div className="des_list">
              <div className="information_list">
                <p>{ userAge }歲</p>
                <p>{ userSex }性</p>
              </div>
              <div className="status_list">
                <p className="blood_suger">糖尿病</p>
                <p className="blood_pleasure">高血壓</p>
                <p className="kidney">腎臟病第二期</p>
              </div>
            </div>

          </div>
        </div>
        <div className="pi_right">
          <div className="pi_right_top">
            <div className="status">
              <img src={ ColorfulCircle } alt=""></img>
              <div className="status_area">
                <div className="title">
                  <div className="title_img"><img src={ BloodPressure } alt=""></img></div>
                  <span>血壓</span>
                </div>
                <div className="title_splitter_hr"></div>
                <div className="status_list">
                  <div className="status_row">
                    <div className="status_icon"><img src={ BloodPressure_1 } alt=""></img></div>
                    <span>{ userBloodPressureFirst }</span>
                  </div>
                  <div className="status_row">
                    <div className="status_icon"><img src={ BloodPressure_2 } alt=""></img></div>
                    <span>{ userBloodPressureSecond }</span>
                  </div>
                  <div className="status_row">
                    <div className="status_icon"><img src={ BloodPressure_3 } alt=""></img></div>
                    <span>{ userBloodPressureThird }</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="status">
              <img src={ ColorfulCircle } alt=""></img>
              <div className="status_area">
                <div className="title">
                  <div className="title_img"><img src={ BloodSugar } alt=""></img></div>
                  <span>血糖</span>
                </div>
                <div className="title_splitter_hr"></div>
                <div className="status_content">
                  <h6>午餐後</h6>
                  <h6>{ userBloodSugar }</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="pi_right_bottom">
            <a href="/RecordDiet">
              <div className="record_diet">
                <AiOutlinePlus />
                <p>紀錄飲食</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom" ref={ ref }>
        <div className="post_area">
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformationPage;