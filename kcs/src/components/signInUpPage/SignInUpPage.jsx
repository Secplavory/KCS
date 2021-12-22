import React from "react";
import axios from 'axios';
import appAxios from "../../appAxios.js"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './SignInUpPage.scss';

function SignInUpPage(props) {
  const navigate = useNavigate();
  const [loginUserPhone, setLoginUserPhone] = useState("");
  const [loginUserPassword, setLoginUserPassword] = useState("");
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerUserPhone, setRegisterUserPhone] = useState("");
  const [registerUserPassword, setRegisterUserPassword] = useState("");
  const loginUserPhoneChangeEvent = () =>{
    let userPhone = document.getElementById('sign-in-phone').value;
    setLoginUserPhone(userPhone);
  }
  const loginUserPasswordChangeEvent = () =>{
    let userPass = document.getElementById('sign-in-pass').value;
    setLoginUserPassword(userPass);
  }
  const registerUserNameChangeEvent = () =>{
    let userName = document.getElementById('sign-up-user').value;
    setRegisterUserName(userName);
  }
  const registerUserPhoneChangeEvent = () =>{
    let userPhone = document.getElementById('sign-up-phone').value;
    setRegisterUserPhone(userPhone);
  }
  const registerUserPasswordChangeEvent = () =>{
    let userPass = document.getElementById('sign-up-pass').value;
    setRegisterUserPassword(userPass);
  }
  const loginUser = async () =>{
    if(loginUserPhone !== '' && loginUserPassword !== ''){
      let loginUserData = {
        'phoneNumber': loginUserPhone,
        'password': loginUserPassword
      }
      console.log(loginUserData['phoneNumber'])
      console.log(loginUserData['password'])
      try {
        const get = await appAxios.post('/loginUser', loginUserData);
        let loginPackage =get['data'];
        console.log(loginPackage)
        if (loginPackage['status'] === "0000"){
          props.setUserHash("0000");
          navigate('/NormalUser/PersonalInformation');
        }else{
          alert("電話或密碼錯誤！")
        }
      } catch (error) {
        alert(error);
      }
    }else{
      alert("請輸入電話和密碼！")
    }
  }
  const registerUser = async () =>{
    if(registerUserName !== '' && registerUserPhone !== '' && registerUserPassword !== ''){
      var loginUserData = {
        type: "register",
        name: registerUserName,
        phone: registerUserPhone,
        password: registerUserPassword
      }
      try {
        const get = await axios.post('http://localhost:5000/api/registerUser', loginUserData);
        let registerPackage =get['data'];
        if (registerPackage['permission']){
          if(registerPackage['status']){
            alert("註冊成功！")
          }
        }else{
          alert("資料輸入錯誤！")
        }
      } catch (error) {
        alert("暫時無註冊功能喔！");
      }
    }else{
      alert("請輸入您完整的個人資料！")
    }
  }
  return (
    <div className="SignInUpPage">
        <div className="login-wrap">
          <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked="check" /><label htmlFor="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="sign-in-phone" className="label">User Phone Number</label>
                  <input id="sign-in-phone" type="text" className="input" onChange={ loginUserPhoneChangeEvent }/>
                </div>
                <div className="group">
                  <label htmlFor="sign-in-pass" className="label">Password</label>
                  <input id="sign-in-pass" type="password" className="input" data-type="password" onChange={ loginUserPasswordChangeEvent }/>
                </div>
                <div className="group">
                  <button className="button" onClick={ loginUser }>Sign In</button>
                </div>
                <div className="hr"></div>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="sign-up-user" className="label">Username</label>
                  <input id="sign-up-user" type="text" className="input" onChange={ registerUserNameChangeEvent } />
                </div>
                <div className="group">
                  <label htmlFor="sign-up-phone" className="label">User Phone Number</label>
                  <input id="sign-up-phone" type="text" className="input" onChange={ registerUserPhoneChangeEvent } />
                </div>
                <div className="group">
                  <label htmlFor="sign-up-pass" className="label">Password</label>
                  <input id="sign-up-pass" type="password" className="input" data-type="password" onChange={ registerUserPasswordChangeEvent } />
                </div>
                <div className="group">
                  <button className="button" onClick={ registerUser }>Sign Up</button>
                </div>
                <div className="hr"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default SignInUpPage;
