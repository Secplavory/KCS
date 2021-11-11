import React, { useRef, useEffect, useCallback } from "react";
import { useLocation } from 'react-router-dom';
import './SearchPage.scss';

function SearchPage() {
    const ref = useRef();
    const location = useLocation();
    const handleScroll = useCallback(() => {
        var bottom = document.querySelector("#SP .bottom");
        var bottom_y = bottom.getBoundingClientRect().y;
        var viewport_height = window.innerHeight;
        var declare_height = viewport_height - bottom_y;
        bottom.style.height = declare_height.toString() + "px";
    }, []);
    useEffect(() => {
        const div = ref.current;
        div.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        if(location.pathname.includes("Search")){
            handleScroll();
        }
    }, [location, handleScroll]);
    const filterButton = (e)=>{
        var button_list = document.querySelectorAll("#SP .search_choice");
        button_list.forEach(element=>{
            element.classList.remove("active");
        })
        var target = e.target;
        while(!target.classList.contains('search_choice')){
        target = target.parentElement;
        }
        target.classList.add('active');
    }
    return (
        <div id="SP">
            <div className="search_scrollbar">
                <div className="search_choice" onClick={ (e)=>filterButton(e) }><span>腎臟病第1期</span></div>
                <div className="search_choice" onClick={ (e)=>filterButton(e) }><span>腎臟病第2期</span></div>
                <div className="search_choice" onClick={ (e)=>filterButton(e) }><span>腎臟病第3期</span></div>
                <div className="search_choice" onClick={ (e)=>filterButton(e) }><span>腎臟病第4期</span></div>
                <div className="search_choice" onClick={ (e)=>filterButton(e) }><span>腎臟病第5期</span></div>
            </div>
            <div className="bottom" ref={ ref }>
                <div className="post_area">
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                </div>
            </div>
        </div>
    );
}
export default SearchPage;