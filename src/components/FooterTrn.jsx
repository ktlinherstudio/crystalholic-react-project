import './FooterTrn.css'

export default function FooterTrn() {
    return (
      <footer className="footertrn">
        <section className="footertrn_info">
          {/* COMPANY */}
          <div className="COMPANY">
            <h4 className="footertrn_title">COMPANY</h4>
            <ul>
              <li><a href="#">關於品牌 About Us</a></li>
            </ul>
          </div>
  
          {/* SERVICE */}
          <div className="SERVICE">
            <h4 className="footertrn_title">SERVICE</h4>
            <ul>
              <li><a href="#">如何購買 How To Buy</a></li>
              <li><a href="#">商品包裝 Packaging</a></li>
              <li><a href="#">售後服務 After-sales service</a></li>
              <li><a href="#">常見問題 FAQ</a></li>
              <li><a href="#">商品保養 Maintenance</a></li>
              <li><a href="#">隱私權條款 Privacy</a></li>
            </ul>
          </div>
  
          {/* CONTACT */}
          <div className="CONTACT">
            <h4 className="footertrn_title">CONTACT US</h4>
            <p>聯絡電話 / 0800 000 000</p>
            <p>MON – FRI / 9:00 am – 18:00 pm</p>
          </div>
  
          {/* FOLLOW */}
          <div className="FOLLOW">
            <h4 className="footertrn_title">FOLLOW US</h4>
            <ul className="social_icon">
              <li><a className="icon-line" href="#" aria-label="LINE"></a></li>
              <li><a className="icon-ig" href="#" aria-label="Instagram"></a></li>
              <li><a className="icon-fb" href="#" aria-label="Facebook"></a></li>
            </ul>
          </div>
        </section>
  
        <section className="footertrn_bottom">
          <hr />
          <span>2025©xxxxxxxxx ALL RIGHTS RESERVED.</span>
        </section>
      </footer>
    );
  }