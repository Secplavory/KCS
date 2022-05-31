// import React, { useState, useRef, useEffect, useCallback } from "react";
import './LoadingScreen.scss';

import loadingScreen from '../../asserts/spinner.gif'

function LoadingScreen(props) {
    return (
        <div className={`loadingScreen ${props.isShowing ? "active" : ""}`} >
            <div className="loadingImg">
                <img src={loadingScreen} alt="" />
            </div>
        </div>
    );
}
export default LoadingScreen;