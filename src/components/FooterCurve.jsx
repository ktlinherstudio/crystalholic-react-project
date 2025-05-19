import './FooterCurve.css';

export default function FooterCurve() {
    return (
        <footer className="footercurve">
            {/* 弧形 */}
            <div className="footercurve_area">
                <svg
                    viewBox="0 0 1440 146"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M719.684.6c264.492 0 511.196 53.197 719.384 145.108H.298C208.486 53.797 455.192.6 719.684.6Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            <section className="footercurve_info">
                {/* COMPANY */}
                <div className="footercurve_COMPANY">
                    <h4 className="footercurve_title">COMPANY</h4>
                    <ul>
                        <li>
                            <a href="#">關於品牌&nbsp;About&nbsp;Us</a>
                        </li>
                    </ul>
                </div>

                {/* SERVICE */}
                <div className="footercurve_SERVICE">
                    <h4 className="footercurve_title">SERVICE</h4>
                    <ul>
                        <li>
                            <a href="#">如何購買&nbsp;How&nbsp;To&nbsp;Buy</a>
                        </li>
                        <li>
                            <a href="#">商品包裝&nbsp;Packaging</a>
                        </li>
                        <li>
                            <a href="#">售後服務&nbsp;After-sales&nbsp;service</a>
                        </li>
                        <li>
                            <a href="#">常見問題&nbsp;FAQ</a>
                        </li>
                        <li>
                            <a href="#">商品保養&nbsp;Maintenance</a>
                        </li>
                        <li>
                            <a href="#">隱私權條款&nbsp;Privacy</a>
                        </li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div className="footercurve_CONTACT">
                    <h4 className="footercurve_title">CONTACT&nbsp;US</h4>
                    <p>聯絡電話&nbsp;/&nbsp;0800&nbsp;000&nbsp;000</p>
                    <p>MON&nbsp;-&nbsp;FRI&nbsp;/&nbsp;9:00am&nbsp;-&nbsp;18:00pm</p>
                </div>

                {/* FOLLOW */}
                <div className="footercurve_FOLLOW">
                    <h4 className="footercurve_title">FOLLOW&nbsp;US</h4>
                    <ul className="footercurve_social_icon">
                        <li>
                            <a className="footercurve_icon_line" href="#"></a>
                        </li>
                        <li>
                            <a className="footercurve_icon_ig" href="#"></a>
                        </li>
                        <li>
                            <a className="footercurve_icon_fb" href="#"></a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="footercurve_bottom">
                <hr />
                <span>2025&nbsp;©&nbsp;xxxxxxxxx&nbsp;ALL&nbsp;RIGHTS&nbsp;RESERVED.</span>
            </section>
        </footer>
    );
}