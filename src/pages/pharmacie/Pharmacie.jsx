
import React from 'react'
import "./pharmacie.css"
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Pharmalist from "../../components/pharmalist/Pharmalist.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";


export default function Pharmacie() {
    return (
       
        <>
        <Topbar />
        <div className="profile">
            <Sidebar />
           
            <div className="profileRight">
               
                <div className="profilerightBottom">
                
                    <Pharmalist/>
                    <Rightbar profile/>
                   
                </div>
                
            </div>
        </div>
    </>
)
    
}
