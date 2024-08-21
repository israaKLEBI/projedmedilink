import React from 'react'
import "./profile.css"
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profilerightTop">
                        <img className='profileUserImg' src="assets/persons/4.jpg" alt="" />
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Israa KLEBI</h4>
                        </div>
                        <div className="profileButtons">
                            <button className="profileButton">Information Personnel</button>
                            <button className="profileButton">My Events</button>
                        </div>
                    </div>
                    <div className="profilerightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
