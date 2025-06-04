import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginRegisterModal from './LoginRegisterModal/LoginRegisterModal';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';

/* 🆕 取得購物車內容 */
import { useCart } from '../pages/Shopping/CartContext.jsx';

import './NavBarLight2.css';

export default function NavBarLight() {
  const { isLoggedIn, logout, user } = useAuth();
  const { openMenu } = useUI();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  /* 🆕 計算購物車總件數 */
  const { cartItems } = useCart();
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleMemberClick = () => {
    if (isLoggedIn) {
      setShowDropdown((prev) => !prev);
    } else {
      setShowAuthModal(true);
    }
  };

  const handleLoginSuccess = () => setShowAuthModal(false);

  return (
    <>
      <header id="navbar">
        <Link className="logo" to="/">
          <img src="./images/S-NavBar/logotext_nav2.svg" alt="首頁" />
        </Link>

        <nav className="navigation">
          <ul className="icon">
            <li>
              <a href="#"><img src="./images/S-NavBar/navicon_search.svg" alt="Search" /></a>
            </li>

            {/* 🆕 購物車 icon + 數量徽章 */}
            <li className="cart-li" style={{ position: 'relative' }}>
              <Link to="/ShoppingCart">
                <img src="./images/S-NavBar/navicon_cart.svg" alt="Cart" />
                {totalQty > 0 && (
                  <span className="cart-badge">
                    {totalQty > 99 ? '99+' : totalQty}
                  </span>
                )}
              </Link>
            </li>

            {/* 會員區 */}
            <li style={{ position: 'relative' }}>
              <button className="member-button" onClick={handleMemberClick}>
                <img src="./images/S-NavBar/navicon_member.svg" alt="Member" />
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