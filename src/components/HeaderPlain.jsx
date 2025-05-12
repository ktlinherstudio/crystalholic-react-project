import './HeaderPlain.css'

export default function HeaderPlain() {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">
          <img src="/images/logotext_nav.svg" alt="Logo" />
        </a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#"><img src="/images/navicon_search.svg" alt="Search" /></a></li>
          <li><a href="#"><img src="/images/navicon_cart.svg" alt="Cart" /></a></li>
          <li><a href="#"><img src="/images/navicon_member.svg" alt="Member" /></a></li>
          <li><a href="#"><img src="/images/navicon_bgrbtn.svg" alt="Menu" /></a></li>
        </ul>
      </nav>
    </header>
  )
}
