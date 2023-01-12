export const Faqs = () => {
  return (
    <div className="faqs-wrapper">
      <div className="faqs-container">
        <h1>Frequently Asked Questions</h1>
      </div>

      {/* get started container */}
      <div className="get-started-footer">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input type="email" placeholder="Email address" />{" "}
        <button className="get-started-btn">
          Get Started <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};
