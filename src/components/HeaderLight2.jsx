import './HeaderLight2.css'

export default function HeaderLight2() {
  return (
    <header id="navbar">
      <a className="logo" href="#">
        <img src="/images/logotext_nav2.svg" alt=""/>
      </a>
      <nav className="navigation">
        {/* icon btn */}
        <ul className="icon">
          <li><a href="#"><img src="/images/navicon_search.svg" alt="Search" /></a></li>
          <li><a href="#"><img src="/images/navicon_cart.svg" alt="Cart" /></a></li>
          <li><a href="#"><img src="/images/navicon_member.svg" alt="Member" /></a></li>
          <li><a href="#"><img src="/images/navicon_bgrbtn.svg" alt="Menu" /></a></li>
        </ul>
      </nav>
    </header>
  )
}
