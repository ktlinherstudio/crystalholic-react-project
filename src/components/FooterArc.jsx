import './FooterArc.css'
import { Link } from 'react-router-dom'

export default function FooterArc() {
  return (
    <footer className="footer-arc">
      <div className="footer-arc-curve">
        <svg viewBox="0 0 1440 146" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            {/* 漸層 */}
            <linearGradient id="footer-arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(148, 95, 234, 0.95)" />
              <stop offset="100%" stopColor="rgba(95, 80, 228, 0.95)" />
            </linearGradient>

            {/* 躁點圖 */}
            <pattern id="footer-arc-noise" patternUnits="userSpaceOnUse" width="300" height="300">
              <image href="/images/S-Background/noise-background.jpg" x="0" y="0" width="300" height="300" />
            </pattern>

            {/* 遮罩區域（弧形） */}
            <mask id="footer-arc-mask">
              <path d="M719.684.6c264.492 0 511.196 53.197 719.384 145.108H.298C208.486 53.797 455.192.6 719.684.6Z" fill="white" />
            </mask>
          </defs>

          {/* 放進一個 g 裡再套 mask */}
          <g mask="url(#footer-arc-mask)">
            <rect width="100%" height="146" fill="url(#footer-arc-gradient)" />
            <rect width="100%" height="146" fill="url(#footer-arc-noise)" opacity="0.08" />
          </g>
        </svg>


      </div>

      <div className="footer-arc-content">
        <div className="company">
          <h3>COMPANY</h3>
          <ul>
            <li>
              <Link to="/about#about-hero">關於我們 About Us</Link>
            </li>
          </ul>

        </div>
        <div className="service">
          <h3>SERVICE</h3>
          <ul>
            <li><Link to="/KnowledgeCrystal#crystal-main">水晶小百科 Crystal Discoveries</Link></li>
            <li><Link to="/knowledgecleanse#content-nc">保養維護 Maintenance</Link></li>
            <li><Link to="#">商品包裝 Packaging</Link></li>
            <li><Link to="#">售後服務 After-sales service</Link></li>
            <li><Link to="#">常見問題 FAQ</Link></li>
            <li><Link to="#">隱私權政策 Privacy</Link></li>
          </ul>
        </div>
        <div className="contact">
          <h3>CONTACT US</h3>
          <p>聯絡電話 / 0800 000 000</p>
          <p>MON - FRI / 9:00 am - 18:00 pm</p>
        </div>
        <div className="followus">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="#"><img src="" alt="Line" /></a>
            <a href="#"><img src="" alt="Instagram" /></a>
            <a href="#"><img src="" alt="Facebook" /></a>
          </div>
        </div>
      </div>

      <hr />

      <div className="copyright">
        <p>2025 © Crystalholic All Rights Reserved.</p>
      </div>
    </footer>
  )
}
