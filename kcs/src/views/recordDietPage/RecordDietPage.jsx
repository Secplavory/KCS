import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './RecordDietPage.scss';

import { BsPlusLg } from "react-icons/bs";
function RecordDietPage(props) {
    const [time, setTime] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const setRDHeight = useCallback(() => {
        var RD = document.getElementById("RD");
        RD.style.height = (window.innerHeight - 40).toString() + "px";
    }, []);
    useEffect(() => {
        const setNowDate = () => {
            var now = new Date();
            var year = now.getFullYear();
            var month = (now.getMonth() + 1).toString().length === 1 ? '0' + (now.getMonth() + 1).toString() : now.getMonth() + 1;
            var date = now.getDate().toString().length === 1 ? '0' + (now.getDate()).toString() : now.getDate();
            var formattedDateTime = year + '-' + month + '-' + date;
            document.getElementById('time_picker').value = formattedDateTime;
            updateTime(formattedDateTime)
        }
        if (location.pathname.includes("RecordDiet")) {
            setNowDate();
            setRDHeight();
        }
        window.addEventListener('resize', setRDHeight);
        setTimeout(() => {
            props.setIsShowing(false)
        }, 500);
    }, [props, location, setRDHeight])
    const updateTime = (time) => {
        var update_y = time.slice(0, 4);
        var update_m = time.slice(5, 7);
        var update_d = time.slice(8, 10);
        var updateTime = update_y + "/" + update_m + "/" + update_d;
        setTime(updateTime);
    }
    return (
        <div id="RD">
            <div className="upload">
                <div className="upload_center">
                    <BsPlusLg />
                    <h5>請上傳圖片</h5>
                </div>
            </div>
            <div className="datepicker">
                <span>{time}</span>
                <input type="date" id="time_picker" onChange={(e) => updateTime(e.target.value)}></input>
            </div>
            <div className="diet">
                <textarea rows="2" placeholder="請輸入食物名稱"></textarea>
            </div>
            <div className="submit">
                <button onClick={() => navigate(-1)}>修改完成</button>
            </div>
        </div>
    );
}
export default RecordDietPage;