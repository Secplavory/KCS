import React, { useState, useEffect, useCallback } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import './RecordDietPage.scss';

import { BsPlusLg } from 'react-icons/bs';
import { IoCaretDown } from 'react-icons/io5';
import appAxios, { multipartAxios } from '../../appAxios.js';

function RecordDietPage(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const [time, setTime] = useState('');
  const [Imagesrc, setImagesrc] = useState('');
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');

  const setRDHeight = useCallback(() => {
    var RD = document.getElementById('RD');
    RD.style.height = (window.innerHeight - 40).toString() + 'px';
  }, []);

  const uploadImage = (file) => {
    var formData = new FormData();
    formData.append('image', file);
    multipartAxios.post(`/uploadImage`, formData).then((result) => {
      if (result.data.status !== '0000') {
        setImagesrc('');
        return;
      }
      setImagesrc(result.data.fileName);
    });
  };

  const uploadTwitter = async (title, content, date, imageUrl, userId) => {
    props.setIsShowing(false);
    appAxios
      .post('/createTwitter', {
        title: title,
        content: content,
        datetime: date,
        imageUrl: imageUrl,
        userId: userId,
      })
      .then((result) => {
        if (result.data.status !== '0000') {
          props.setIsShowing(true);
          return;
        }
        navigate(-1);
      });
  };

  useEffect(() => {
    const setNowDate = () => {
      var now = new Date();
      var year = now.getFullYear();
      var month =
        (now.getMonth() + 1).toString().length === 1
          ? '0' + (now.getMonth() + 1).toString()
          : now.getMonth() + 1;
      var date =
        now.getDate().toString().length === 1
          ? '0' + now.getDate().toString()
          : now.getDate();
      var formattedDateTime = year + '-' + month + '-' + date;
      document.getElementById('time_picker').value = formattedDateTime;
      updateTime(formattedDateTime);
    };
    if (location.pathname.includes('RecordDiet')) {
      setNowDate();
      setRDHeight();
    }
    window.addEventListener('resize', setRDHeight);
    setTimeout(() => {
      props.setIsShowing(false);
    }, 500);
  }, [props, location, setRDHeight]);
  const updateTime = (time) => {
    var update_y = time.slice(0, 4);
    var update_m = time.slice(5, 7);
    var update_d = time.slice(8, 10);
    var updateTime = update_y + '/' + update_m + '/' + update_d;
    setTime(updateTime);
  };
  return (
    <div id="RD">
      <label className="upload" htmlFor="uploader">
        <div className="upload_center">
          <BsPlusLg />
          <h5>請上傳圖片</h5>
        </div>
        <input
          id="uploader"
          type="file"
          hidden
          onChange={(e) => uploadImage(e.target.files[0])}
        />
        <img src={Imagesrc} alt="" />
      </label>
      <div className="datepicker">
        <span>
          {time} <IoCaretDown id="timeSelector" />
        </span>
        <input
          type="date"
          id="time_picker"
          onChange={(e) => updateTime(e.target.value)}
        ></input>
      </div>
      <div className="diet">
        <textarea
          rows="1"
          placeholder="請輸入食物名稱"
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
      </div>
      <div className="desc">
        <textarea
          rows="3"
          placeholder="請輸入食物描述"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="submit">
        <button
          onClick={() =>
            uploadTwitter(Title, Content, time, Imagesrc, props.userId)
          }
        >
          上傳推文
        </button>
      </div>
    </div>
  );
}
export default RecordDietPage;
