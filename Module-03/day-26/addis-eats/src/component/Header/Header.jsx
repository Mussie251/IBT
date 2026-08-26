function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
          <h1>Addis Eats</h1>
          <p>Discover the taste of Ethiopia</p>
        </div>

        <nav className="nav">
          <a href="#menu">Menu</a>
          <a href="#special">Special</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;