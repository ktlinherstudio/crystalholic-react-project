import './HeaderBg.css'

export default function HeaderBg() {
  return (

    <div className="header-wrapper">
      <div className="header-background"></div>

      <header className="header">
        <div className="logo">
          <a href="#">
            <img src="/images/S-NavBar/logotext_nav.svg" alt="Logo" />
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#"><img src="/images/S-NavBar/navicon_search.svg" alt="Search" /></a></li>
            <li><a href="#"><img src="/images/S-NavBar/navicon_cart.svg" alt="Cart" /></a></li>
            <li><a href="#"><img src="/images/S-NavBar/navicon_member.svg" alt="Member" /></a></li>
            <li><a href="#"><img src="/images/S-NavBar/navicon_bgrbtn.svg" alt="Menu" /></a></li>
          </ul>
        </nav>
      </header>
    </div>

  )
}
