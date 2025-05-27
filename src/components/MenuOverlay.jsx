import './MenuOverlay.css';
// import BgDarkBlock from './BgDarkBlock';
import { useUI } from '../context/UIContext';
import { Link } from 'react-router-dom';



export default function MenuOverlay() {
  const { isMenuOpen, closeMenu } = useUI();

  return (
    <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
      {/* <div className="menu-backdrop"></div> */}
      {/* <BgDarkBlock /> */}
      <div className='menu-bg-img'>
      <div className="menu-panel">
        <span className="menu-closebtn" onClick={closeMenu}>
          <img src="./images/S-NavBar/navicon_closebgrbtn.svg" alt="close" />
        </span>
        <nav className="menu-navigation">
          <div className="menu-searchbar">
            <input
              type="text"
              placeholder="搜尋水晶或系列名稱"
              className="menu-search-input"
            />
            <button className="menu-search-btn" onClick={() => console.log('搜尋觸發')}>
              <img
                src="./images/S-NavBar/navicon_search.svg"
                alt="search"
                className="menu-search-icon"
              />
            </button>
          </div>

          <div className="menu-columns-wrapper">
            <div className="menu-column">
              <h2>About us</h2>
              <ul>
                <li><Link to="/about" className="hover-link">
                  <p>品牌故事</p>
                </Link></li>
              </ul>
            </div>

            <div className="menu-column">
              <h2>Discoveries</h2>
              <ul>
                <li><Link to="/KnowledgeCleanse" className="hover-link">
                  <p>使用與淨化指南</p>
                </Link></li>
                <li><Link to="/KnowledgeCrystal" className="hover-link">
                  <p>水晶小百科</p>
                </Link></li>
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

          </div>
          <div className="menu-footer">
            <h3>FOLLOW US</h3>
            <span className="scicon-box">
              <div className="line"></div>
              <div className="ig"></div>
              <div className="fb"></div>
            </span>
          </div>
        </nav>
      </div>
    </div>
    </div>
  );

}
