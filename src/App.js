import React from "react";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Labo from "./pages/labo/Labo.jsx";
import Pharmacie from "./pages/pharmacie/Pharmacie.jsx";
import Patients from "./pages/patients/Patients.jsx";
import ChatPage from "./pages/ChatPage/ChatPage.jsx";
import Aipage from "./pages/Aipage/Aipage.jsx";
import QuestionPage from './pages/questionpage/QuestionPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/labo" element={<Labo />} />
              <Route path="/pharmacie" element={<Pharmacie />} />
              <Route path="/patients/*" element={<Patients />} />
              <Route path="/ChatPage/*" element={<ChatPage/>} />
              <Route path="/questionpage/*" element={<QuestionPage />} />
              <Route path="/Aipage" element={<Aipage />} />
              <Route path="/" element={<Home />} /> {/* Redirect to home if no match */}
          </Routes>
      </Router>
  );
}

export default App;
