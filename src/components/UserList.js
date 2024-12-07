// src/components/UserList.js
function UserList({ users, followUser }) {
    return (
      <div className="user-list">
        <h2>Follow Users</h2>
        {users.map((user) => (
          <div key={user.username} className="user">
            <p>{user.username}</p>
            <button onClick={() => followUser(user.username)}>Follow</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default UserList;
  