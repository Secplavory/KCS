import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignInUpPage.scss';

function SignInUpPage() {
    const navigate = useNavigate();
    const Login = async () =>{
      var myParams = {
        type: "login"
    }
      try {
        const get = await axios.post('http://localhost:5000/api/login', myParams);
        console.log(get);
      } catch (error) {
        console.log(error);
      }
      // axios.post('http://localhost:5000/api/login', myParams)
      //   .then(function(response){
      //         console.log(response);
      // }).catch(function(error){
      //     console.log(error);
      // });
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
                  <label htmlFor="sign-in-user" className="label">Username</label>
                  <input id="sign-in-user" type="text" className="input"/>
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">Password</label>
                  <input id="pass" type="password" className="input" data-type="password" />
                </div>
                <div className="group">
                  <button className="button" onClick={ Login }>Sign In</button>
                </div>
                <div className="hr"></div>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="sign-up-user" className="label">Username</label>
                  <input id="sign-up-user" type="text" className="input" />
                </div>
                <div className="group">
                  <label htmlFor="phone" className="label">Phone Number</label>
                  <input id="phone" type="text" className="input" />
                </div>
                <div className="group">
                  <label htmlFor="sign-up-pass" className="label">Password</label>
                  <input id="sign-up-pass" type="password" className="input" data-type="password" />
                </div>
                <div className="group">
                  <button className="button" onClick={() => navigate('/PersonalInformation')}>Sign Up</button>
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
