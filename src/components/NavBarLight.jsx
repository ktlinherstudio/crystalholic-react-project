import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginRegisterModal from './LoginRegisterModal/LoginRegisterModal';
import { useAuth } from '../context/AuthContext';
import './NavBarLight.css';

export default function NavBarLight() {
  const { isLoggedIn, logout, user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMemberClick = () => {
    if (isLoggedIn) {
      setShowDropdown((prev) => !prev);
    } else {
      setShowAuthModal(true);
    }
  };

  const handleLoginSuccess = () => {
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
              <button className="member-button" onClick={() => {
                if (isLoggedIn) {
                  setShowDropdown((prev) => !prev); // 切換下拉選單
                } else {
                  setShowAuthModal(true); // 開啟登入彈窗
                }
              }}>
                <img
                  src="/images/S-NavBar/navicon_member.svg"
                  alt="Member"
                  width="30"
                  height="30"
                />
              </button>

              {isLoggedIn && showDropdown && (
                <div className="member-dropdown">
                  <img
                    src="/images/Numtest/characters/生命靈數角色_s1.svg"
                    alt="avatar"
                    className="member-avatar"
                  />
                  <span className="member-name">{user?.name || "我愛礦礦"}</span>
                  <button className="logout-button" onClick={logout}>登出</button>
                </div>
              )}
            </li>
            <li><a href="#"><img src="/images/S-NavBar/navicon_bgrbtn.svg" alt="Menu" /></a></li>
          </ul>
        </nav>
      </header>

      <LoginRegisterModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}
