import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import './BloodPressurePage.scss';

import BloodPressure from "../../asserts/BloodPressurePage/BloodPressure.png"

function BloodPressurePage() {
    const location = useLocation();
    useEffect(() => {
        if(location.pathname.includes("BloodPressure")){
            console.log("BloodPressurePage")
        }
    }, [location]);

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
                        <input type="text" placeholder="請輸入"></input>
                    </div>
                    <div className="input">
                        <p>舒張壓</p>
                        <input type="text" placeholder="請輸入"></input>
                    </div>
                    <div className="input">
                        <p>心律</p>
                        <input type="text" placeholder="請輸入"></input>
                    </div>
                </div>
            </div>
            <div className="BP_record_button">
                <div className="submit_button">
                    <form>
                        <button onClick={ ()=>{ alert("送出"); } }>確認送出</button>
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
                        <tbody>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>220</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
                                <td>12：40</td>
                                <td>139</td>
                                <td>89</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>2020<br/>10/05</td>
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
        </div>
    );
}
export default BloodPressurePage;