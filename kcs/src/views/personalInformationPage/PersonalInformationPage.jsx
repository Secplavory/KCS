import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import appAxios from '../../appAxios.js';
import './PersonalInformationPage.scss';

import { AiOutlinePlus } from 'react-icons/ai';
import Individual from '../../asserts/PersonalInformationPage/Individual.png';
import BloodPressure from '../../asserts/PersonalInformationPage/BloodPressure.png';
import BloodSugar from '../../asserts/PersonalInformationPage/BloodSugar.png';
import ColorfulCircle from '../../asserts/PersonalInformationPage/ColorfulCircle.png';
import BloodPressure_1 from '../../asserts/PersonalInformationPage/BloodPressure_1.png';
import BloodPressure_2 from '../../asserts/PersonalInformationPage/BloodPressure_2.png';
import BloodPressure_3 from '../../asserts/PersonalInformationPage/BloodPressure_3.png';

function PersonalInformationPage(props) {
  const ref = useRef();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userSex, setUserSex] = useState('');
  const [userBloodPressureFirst, setUserBloodPressureFirst] = useState('');
  const [userBloodPressureSecond, setUserBloodPressureSecond] = useState('');
  const [userBloodPressureThird, setUserBloodPressureThird] = useState('');
  const [userBloodSugar, setUserBloodSugar] = useState('');
  const [userDiseaseTypeList, setDiseaseTypeList] = useState([]);
  const [userTwitterData, setUserTwitterData] = useState([]);
  const handleScroll = useCallback(() => {
    var bottom = document.querySelector('#PI .bottom');
    var footer = document.querySelector('#Footer');
    var bottom_y = bottom.getBoundingClientRect().y;
    var viewport_height = window.innerHeight;
    var declare_height = viewport_height - bottom_y - 58;
    bottom.style.height = declare_height.toString() + 'px';
    footer.style.bottom = (0).toString() + 'px';
  }, []);
  const getUserInfo = useCallback(async () => {
    try {
      const result = appAxios.get(`/getUserBasicInfo?userId=${props.userId}`);
      const userInfo = (await result).data;
      let userBirthday = new Date(
        userInfo.birthday.substring(0, 10).replace(/-/g, '/')
      );
      let d = new Date();
      let userAge =
        d.getFullYear() -
        userBirthday.getFullYear() -
        ((d.getMonth() < userBirthday.getMonth() ||
          d.getMonth() === userBirthday.getMonth()) &&
        d.getDate() < userBirthday.getDate()
          ? 1
          : 0);
      setUserName(userInfo.name);
      setUserAge(userAge);
      setUserSex(userInfo['sex'] === 1 ? '女' : '男');
      setUserBloodPressureFirst(userInfo.recentDBP);
      setUserBloodPressureSecond(userInfo.recentMAP);
      setUserBloodPressureThird(userInfo.recentSBP);
      setUserBloodSugar(userInfo.recentSugar);
      setDiseaseTypeList(userInfo.diseaseTypeList);
    } catch (error) {
      alert('Server Error!');
    }
  }, [props.userId]);
  const getUserTwitter = useCallback(async () => {
    try {
      const result = appAxios.get(`/getUserTwitter?userId=${props.userId}`);
      setUserTwitterData((await result).data['twitterList']);
    } catch (error) {
      alert('Server Error!');
    }
  }, [props.userId]);

  useEffect(() => {
    const div = ref.current;
    getUserInfo();
    getUserTwitter();
    div.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    setTimeout(() => {
      props.setIsShowing(false);
    }, 1000);
  }, [props, getUserInfo, getUserTwitter, handleScroll]);
  return (
    <div id="PI">
      <div className="top">
        <div className="pi_left">
          <div className="title">
            <div className="title_img">
              <img src={Individual} alt=""></img>
            </div>
            <span>{userName}</span>
          </div>
          <div className="des">
            <div className="vertical_line"></div>
            <div className="des_list">
              <div className="information_list">
                <p>{userAge}歲</p>
                <p>{userSex}性</p>
              </div>
              <div className="status_list">
                {userDiseaseTypeList.map((Element, index) => (
                  <p key={index} style={{ background: Element.color }}>
                    {Element.type}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pi_right">
          <div className="pi_right_top">
            <div className="status">
              <img src={ColorfulCircle} alt=""></img>
              <div className="status_area">
                <div className="title">
                  <div className="title_img">
                    <img src={BloodPressure} alt=""></img>
                  </div>
                  <span>血壓</span>
                </div>
                <div className="title_splitter_hr"></div>
                <div className="status_list">
                  <div className="status_row">
                    <div className="status_icon">
                      <img src={BloodPressure_1} alt=""></img>
                    </div>
                    <span>{userBloodPressureFirst}</span>
                  </div>
                  <div className="status_row">
                    <div className="status_icon">
                      <img src={BloodPressure_2} alt=""></img>
                    </div>
                    <span>{userBloodPressureSecond}</span>
                  </div>
                  <div className="status_row">
                    <div className="status_icon">
                      <img src={BloodPressure_3} alt=""></img>
                    </div>
                    <span>{userBloodPressureThird}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="status">
              <img src={ColorfulCircle} alt=""></img>
              <div className="status_area">
                <div className="title">
                  <div className="title_img">
                    <img src={BloodSugar} alt=""></img>
                  </div>
                  <span>血糖</span>
                </div>
                <div className="title_splitter_hr"></div>
                <div className="status_content">
                  <h6>午餐後</h6>
                  <h6>{userBloodSugar}</h6>
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
      <div className="bottom" ref={ref}>
        <div className="post_area">
          {userTwitterData.map((Element) => (
            <div
              className="post"
              key={Element.twitterId}
              onClick={() => {
                navigate(`/DietDetail/${Element.twitterId}`);
              }}
            >
              <img src={Element.imagesrc} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalInformationPage;
