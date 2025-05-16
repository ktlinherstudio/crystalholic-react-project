import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginRegisterModal from './LoginRegisterModal';
import './NavBarLight.css'

export default function NavBarLight() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  return (
    <>
      <header id="navbar">
        <a className="logo" href="#">
          <img src="/images/S-NavBar/logotext_nav2.svg" alt="" />
        </a>
        <nav className="navigation">
          {/* icon btn */}
          <ul className="icon">
            <li><a href="#"><img src="/images/S-NavBar/navicon_search.svg" alt="Search" /></a></li>
            <li><a href="#"><img src="/images/S-NavBar/navicon_cart.svg" alt="Cart" /></a></li>
            <li>
              {/* 按下會員 icon 彈出視窗 */}
              <button onClick={() => setShowAuthModal(true)} className="member-btn">
                <img src="/images/S-NavBar/navicon_member.svg" alt="Member" />
              </button>
            </li>
            <li><a href="#"><img src="/images/S-NavBar/navicon_bgrbtn.svg" alt="Menu" /></a></li>
          </ul>
        </nav>
      </header>
      {/* 彈跳視窗元件 */}
      <LoginRegisterModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  )
}
