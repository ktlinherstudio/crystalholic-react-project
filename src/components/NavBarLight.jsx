import { useState, useEffect } from 'react';
import LoginRegisterModal from './LoginRegisterModal/LoginRegisterModal';
import { Link } from 'react-router-dom';
import './NavBarLight.css';

export default function NavBarLight() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // 一進來就判斷 localStorage 登入狀態
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleMemberClick = () => {
    if (isLoggedIn) {
      setShowDropdown((prev) => !prev); // 顯示登出選單
    } else {
      setShowAuthModal(true); // 開啟登入視窗
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setShowDropdown(false);
    alert('已登出 👋');
  };

  const handleLoginSuccess = () => {
      console.log(' 登入成功：設定登入狀態');
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  return (
    <>
      <header id="navbar">
        <Link className="logo" to="/cover">
          <img src="/images/S-NavBar/logotext_nav2.svg" alt="首頁" />
        </Link>
        <nav className="navigation">
          <ul className="icon">
            <li><a href="#"><img src="/images/S-NavBar/navicon_search.svg" alt="Search" /></a></li>
            <li><a href="#"><img src="/images/S-NavBar/navicon_cart.svg" alt="Cart" /></a></li>
            <li style={{ position: 'relative' }}>
              {/* 人像 icon 按鈕 */}
              <button className="member-button" onClick={handleMemberClick}>
                <img
                  src="/images/S-NavBar/navicon_member.svg"
                  alt="Member"
                  width="30"
                  height="30"
                  style={{ display: 'block' }}
                />
              </button>

              {/* 已登入狀態下顯示 dropdown */}
              {isLoggedIn && showDropdown && (
                <div className="member-dropdown">
                  <button onClick={handleLogout}>登出</button>
                </div>
              )}
            </li>
            <li><a href="#"><img src="/images/S-NavBar/navicon_bgrbtn.svg" alt="Menu" /></a></li>
          </ul>
        </nav>
      </header>

      {/* 彈跳登入視窗 */}
      <LoginRegisterModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}
