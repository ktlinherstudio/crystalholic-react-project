import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginRegisterModal from './LoginRegisterModal/LoginRegisterModal';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext'; 
import './NavBarDark2.css';

export default function NavBarDark() {
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
      <header id="navbar2">
        <Link className="logo" to="/cover">
          <img src="./images/S-NavBar/logotext_nav2.svg" alt="首頁" />
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
                    src="./images/Numtest/characters/numCharacter_s1.svg"
                    alt="avatar"
                    className="member-avatar"
                  />
                  <span className="member-name">{user?.name || "礦迷"}</span>
                  <button className="logout-button" onClick={logout}>登出</button>
                </div>
              )}
            </li>
            <li>
              <button className="icon-menu" onClick={() => {
                console.log('✅ 漢堡選單點到了');
                openMenu();
              }}></button>
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
