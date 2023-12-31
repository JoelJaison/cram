import oski from "./oski.jpeg";
import "./UserPage.css";
import plus from "./plus.png";
import { Link } from "react-router-dom";
const UserPage = () => {
  const sessionNames = ["first", "second", "third", "fourth"];

  

  return (
    <div className="user-wrapper">
      <div className="user-sidebar">
        <img src={oski} className="user-profile" />
        <div className="session-names">
			<div className="session-name-block session-name-header">
				<p>Sessions</p>
			</div>
          {sessionNames.map((name) => {
            return (<div className="session-name-block">
				<p>{name}</p>
			</div>);
          })}
        </div>
      </div>
      <div className="user-main-section">
        <div className="user-search">
			<input className="user-input" placeholder="Search..." />
		</div>
    <Link to="/chat/123/123/">
        <button className="user-start-button">Start ChatBot</button>
    </Link>
        <div className="user-document-section">documents!</div>
        <img src={plus} />
      </div>
    </div>
  );
};

export default UserPage;
