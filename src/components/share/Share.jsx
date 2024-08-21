import React, { useState } from 'react';
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share({ addPost }) {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleShare = () => {
    if (!content && !file) return;

    const newPost = {
      id: Date.now(),
      desc: content,
      photo: file ? URL.createObjectURL(file) : "",
      date: "Just now",
      userId: 1,
      like: 0,
      comment: 0,
    };
    addPost(newPost);
    setContent("");
    setFile(null); // Réinitialiser le fichier après le partage
  };

  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProfileImg' src="assets/persons/1.jpg" alt="" />
          <input
            placeholder="What's in your mind?"
            className='shareInput'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <hr />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <button className="shareCancelImg" onClick={() => setFile(null)}>Remove</button>
          </div>
        )}
        <div className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor='rgba(76, 198, 246, 0.673)' className='shareIcon' />
              <span className="shareOptionText"></span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={handleFileChange}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor='rgba(76, 198, 246, 0.673)' className='shareIcon' />
              <span className="shareOptionText"></span>
            </div>
            <div className="shareOption">
              <Room htmlColor='rgba(76, 198, 246, 0.673)' className='shareIcon' />
              <span className="shareOptionText"></span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor='rgba(76, 198, 246, 0.673)' className='shareIcon' />
              <span className="shareOptionText"></span>
            </div>
          </div>
          <button className='shareButton' onClick={handleShare}>Share</button>
        </div>
      </div>
    </div>
  );
}
