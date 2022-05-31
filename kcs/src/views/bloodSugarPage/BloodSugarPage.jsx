import React from "react";
import appAxios from "../../appAxios.js"
import { useState, useEffect, useCallback } from 'react'
import './BloodSugarPage.scss';

import { AiFillCaretDown } from "react-icons/ai";
import BloodSugar from "../../asserts/BloodSugarPage/BloodSugar.png"

function BloodSugarPage(props) {
    const [userBloodSugarData, setUserBloodSugarData] = useState([]);
    const [changeDate, setChangeDate] = useState("");
    const [modifySugarId, setModifySugarId] = useState("");
    const getUserBloodSugar = useCallback(async () => {
        try {
            const result = appAxios.get(`/getUserBloodSugar?userId=${props.userId}&page=1&limit=15`)
            setUserBloodSugarData((await result).data.bloodSugarList)
        } catch (error) {
            console.log("Server Error")
        }
    }, [props, setUserBloodSugarData]);
    useEffect(() => {
        getUserBloodSugar();
        props.setIsShowing(false);
    }, [props, getUserBloodSugar]);
    const saveRecord = async (input_first, inputTime) => {
        let currentDateTime = new Date().toLocaleString('zh-TW', { hour12: false });
        try {
            const saveRecordPayload = {
                "sugar": input_first,
                "datetime": currentDateTime,
                "userId": props.userId,
                "timePeriod": inputTime,
            }
            await appAxios.post(`/bloodSugar`, saveRecordPayload);
            await getUserBloodSugar();
        } catch (error) {
            console.log("Server Error")
        }
    }
    const submitRecord = async () => {
        let input_first = document.getElementById('input_first').value;
        let inputTime = document.getElementById('inputTime').value;
        if (input_first !== '' && inputTime !== 'none') {
            alert("送出");
            await saveRecord(input_first, inputTime);
            document.getElementById('input_first').value = "";
            document.getElementById('inputTime').value = "早餐前";
        } else {
            alert("請輸入資料！");
        }
    };
    const openModifyPage = (e, sugarId) => {
        setModifySugarId(sugarId);
        let modify_page = document.querySelector(".BS_modify_record");
        modify_page.classList.add("show");
        let tr_Tds = e.target.parentNode.children;
        let modifyTime = document.getElementById("modifyTime");
        let modify_first = document.getElementById("modify_first");
        setChangeDate(tr_Tds[0].textContent);
        modifyTime.value = tr_Tds[2].textContent;
        modify_first.value = tr_Tds[3].textContent;
    }
    const deleteRecord = async () => {
        try {
            const deleteRecordPayload = {
                "sugarId": modifySugarId
            }
            setModifySugarId("");
            await appAxios.delete(`/bloodSugar`, { data: deleteRecordPayload });
            await getUserBloodSugar();
            let modify_page = document.querySelector(".BS_modify_record");
            modify_page.classList.remove("show");
        } catch (error) {
            console.log("Server Error");
        }
    }
    const saveModify = async () => {
        try {
            let modifyTime = document.getElementById("modifyTime").value;
            let modify_first = document.getElementById("modify_first").value;
            let date = document.getElementById("date").textContent.trim();
            const targetData = userBloodSugarData.filter(a => a.sugarId === modifySugarId)[0];
            const modifyRecordPayload = {
                "sugar": modify_first,
                "datetime": `${date} ${targetData.datetime.substring(11)}`,
                "sugarId": modifySugarId,
                "timePeriod": modifyTime
            }
            await appAxios.put(`/bloodSugar`, modifyRecordPayload);
            await getUserBloodSugar();
            setModifySugarId("");
            let modify_page = document.querySelector(".BS_modify_record");
            modify_page.classList.remove("show");
        } catch (error) {
            console.log("Server Error");
        }
    }
    const setDate = (e) => {
        let time = e.target.value
        let update_y = time.slice(0, 4);
        let update_m = time.slice(5, 7);
        let update_d = time.slice(8, 10);
        let updateTime = update_y + " " + update_m + "/" + update_d;
        setChangeDate(updateTime);
    }
    function filterButton(e) {
        let choiceButton = document.querySelectorAll(".filter_button button");
        choiceButton.forEach(ele => {
            ele.classList.remove("active");
        });
        e.target.classList.add("active");
        console.log(e.target.textContent);
    }

    return (
        <div id="BS">
            <div className="BS_record">
                <div className="title">
                    <div className="title_img">
                        <img src={BloodSugar} alt=""></img>
                    </div>
                    <span>血糖紀錄</span>
                </div>
                <div className="record_input">
                    <div className="input">
                        <p>血糖</p>
                        <input id="input_first" type="text" placeholder="請輸入     " maxLength="3"></input>
                        <p className="notice">mg/dL</p>
                    </div>
                    <div className="input">
                        <p>時段</p>
                        <select id="inputTime" defaultValue="早餐前" name="inputTime">
                            <option value="早餐前">早餐前</option>
                            <option value="早餐後">早餐後</option>
                            <option value="午餐前">午餐前</option>
                            <option value="午餐後">午餐後</option>
                            <option value="晚餐前">晚餐前</option>
                            <option value="晚餐後">晚餐後</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="BS_record_button">
                <div className="submit_button">
                    <button onClick={submitRecord}>確認送出</button>
                </div>
            </div>
            <div className="BS_history">
                <div className="title">
                    <div className="title_img">
                        <img src={BloodSugar} alt=""></img>
                    </div>
                    <span>血糖歷史</span>
                </div>
                <div className="chart">

                </div>
                <div className="filter_button">
                    <button className="active" onClick={filterButton}>1週</button>
                    <button onClick={filterButton}>1個月</button>
                    <button onClick={filterButton}>3個月</button>
                    <button onClick={filterButton}>6個月</button>
                    <button onClick={filterButton}>1年</button>
                </div>
            </div>
            <div className="BS_history_browse">
                <div className="title">
                    <div className="title_img">
                        <img src={BloodSugar} alt=""></img>
                    </div>
                    <span>歷史瀏覽</span>
                </div>
                <div className="history_table">
                    <table>
                        <thead>
                            <tr>
                                <th>日期</th>
                                <th>時間</th>
                                <th>時段</th>
                                <th>血糖值</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userBloodSugarData.map(Element => (
                                <tr key={Element.sugarId} onClick={(e) => { openModifyPage(e, Element.sugarId) }}>
                                    <td>&nbsp;{Element.datetime.substring(0, 10)}</td>
                                    <td>{Element.datetime.substring(11, 16)}</td>
                                    <td>{Element.timePeriod}</td>
                                    <td>{Element.sugar}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="splitter">
                </div>
            </div>
            <div className="BS_modify_record">
                <div className="record_detail">
                    <div className="modify_title">
                        <span>記錄修改</span>
                    </div>
                    <div className="splitter">
                    </div>
                    <div className="detail">
                        <div className="detail_item">
                            <p>時間</p>
                            <span id="date">{changeDate}</span>
                            <input type="date" onChange={(e) => { setDate(e) }}></input>
                            <hr className="date_hr" />
                            <AiFillCaretDown />
                        </div>
                        <div className="detail_item">
                            <p>收縮壓</p>
                            <select id="modifyTime" name="modifyTime">
                                <option value="早餐前">早餐前</option>
                                <option value="早餐後">早餐後</option>
                                <option value="午餐前">午餐前</option>
                                <option value="午餐後">午餐後</option>
                                <option value="晚餐前">晚餐前</option>
                                <option value="晚餐後">晚餐後</option>
                            </select>
                        </div>
                        <div className="detail_item">
                            <p>舒張壓</p>
                            <input id="modify_first" type="text" maxLength="3"></input>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="delete" onClick={deleteRecord}>刪除此資料</button>
                        <button className="complete" onClick={saveModify}>修改完成</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BloodSugarPage;