import './FooterArc.css'
import { Link } from 'react-router-dom'

export default function FooterArc() {
  return (
    <footer className="footer-arc">
      <div className="footer-arc-curve">
        <svg viewBox="0 0 1440 146" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M719.684.6c264.492 0 511.196 53.197 719.384 145.108H.298C208.486 53.797 455.192.6 719.684.6Z" fill="#5348AA" />
        </svg>
      </div>

      <div className="footer-arc-content">
        <div className="company">
          <h3>COMPANY</h3>
          <li>
              <Link to="/about#about-hero">關於我們 About Us</Link> 
            </li>
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

      <div className="copyright">
        <p>2025 © Crystalholic All Rights Reserved.</p>
      </div>
    </footer>
  )
}
