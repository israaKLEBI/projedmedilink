
import React, { useState } from 'react';
import Comment from '../../components/comment/Comment';
import './questionpost.css';


export default function QuestionPost({ question }) {
  const [comments, setComments] = useState(question.comments);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="questionPost">
      <div className="postHeader">
        <img 
          className="profileImg" 
          src="/assets/persons/1.jpg" 
          alt="Profile" 
        />
        <span className="username">Israa Klebi</span>
      </div>
      <div className="questionContent">
        {question.content}
        {question.photo && (
          <img src={question.photo} alt="Question" className="questionPhoto" />
        )}
      </div>
      <Comment addComment={addComment} />
      <div className="commentsList">
        {comments.map((c, index) => (
          <div key={index} className="comment">
            <div className="commentHeader">
              <img 
                className="profileImg" 
                src="/assets/persons/1.jpg" 
                alt="Profile" 
              />
              <span className="username">Israa Klebi</span>
            </div>
            <span>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
