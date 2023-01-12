const Header = () => {
  return (
    <div>
      <div className="header">
        <button className="new-label">new!</button>
        <p>Plans now start at</p>
        <span className="price">$6.99</span>.
        <a href="/" className="learn-more">
          Learn More
          <i className="fas fa-chevron-right btn-arrow"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
