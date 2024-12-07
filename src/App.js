// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([
    { username: "User1" },
    { username: "User2" },
    { username: "User3" },
  ]);
  const [following, setFollowing] = useState(["User1"]);

  const addPost = (content) => {
    setPosts([{ user: "You", content }, ...posts]);
  };

  const followUser = (username) => {
    if (!following.includes(username)) {
      setFollowing([...following, username]);
    }
  };

  const visiblePosts = posts.filter((post) =>
    following.includes(post.user) || post.user === "You"
  );

  return (
    <div className="App">
      <Header />
      <PostForm addPost={addPost} />
      <div className="main-content">
        <PostList posts={visiblePosts} />
        <UserList users={users} followUser={followUser} />
      </div>
    </div>
  );
}

export default App;

