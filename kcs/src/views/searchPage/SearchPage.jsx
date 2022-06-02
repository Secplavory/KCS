import React, { useState, useRef, useEffect, useCallback } from "react";
import appAxios from "../../appAxios.js"
import { useLocation } from 'react-router-dom';
import './SearchPage.scss';

function SearchPage(props) {
    const [allUserTwitterData, setAllUserTwitterData] = useState([]);
    const ref = useRef();
    const location = useLocation();
    const handleScroll = useCallback(() => {
        var bottom = document.querySelector("#SP .bottom");
        var bottom_y = bottom.getBoundingClientRect().y;
        var viewport_height = window.innerHeight;
        var declare_height = viewport_height - bottom_y - 61;
        bottom.style.height = declare_height.toString() + "px";
    }, []);
    const getAllUserTwitter = useCallback(async () => {
        try {
            const result = appAxios.get(`getAllTwitter?page=1&limit=15`);
            setAllUserTwitterData((await result).data['twitterList']);
        }
        catch (error) {
            alert("Server Error!");
        }
    }, []);
    useEffect(() => {
        const div = ref.current;
        div.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        if (location.pathname.includes("Search")) {
            handleScroll();
        }
        getAllUserTwitter();
        setTimeout(() => {
            props.setIsShowing(false)
        }, 1000);
    }, [props, location, handleScroll, getAllUserTwitter]);
    const filterButton = (e) => {
        var button_list = document.querySelectorAll("#SP .search_choice");
        button_list.forEach(element => {
            element.classList.remove("active");
        })
        var target = e.target;
        while (!target.classList.contains('search_choice')) {
            target = target.parentElement;
        }
        target.classList.add('active');
    }
    return (
        <div id="SP">
            <div className="search_scrollbar">
                <div className="search_choice active" onClick={(e) => filterButton(e)}><span>腎臟病第1期</span></div>
                <div className="search_choice" onClick={(e) => filterButton(e)}><span>腎臟病第2期</span></div>
                <div className="search_choice" onClick={(e) => filterButton(e)}><span>腎臟病第3期</span></div>
                <div className="search_choice" onClick={(e) => filterButton(e)}><span>腎臟病第4期</span></div>
                <div className="search_choice" onClick={(e) => filterButton(e)}><span>腎臟病第5期</span></div>
            </div>
            <div className="bottom" ref={ref}>
                <div className="post_area">
                    {allUserTwitterData.map(Element => (
                        <div className="post" key={Element.twitterId}>
                            <img src={Element.imagesrc} alt="" />
                        </div>
                    ))}
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