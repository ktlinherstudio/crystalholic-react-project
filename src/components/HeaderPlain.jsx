import './HeaderPlain.css'

export default function HeaderPlain() {
  return (
    <header className="header1">
      <div className='header-content1'>
      <div className="logo-header">
        <a href="#">
           <img src="/images/S-NavBar/logotext_nav2.svg" alt="Logo" />
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
      </div>
    </header>
  )
}
