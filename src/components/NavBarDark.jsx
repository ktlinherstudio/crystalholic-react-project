import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginRegisterModal from './LoginRegisterModal/LoginRegisterModal';
import { useAuth } from '../context/AuthContext';
import './NavBarDark.css';

export default function NavBarDark() {
  const { isLoggedIn, login, logout, user } = useAuth();
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
      <header id="navbar2">
        <Link className="logo" to="/cover">
          <img src="/images/S-NavBar/logotext_nav2.svg" alt="首頁" />
        </Link>
        <nav className="navigation2">
          <ul className="icon2">
            <li><a href="#" className="icon-search"></a></li>
            <li><a href="#" className="icon-cart"></a></li>
            <li style={{ position: 'relative' }}>
              <button className="member-button2" onClick={handleMemberClick}>
                <a className="icon-member" href="#"></a>
              </button>

              {isLoggedIn && showDropdown && (
                <div className="member-dropdown">
                  <img
                    src="/images/Numtest/characters/生命靈數角色_s1.svg"
                    alt="avatar"
                    className="member-avatar"
                  />
                  <span className="member-name">{user?.name || "礦迷"}</span>
                  <button className="logout-button" onClick={logout}>登出</button>
                </div>
              )}
            </li>
            <li><a href="#" className="icon-menu"></a></li>
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
