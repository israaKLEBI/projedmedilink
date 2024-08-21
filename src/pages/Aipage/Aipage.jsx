import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import "./aipage.css";

export default function Aipage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000000000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Topbar />
            <div className="aipageContainer">
                <Sidebar />
                <div className="aipageContent">
                    <img src="assets/persons/ai.png" alt="AI" className="aiImage" />
                    {loading && (
                        <div className="loadingSymbol"></div>
                    )}
                </div>
            </div>
        </>
    );
}
