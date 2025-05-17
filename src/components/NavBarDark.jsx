import { useState } from 'react';
import LoginRegisterModal from './LoginRegisterModal/LoginRegisterModel';
import './NavBarDark.css'

export default function NavBarDark() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  return (
    <>
      <header id="navbar2">
        <a className="logo2" href="#">
          <img src="/images/S-NavBar/logotext_nav2.svg" alt="" />
        </a>
        <nav className="navigation2">
          {/* icon btn */}
          <ul className="icon2">
            <li><a href="#" className='icon-search'></a></li>
            <li><a href="#" className='icon-cart'></a></li>
            <li>
              {/* 點擊button彈跳視窗 */}
              <button className="member-button2" onClick={() => setShowAuthModal(true)}>
                <a className='icon-member' href='#' />
              </button>
            </li>
            <li><a href="#" className='icon-menu'></a></li>
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