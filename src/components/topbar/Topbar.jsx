import React from "react";
import { useNavigate } from "react-router-dom";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/home");
    };

    const handleProfileClick = () => {
        navigate("/profile");
    };
    const handleAIClick = () => {
        navigate("/aipage");
    };
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo" onClick={handleLogoClick}>MEDILINK</span>
            </div>
            <div className="topbarCentre">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friends, Post or any video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <img className="shareProfileImg" src="assets/persons/ai.png" alt="" 
        onClick={handleAIClick} />
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/persons/1.jpg" alt="" className="topbarImg" onClick={handleProfileClick} />
            </div>
        </div>
    );
}
