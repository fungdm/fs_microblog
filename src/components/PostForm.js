// src/components/PostForm.js
import React, { useState } from "react";

function PostForm({ addPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content);
      setContent("");
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
        rows="3"
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;
