import { Link } from "react-router-dom";
import "../styles.css";

const UserCard = ({ name, id, phone, email, showFullDetails }) => {
  return (
    <div className={`user-card ${showFullDetails ? 'detailed-view' : ''}`}>
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>

      {id && (
        <Link to={`/users/${id}`} className="view-details-btn">
          View Details
        </Link>
      )}
    </div>
  );
};

export default UserCard;