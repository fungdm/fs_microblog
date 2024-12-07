// src/components/PostList.js
function PostList({ posts }) {
    return (
      <div className="post-list">
        {posts.length === 0 ? (
          <p>No posts to show.</p>
        ) : (
          posts.map((post, index) => (
            <div className="post" key={index}>
              <p><strong>{post.user}</strong>: {post.content}</p>
            </div>
          ))
        )}
      </div>
    );
  }
  
  export default PostList;
  