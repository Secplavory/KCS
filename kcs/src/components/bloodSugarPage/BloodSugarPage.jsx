import React, { useEffect } from "react";
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './BloodSugarPage.scss';

import { AiFillCaretDown } from "react-icons/ai";
import BloodSugar from "../../asserts/BloodSugarPage/BloodSugar.png"

function BloodSugarPage() {
    const [changeDate, setChangeDate] = useState("");
    const [modifyRow, setModifyRow] = useState();
    const location = useLocation();
    useEffect(() => {
        if(location.pathname.includes("BloodSugar")){
            console.log("BloodSugarPage")
        }
    }, [location]);
    const submitRecord = ()=>{
        var input_first = document.getElementById('input_first');
        var inputTime = document.getElementById('inputTime');
        if( input_first.value !== '' && inputTime.value !== 'none'){
            alert("送出");
            input_first.value = "";
            inputTime.value = "";
        }else{
            alert("請輸入資料！");
        }
    };
    const openModifyPage = (e)=>{
        var modify_page = document.querySelector(".BS_modify_record");
        modify_page.classList.add("show");
        setModifyRow(e.target.parentNode);
        var tr_Tds = e.target.parentNode.children;
        var modifyTime = document.getElementById("modifyTime");
        var modify_first = document.getElementById("modify_first");
        setChangeDate(tr_Tds[0].textContent);
        modifyTime.value = tr_Tds[2].textContent;
        modify_first.value = tr_Tds[3].textContent;
    }
    const deleteRecord = ()=>{
        modifyRow.remove();
        var modify_page = document.querySelector(".BS_modify_record");
        modify_page.classList.remove("show");
    }
    const saveModify = ()=>{
        var tr_Tds = modifyRow.children;
        var modifyTime = document.getElementById("modifyTime");
        var modify_first = document.getElementById("modify_first");
        var date = document.getElementById("date");
        tr_Tds[0].textContent = date.textContent;
        tr_Tds[2].textContent = modifyTime.value;
        tr_Tds[3].textContent = modify_first.value;
        var modify_page = document.querySelector(".BS_modify_record");
        modify_page.classList.remove("show");
    }
    const setDate = (e)=>{
        var time = e.target.value
        var update_y = time.slice(0,4);
        var update_m = time.slice(5,7);
        var update_d = time.slice(8,10);
        var updateTime = update_y + " " + update_m + "/" + update_d;
        setChangeDate(updateTime);
    }
    function filterButton(e){
        var choiceButton = document.querySelectorAll(".filter_button button");
        choiceButton.forEach(ele=>{
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
                        <img src={ BloodSugar } alt=""></img>
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
                        <button onClick={ submitRecord }>確認送出</button>
                </div>
            </div>
            <div className="BS_history">
                <div className="title">
                    <div className="title_img">
                        <img src={ BloodSugar } alt=""></img>
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
                        <img src={ BloodSugar } alt=""></img>
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
                        <tbody onClick={ (e)=>{openModifyPage(e)} }>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐前</td>
                                <td>89</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐後</td>
                                <td>140</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐前</td>
                                <td>89</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐前</td>
                                <td>89</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐後</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐前</td>
                                <td>89</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐前</td>
                                <td>89</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐後</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐前</td>
                                <td>89</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐前</td>
                                <td>89</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐後</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐後</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>午餐前</td>
                                <td>89</td>
                            </tr>
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
                            <span id="date">{ changeDate }</span>
                            <input type="date" onChange={ (e)=>{ setDate(e) } }></input>
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
                        <button className="delete" onClick={ deleteRecord }>刪除此資料</button>
                        <button className="complete" onClick={ saveModify }>修改完成</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BloodSugarPage;