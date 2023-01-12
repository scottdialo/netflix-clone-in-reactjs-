const Signin = () => {
  return (
    <div className="signin-section">
      <div className="logo-wrapper">
        <a href="/">
          <img
            src="images/logo.png"
            className="logo logo-at-sigin"
            alt="netflix-logo"
          />
        </a>
      </div>
      <div className="signin-container">
        <h1>Sign In</h1>
        <form className="signin">
          <input type="email" placeholder="Enter  your email" required />
          <input type="password" placeholder="Enter your password" required />
        </form>
        <button className="signin-btn">Sign In</button>
        <div className="remember-me-section">
          <div className="checkbox-section">
            <input type="checkbox" />
            <label for="checkbox" className="remember-me-check-box">
              Remember me
            </label>
          </div>
          <a href="/" className="need-help-signin">
            Need help?
          </a>
        </div>

        <div className="signup-section">
          <p>
            New to Netflix?{" "}
            <a href="/" className="signup-btn">
              Sign up now.
            </a>
          </p>
          <p className="recaptcha">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="/">Learn more.</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
