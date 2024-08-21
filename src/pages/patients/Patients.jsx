import React from "react";
import { Route, Routes } from 'react-router-dom';
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import PatientsList from "../../components/PatientsList/PatientsList.jsx";
import Dospat from "../../components/dospat/Dospat.jsx";
import "./patients.css";

export default function Patients() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Routes>
                    <Route path="/" element={<PatientsList />} />
                    <Route path=":id" element={<Dospat />} />
                </Routes>
                <Rightbar profile/>
            </div>
        </>
    );
}
