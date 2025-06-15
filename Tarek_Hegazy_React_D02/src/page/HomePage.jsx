import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import UserCard from "../components/UserCard";
import useUserStore from "../store/users";
import "../styles.css";

const MAX_SEARCH_PARAMS = 3;

const HomePage = () => {
  const [searchParams, setSearchParams] = useState([{ field: "name", value: "" }]);
  const { searchUsers, user, hasErrors, isLoading, clearUser } = useUserStore();
  const location = useLocation();
  useEffect(() => {
    if (location.state?.clearSearch) {
      clearUser();
    }
  }, [location, clearUser]);

  const handleSearch = async (index, e) => {
    const value = e.target.value;
    const newParams = [...searchParams];
    newParams[index].value = value;
    setSearchParams(newParams);

    const searchCriteria = {};
    newParams.forEach(param => {
      if (param.value.trim() !== "") {
        searchCriteria[param.field] = param.value.trim();
      }
    });

    if (Object.keys(searchCriteria).length > 0) {
      await searchUsers(searchCriteria);
    } else {
      clearUser();
    }
  };

  const handleFieldChange = (index, e) => {
    const newParams = [...searchParams];
    newParams[index].field = e.target.value;
    setSearchParams(newParams);
    clearUser();
  };

  const addSearchField = () => {
    if (searchParams.length < MAX_SEARCH_PARAMS) {
      setSearchParams([...searchParams, { field: "name", value: "" }]);
    }
  };

  const removeSearchField = (index) => {
    if (searchParams.length > 1) {
      const newParams = [...searchParams];
      newParams.splice(index, 1);
      setSearchParams(newParams);
      clearUser();
    }
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="search-container">
          <div className="search-header">
            <h1 className="search-title">User Search</h1>
            <p className="search-subtitle">Enter exact values to search</p>
          </div>

          {searchParams.map((param, index) => (
            <div key={index} className="search-row">
              <select
                value={param.field}
                onChange={(e) => handleFieldChange(index, e)}
                className="search-select"
              >
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>

              <input
                type="search"
                value={param.value}
                onChange={(e) => handleSearch(index, e)}
                placeholder={`Enter exact ${param.field}`}
                className="search-input"
              />

              {searchParams.length > 1 && (
                <button
                  onClick={() => removeSearchField(index)}
                  className="btn btn-danger"
                >
                  X
                </button>
              )}
            </div>
          ))}

          {searchParams.length < MAX_SEARCH_PARAMS && (
            <button onClick={addSearchField} className="btn btn-outline">
              Add Search Field ({MAX_SEARCH_PARAMS - searchParams.length} remaining)
            </button>
          )}
        </div>

        {isLoading && <div className="loading">Searching...</div>}
        {hasErrors && <div className="error">{hasErrors.message}</div>}

        {user && (
          <div className="result-card">
            <div className="result-header">
              <h2 className="result-title">Matching User</h2>
            </div>
            <div className="user-info">
              <div className="user-main">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-contact">Email: {user.email}</p>
                <p className="user-contact">Phone: {user.phone}</p>
              </div>
              <Link
                to={`/users/${user.id}`}
                state={{ fromSearch: true }}
                className="btn btn-primary details-btn"
              >
                View Details
              </Link>
            </div>
          </div>
        )}

        <div className="action-buttons">
          <Link to="/users" className="btn btn-primary">
            View All Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;