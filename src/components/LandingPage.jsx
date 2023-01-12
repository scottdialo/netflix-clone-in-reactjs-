import { Routes, Route, Link } from "react-router-dom";
import Signin from "./Signin";

export const LandingPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <div className="showcase">
        <div className="showcase-inner">
          <div className="logo-wrapper">
            <a href="/">
              <img src="images/logo.png" className="logo" alt="netflix-logo" />
            </a>
          </div>
          <div className="header-right">
            <i className="fas fa-globe globe-icon "></i>

            <select className="select-btn">
              <option selected>English</option>
              <option>Français</option>
            </select>

            <Link to="/signin">
              <button className="sign-in-btn">Sign In</button>
            </Link>
          </div>
        </div>
        <div className="showcase-content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere, Cancel anytime.</p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div>
            <input type="email" placeholder="Email address" />{" "}
            <button className="get-started-btn">
              Get Started <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
