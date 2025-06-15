import { useEffect } from "react";
import { Link } from "react-router-dom";
import useUserStore from "../store/users";
import "../styles.css";

const UserList = () => {
  const { users, getUsers, isLoading, hasErrors } = useUserStore();

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) return (
    <div className="container">
      <div className="loading">Loading users...</div>
    </div>
  );

  if (hasErrors) return (
    <div className="container">
      <div className="error">{hasErrors.message}</div>
    </div>
  );

  return (
    <div className="users-page">
      <div className="container">
        <div className="users-header">
          <Link to="/" className="back-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="page-title">All Users</h1>
        </div>

        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-card-content">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-email">{user.email}</p>
                <p className="user-phone">{user.phone}</p>

                <div className="user-actions">
                  <Link
                    to={`/users/${user.id}`}
                    className="btn btn-primary view-details-btn"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;