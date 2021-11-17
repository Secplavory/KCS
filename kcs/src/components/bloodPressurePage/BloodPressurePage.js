import React, { useEffect } from "react";
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './BloodPressurePage.scss';

import { AiFillCaretDown } from "react-icons/ai";
import BloodPressure from "../../asserts/BloodPressurePage/BloodPressure.png"

function BloodPressurePage() {
    const [changeDate, setChangeDate] = useState("");
    const [modifyRow, setModifyRow] = useState();
    const location = useLocation();
    useEffect(() => {
        if(location.pathname.includes("BloodPressure")){
            console.log("BloodPressurePage")
        }
    }, [location]);
    const submitRecord = ()=>{
        var input_first = document.getElementById('input_first');
        var input_second = document.getElementById('input_second');
        var input_third = document.getElementById('input_third');
        if( input_first.value !=='' && input_second.value !=='' && input_third.value !=='' ){
            alert("送出");
            input_first.value = "";
            input_second.value = "";
            input_third.value = "";
        }
    };
    const openModifyPage = (e)=>{
        var modify_page = document.querySelector(".BP_modify_record");
        modify_page.classList.add("show");
        setModifyRow(e.target.parentNode);
        var tr_Tds = e.target.parentNode.children;
        var modify_first = document.getElementById("modify_first");
        var modify_second = document.getElementById("modify_second");
        var modify_third = document.getElementById("modify_third");
        setChangeDate(tr_Tds[0].textContent);
        modify_first.value = tr_Tds[2].textContent;
        modify_second.value = tr_Tds[3].textContent;
        modify_third.value = tr_Tds[4].textContent;
    }
    const deleteRecord = ()=>{
        modifyRow.remove();
        var modify_page = document.querySelector(".BP_modify_record");
        modify_page.classList.remove("show");
    }
    const saveModify = ()=>{
        var tr_Tds = modifyRow.children;
        var modify_first = document.getElementById("modify_first");
        var modify_second = document.getElementById("modify_second");
        var modify_third = document.getElementById("modify_third");
        var date = document.getElementById("date");
        tr_Tds[0].textContent = date.textContent;
        tr_Tds[2].textContent = modify_first.value;
        tr_Tds[3].textContent = modify_second.value;
        tr_Tds[4].textContent = modify_third.value;
        var modify_page = document.querySelector(".BP_modify_record");
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
        <div id="BP">
            <div className="BP_record">
                <div className="title">
                    <div className="title_img">
                        <img src={ BloodPressure } alt=""></img>
                    </div>
                    <span>血壓紀錄</span>
                </div>
                <div className="record_input">
                    <div className="input">
                        <p>收縮壓</p>
                        <input id="input_first" type="text" placeholder="請輸入" maxLength="3" onChange={ (e)=>{if(e.target.value.length === 3){document.getElementById('input_second').focus()}} }></input>
                    </div>
                    <div className="input">
                        <p>舒張壓</p>
                        <input id="input_second" type="text" placeholder="請輸入" maxLength="2" onChange={ (e)=>{if(e.target.value.length === 2){document.getElementById('input_third').focus()}} }></input>
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
                        <button onClick={ submitRecord }>確認送出</button>
                    </form>
                </div>
            </div>
            <div className="BP_history">
                <div className="title">
                    <div className="title_img">
                        <img src={ BloodPressure } alt=""></img>
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
                        <img src={ BloodPressure } alt=""></img>
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
                        <tbody onClick={ (e)=>{openModifyPage(e)} }>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>220</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>138</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020 10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
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
                            <span id="date">{ changeDate }</span>
                            <input type="date" onChange={ (e)=>{ setDate(e) } }></input>
                            <AiFillCaretDown />
                        </div>
                        <div className="detail_item">
                            <p>收縮壓</p>
                            <input id="modify_first" type="text" maxLength="3"></input>
                            <AiFillCaretDown />
                        </div>
                        <div className="detail_item">
                            <p>舒張壓</p>
                            <input id="modify_second" type="text" maxLength="2"></input>
                            <AiFillCaretDown />
                        </div>
                        <div className="detail_item">
                            <p>心律</p>
                            <input id="modify_third" type="text" maxLength="2"></input>
                            <AiFillCaretDown />
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
export default BloodPressurePage;