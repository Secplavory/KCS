import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Above are buildin dependency when project init.


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  

);
const setBottomPartHeight = ()=>{
  var bottom = document.querySelector("#PI .bottom");
  if(bottom != null){
    var bottom_y = bottom.getBoundingClientRect().y;
    var viewport_height = window.innerHeight;
    var declare_height = viewport_height - bottom_y - 58;
    // console.log(declare_height)
    bottom.style.height = declare_height.toString() + "px";
    // console.log(bottom.style.height)

  }
}
var bottom = document.querySelector("#PI .bottom");
bottom.addEventListener('scroll', function(e) {
  setBottomPartHeight();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
