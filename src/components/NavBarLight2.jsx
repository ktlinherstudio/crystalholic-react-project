import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginRegisterModal from './LoginRegisterModal/LoginRegisterModal';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import './NavBarLight2.css';

export default function NavBarLight() {
  const { isLoggedIn, logout, user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { openMenu } = useUI();

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
        <Link className="logo" to="/">
          <img src="./images/S-NavBar/logotext_nav2.svg" alt="首頁" />
        </Link>
        <nav className="navigation">
          <ul className="icon">
            <li><a href="#"><img src="./images/S-NavBar/navicon_search.svg" alt="Search" /></a></li>
            <li>
              <Link to="/ShoppingCart">
                <img src="./images/S-NavBar/navicon_cart.svg" alt="Cart" />
              </Link>
            </li>
            <li style={{ position: 'relative' }}>
              <button className="member-button" onClick={handleMemberClick}>
                <img
                  src="./images/S-NavBar/navicon_member.svg"
                  alt="Member"
                  width="30"
                  height="30"
                />
              </button>

              {isLoggedIn && showDropdown && (
                <div className="member-dropdown">
                  <img
                    src="./images/Numtest/characters/numCharacter_s1.svg"
                    alt="avatar"
                    className="member-avatar"
                  />
                  <span className="member-name">{user?.name || "我愛礦礦"}</span>
                  <button className="logout-button" onClick={logout}>登出</button>
                </div>
              )}
            </li>
            <li>
              <button
                className="icon-menu"
                onClick={() => {
                  console.log('✅ 漢堡選單點到了');
                  openMenu();
                }}
              ></button>
            </li>
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
