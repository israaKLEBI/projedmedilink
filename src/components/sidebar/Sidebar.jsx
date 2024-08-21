import React from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
//import {RssFeed,Chat, PlayCircleFilledOutlined,Group,Bookmark,
//      HelpOutline,WorkOutline,Event,School} from '@mui/icons-material'

import {
  People as PatientsIcon,
  Description as MedicalRecordsIcon,
  Message as MessagesIcon,
  CalendarToday as AppointmentsIcon,
  LocalPharmacy as MedicineIcon,
  LocalHospital as PharmacyIcon,
  Science as AnalysisLabIcon,
  Help as MedicalQuestionsIcon,
  ContactSupport as HelpCenterIcon,
  Policy as PrivacyPolicyIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';



export default function Sidebar() {
 
    const navigate = useNavigate();
  
    const handleLaboClick = () => {
      navigate("/Labo");
      
  };
  const handlePharmacieClick = () => {
    navigate("/Pharmacie");
    
};
  const handlePatientsClick = () => {
    navigate("/Patients");
    
};
  const handleQuestionClick = () => {
   navigate("/QuestionPage");
  
};
const handleChatClick = () => {
  navigate("/ChatPage");
 
};
    
  
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <button className="sidebarButton" onClick={() => handlePatientsClick("/Patients")}>
              <PatientsIcon className='sidebarIcon' />
              <span className="sidebarListItemText">My patients</span>
            </button>
          </li>
          <li className="sidebarListItem">
            <button className="sidebarButton">
              <MedicalRecordsIcon className='sidebarIcon' />
              <span className="sidebarListItemText">Medical Records</span>
            </button>
          </li>
          <li className="sidebarListItem">
            <button className="sidebarButton" onClick={() => handleChatClick("/ChatPage")}>
              <MessagesIcon className='sidebarIcon' />
              <span className="sidebarListItemText">Messages</span>
            </button>
          </li>
          <li className="sidebarListItem">
            <button className="sidebarButton">
              <AppointmentsIcon className='sidebarIcon' />
              <span className="sidebarListItemText">My appointments</span>
            </button>
          </li>
          <li className="sidebarListItem">
            <button className="sidebarButton">
              <MedicineIcon className='sidebarIcon' />
              <span className="sidebarListItemText">Medicine</span>
            </button>
          </li>
          <li className="sidebarListItem">
            <button className="sidebarButton"onClick={() => handlePharmacieClick("/Pharmacie")}>
              <PharmacyIcon className='sidebarIcon' />
              <span className="sidebarListItemText">Pharmacy</span>
            </button>
          </li>
          <li className="sidebarListItem">
          <button className="sidebarButton" onClick={() => handleLaboClick("/labo")}>
              <AnalysisLabIcon className='sidebarIcon' />
              <span className="sidebarListItemText">Analysis lab</span>
            </button>
          </li>
          <li className="sidebarListItem">
            <button className="sidebarButton"  onClick={() => handleQuestionClick("/QuestionPage")}>
              <MedicalQuestionsIcon className='sidebarIcon' />
              <span className="sidebarListItemText">Medical questions</span>
            </button>
          </li>
          <li className="sidebarListItem">
            <button className="sidebarButton">
              <HelpCenterIcon className='sidebarIcon' />
              <span className="sidebarListItemText">Help Center</span>
            </button>
          </li>
          <li className="sidebarListItem">
            <button className="sidebarButton">
              <PrivacyPolicyIcon className='sidebarIcon' />
              <span className="sidebarListItemText">Privacy & Policy</span>
            </button>
          </li>
          <li className="sidebarListItem">
            <button className="sidebarButton">
              <SettingsIcon className='sidebarIcon' />
              <span className="sidebarListItemText">Settings</span>
            </button>
          </li>
        </ul>
        
      </div>
    </div>
  );
}
