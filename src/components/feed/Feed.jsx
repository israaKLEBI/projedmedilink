import React, { useState } from 'react';
import "./feed.css";
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts } from "../../dummyData";

export default function Feed() {
  const [posts, setPosts] = useState(Posts);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share addPost={addPost} />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
