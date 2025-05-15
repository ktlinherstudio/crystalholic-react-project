import './NavBarDark.css'

export default function NavBarDark() {
  return (
    <header id="navbar">
      <a className="logo" href="#">
        <img src="/images/S-NavBar/logotext_nav2.svg" alt=""/>
      </a>
      <nav className="navigation">
        {/* icon btn */}
        <ul className="icon">
          <li><a href="#"><img src="/images/S-NavBar/navicon_search.svg" alt="Search" /></a></li>
          <li><a href="#"><img src="/images/S-NavBar/navicon_cart.svg" alt="Cart" /></a></li>
          <li><a href="#"><img src="/images/S-NavBar/navicon_member.svg" alt="Member" /></a></li>
          <li><a href="#"><img src="/images/S-NavBar/navicon_bgrbtn.svg" alt="Menu" /></a></li>
        </ul>
      </nav>
    </header>
  )
}
