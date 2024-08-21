import React from 'react'
import "./labo.css"
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import LabList from "../../components/lablist/LabList.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";


export default function Labo() {
    return (
       
        <>
        <Topbar />
        <div className="profile">
            <Sidebar />
           
            <div className="profileRight">
               
                <div className="profilerightBottom">
                
                    <LabList/>
                    <Rightbar profile/>
                   
                </div>
                
            </div>
        </div>
    </>
)
    
}
