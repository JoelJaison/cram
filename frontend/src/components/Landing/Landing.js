import  logo  from "./logo.png";
import "./Landing.css";
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-top">
        <img src={logo} className="cram-logo" />
      </div>
      <div className="landing-bottom">
        <Link to="/login">
          <button className="landing-button">Log In</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing;