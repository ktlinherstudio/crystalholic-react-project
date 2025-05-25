import './MenuOverlay.css';
import BgDarkBlock from './BgDarkBlock';
import { useUI } from '../context/UIContext';

export default function MenuOverlay() {
  const { isMenuOpen, closeMenu } = useUI();

  return (
    <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
      <BgDarkBlock />
      <div className="menu-panel">
        <nav className="menu-navigation">
          <span className="menu-closebtn" onClick={closeMenu}>
            <img src="/images/S-NavBar/navicon_closebgrbtn.svg" alt="close" />
          </span>

          <div className="menu-column">
            <h2>About us</h2>
            <ul>
              <li><a href="../Aboutus.html">品牌故事</a></li>
              <li><a href="#">品質保證</a></li>
            </ul>
          </div>

          <div className="menu-column">
            <h2>Discoveries</h2>
            <ul>
              <li><a href="../Knowledge1.html">使用與淨化指南</a></li>
              <li><a href="../Knowledge2.html">水晶與基礎知識</a></li>
            </ul>
          </div>

          <div className="menu-column">
            <h2>Collections</h2>
            <ul>
              <li><a href="#">澄語之藍</a></li>
              <li><a href="#">秘境探光</a></li>
              <li><a href="#">四季琉波</a></li>
              <li><a href="#">微醺晶釀</a></li>
            </ul>
          </div>

          <div className="menu-column">
            <h2>Customized</h2>
            <div className="menu-child">
              <ul>
                <li><a href="../Jasmine/numtest/numtest-1.html">生命靈數測驗</a></li>
                <li><a href="../阿啾/html/customization-1.html">開始客製</a></li>
              </ul>
            </div>
          </div>

          <div className="menu-last">
            <div className="menu-last1">
              <h2>Membership</h2>
              <ul>
                <li><a href="#">註冊/登入</a></li>
                <li>會員中心</li>
                <li><a href="">訂單查詢</a></li>
                <li>收藏清單</li>
              </ul>
            </div>
            <div className="menu-last2">
              <h3>FOLLOW US</h3>
              <span className="scicon-box">
                <div className="line"></div>
                <div className="ig"></div>
                <div className="fb"></div>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}