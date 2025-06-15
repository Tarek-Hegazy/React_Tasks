import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useUserStore from "../store/users";
import "../styles.css";

const SingleUserPage = () => {
  const { userID } = useParams();
  const { getUser, user, isLoading, hasErrors, clearUser } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    getUser(userID);
    return () => clearUser();
  }, [userID, getUser, clearUser]);

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading user details...</p>
    </div>
  );

  if (hasErrors) return (
    <div className="error-container">
      <div className="error-icon">!</div>
      <h3>{hasErrors.message}</h3>
      <button onClick={handleBack} className="btn btn-primary">
        Go Back
      </button>
    </div>
  );

  return (
    <div className="user-page">
      <div className="container">
        <div className="user-profile">
          <div className="profile-header">
            <button onClick={handleBack} className="back-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Users
            </button>
            <h1 className="profile-title">User Details</h1>
          </div>

          {user && (
            <>
              <div className="profile-content">
                <div className="profile-main">
                  <div className="profile-section">
                    <h2 className="profile-name">{user.name}</h2>
                    <div className="profile-contact">
                      <div className="contact-item">
                        <span className="contact-label">Email:</span>
                        <span>{user.email}</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-label">Phone:</span>
                        <span>{user.phone}</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-label">Website:</span>
                        {user.website ? (
                          <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
                            {user.website}
                          </a>
                        ) : "N/A"}
                      </div>
                    </div>
                  </div>

                  <Link to="/" className="btn btn-primary home-link">
                    Back to Home
                  </Link>
                </div>

                <div className="profile-details">
                  <div className="detail-section">
                    <h3 className="section-title">Address</h3>
                    <div className="detail-item">
                      <span className="detail-label">Street:</span>
                      <span>{user.address?.street || "N/A"}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">City:</span>
                      <span>{user.address?.city || "N/A"}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Zipcode:</span>
                      <span>{user.address?.zipcode || "N/A"}</span>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3 className="section-title">Company</h3>
                    <div className="detail-item">
                      <span className="detail-label">Name:</span>
                      <span>{user.company?.name || "N/A"}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Business:</span>
                      <span>{user.company?.bs || "N/A"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;