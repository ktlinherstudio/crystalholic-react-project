import './FooterBg.css'

export default function FooterBg() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">關於我們 About Us</a></li>
          </ul>
        </div>
        <div className="service">
          <h3>SERVICE</h3>
          <ul>
            <li><a href="#">購買指南 How To Buy</a></li>
            <li><a href="#">商品包裝 Packaging</a></li>
            <li><a href="#">售後服務 After-sales service</a></li>
            <li><a href="#">常見問題 FAQ</a></li>
            <li><a href="#">保養維護 Maintenance</a></li>
            <li><a href="#">隱私權政策 Privacy</a></li>
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
