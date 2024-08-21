import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './comment.css';

export default function Comment({ addComment }) {
  const [comment, setComment] = useState("");

  const handleComment = () => {
    if (!comment) return;

    addComment(comment);
    setComment("");
  };

  return (
    <div className="commentSection">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Ajouter un commentaire..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleComment}
      >
        Comment
      </Button>
    </div>
  );
}
