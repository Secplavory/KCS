import React from "react";
import appAxios from "../../appAxios.js"
import { useState, useEffect, useCallback } from 'react'
import './BloodPressurePage.scss';

import { AiFillCaretDown } from "react-icons/ai";
import BloodPressure from "../../asserts/BloodPressurePage/BloodPressure.png"

function BloodPressurePage(props) {
    const [userBloodPressureData, setUserBloodPressureData] = useState([]);
    const [changeDate, setChangeDate] = useState("");
    const [modifyRow, setModifyRow] = useState();
    const getUserBloodPressure = useCallback(async () => {
        try {
            const result = appAxios.get(`/getUserBloodPressure?userId=${props.userId}&page=1&limit=15`)
            setUserBloodPressureData((await result).data.bloodPressureList)
        } catch (error) {
            console.log("Server Error")
        }
    }, [props, setUserBloodPressureData]);
    useEffect(() => {
        getUserBloodPressure();
        setTimeout(() => {
            props.setIsShowing(false)
        }, 500);
    }, [props, getUserBloodPressure]);
    const saveRecord = async (input_first, input_second, input_third) => {
        let currentDateTime = new Date().toLocaleString('zh-TW', { hour12: false });
        console.log(currentDateTime, input_first, input_second, input_third)
        try {
            const saveRecordPayload = {
                "sbp": input_first,
                "dbp": input_second,
                "map": input_third,
                "datetime": currentDateTime,
            }
            const result = appAxios.post(`/bloodPressure`, saveRecordPayload)
            console.log(await (result))
        } catch (error) {
            console.log("Server Error")
        }
    }
    const submitRecord = async (e) => {
        e.preventDefault();
        let input_first = document.getElementById('input_first').value;
        let input_second = document.getElementById('input_second').value;
        let input_third = document.getElementById('input_third').value;
        if (input_first !== '' && input_second !== '' && input_third !== '') {
            alert("送出");
            await saveRecord(input_first, input_second, input_third);
            input_first = "";
            input_second = "";
            input_third = "";
        } else {
            alert("請確切填寫欄位");
        }
    };
    const openModifyPage = (e) => {
        let modify_page = document.querySelector(".BP_modify_record");
        modify_page.classList.add("show");
        setModifyRow(e.target.parentNode);
        let tr_Tds = e.target.parentNode.children;
        let modify_first = document.getElementById("modify_first");
        let modify_second = document.getElementById("modify_second");
        let modify_third = document.getElementById("modify_third");
        setChangeDate(tr_Tds[0].textContent);
        modify_first.value = tr_Tds[2].textContent;
        modify_second.value = tr_Tds[3].textContent;
        modify_third.value = tr_Tds[4].textContent;
    }
    const deleteRecord = () => {
        modifyRow.remove();
        let modify_page = document.querySelector(".BP_modify_record");
        modify_page.classList.remove("show");
    }
    const saveModify = () => {
        let tr_Tds = modifyRow.children;
        let modify_first = document.getElementById("modify_first");
        let modify_second = document.getElementById("modify_second");
        let modify_third = document.getElementById("modify_third");
        let date = document.getElementById("date");
        tr_Tds[0].textContent = date.textContent;
        tr_Tds[2].textContent = modify_first.value;
        tr_Tds[3].textContent = modify_second.value;
        tr_Tds[4].textContent = modify_third.value;
        let modify_page = document.querySelector(".BP_modify_record");
        modify_page.classList.remove("show");
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
        <div id="BP">
            <div className="BP_record">
                <div className="title">
                    <div className="title_img">
                        <img src={BloodPressure} alt=""></img>
                    </div>
                    <span>血壓紀錄</span>
                </div>
                <div className="record_input">
                    <div className="input">
                        <p>收縮壓</p>
                        <input id="input_first" type="text" placeholder="請輸入" maxLength="3" onChange={(e) => { if (e.target.value.length === 3) { document.getElementById('input_second').focus() } }}></input>
                    </div>
                    <div className="input">
                        <p>舒張壓</p>
                        <input id="input_second" type="text" placeholder="請輸入" maxLength="2" onChange={(e) => { if (e.target.value.length === 2) { document.getElementById('input_third').focus() } }}></input>
                    </div>
                    <div className="input">
                        <p>心律</p>
                        <input id="input_third" type="text" placeholder="請輸入" maxLength="2"></input>
                    </div>
                </div>
            </div>
            <div className="BP_record_button">
                <div className="submit_button">
                    <form>
                        <button onClick={(e) => { submitRecord(e) }}>確認送出</button>
                    </form>
                </div>
            </div>
            <div className="BP_history">
                <div className="title">
                    <div className="title_img">
                        <img src={BloodPressure} alt=""></img>
                    </div>
                    <span>血壓歷史</span>
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
            <div className="BP_history_browse">
                <div className="title">
                    <div className="title_img">
                        <img src={BloodPressure} alt=""></img>
                    </div>
                    <span>歷史瀏覽</span>
                </div>
                <div className="history_table">
                    <table>
                        <thead>
                            <tr>
                                <th>日期</th>
                                <th>時間</th>
                                <th>收縮壓</th>
                                <th>舒張壓</th>
                                <th>心律</th>
                            </tr>
                        </thead>
                        <tbody onClick={(e) => { openModifyPage(e) }}>
                            {userBloodPressureData.map(Element => (
                                <tr key={Element.pressureId}>
                                    <td>{Element.datetime.substring(0, 10)}</td>
                                    <td>{Element.datetime.substring(11, 16)}</td>
                                    <td>{Element.sbp}</td>
                                    <td>{Element.dbp}</td>
                                    <td>{Element.map}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="splitter">
                </div>
            </div>
            <div className="BP_modify_record">
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
                            <input id="modify_first" type="text" maxLength="3"></input>
                        </div>
                        <div className="detail_item">
                            <p>舒張壓</p>
                            <input id="modify_second" type="text" maxLength="2"></input>
                        </div>
                        <div className="detail_item">
                            <p>心律</p>
                            <input id="modify_third" type="text" maxLength="2"></input>
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
export default BloodPressurePage;