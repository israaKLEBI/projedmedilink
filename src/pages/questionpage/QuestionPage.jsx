import React, { useState } from 'react';
import QuestionBar from '../../components/questionBar/QuestionBar';
import QuestionPost from '../../components/questionpost/QuestionPost';
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import './questionpage.css';

export default function QuestionPage() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([question, ...questions]);
  };

  return (
    <>
      <Topbar />
      <div className="questionPageContainer">
        <Sidebar />
        <div className="questionPage">
          <QuestionBar addQuestion={addQuestion} />
          <div className="questionsList">
            {questions.map((q, index) => (
              <QuestionPost key={index} question={q} />
            ))}
          </div>
        </div>
        <Rightbar profile />
      </div>
    </>
  );
}
