function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="logo">
          Classified<span>.ng</span>
        </a>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products, services, properties..."
          />
          <button>Search</button>
        </div>

        <nav className="nav-links">
          <a href="#">Categories</a>
          <a href="#">Sell</a>
          <a href="#">♡</a>
          <a href="#">🔔</a>
          <a href="#">Sign In</a>
          <button className="join-btn">Join Now</button>
        </nav>

      </div>
    </header>
  )
}

export default Navbar