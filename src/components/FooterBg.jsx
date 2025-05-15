import './FooterBg.css'
import { Link } from 'react-router-dom'

export default function FooterBg() {
  return (
    <footer className="footer-bg">
      <div className="footer-bg-content">
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

      <br />
      <hr />
      <div className="copyright">
        <p>2025 © Crystalholic All Rights Reserved.</p>
      </div>
    </footer>
  )
}
