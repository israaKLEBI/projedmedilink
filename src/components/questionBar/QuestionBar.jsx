import React, { useState } from 'react';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import './questionBar.css';

export default function QuestionBar({ addQuestion }) {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      resizeImage(file, 100, 150, (resizedDataUrl) => {
        setFile(resizedDataUrl);
      });
    }
  };

  const resizeImage = (file, maxWidth, maxHeight, callback) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = maxWidth;
        canvas.height = maxHeight;
        ctx.drawImage(img, 0, 0, maxWidth, maxHeight);
        const dataUrl = canvas.toDataURL('image/jpeg');
        callback(dataUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handlePost = () => {
    if (!content && !file) return;

    const newQuestion = {
      id: Date.now(),
      content: content,
      photo: file,
      comments: [],
      user: {
        name: 'Israa Klebi',
        profilePicture: 'path/to/profilePicture.jpg'
      }
    };
    addQuestion(newQuestion);
    setContent("");
    setFile(null);
  };

  return (
    <div className="questionBar">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Posez votre question..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary" component="label">
                <PhotoCamera />
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary" onClick={handlePost}>
        Post
      </Button>
    </div>
  );
}
