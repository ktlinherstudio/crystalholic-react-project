import './FooterCurve.css'; 

export default function FooterCurve() {
    return (
        <footer>
            {/* 弧形 */}
            <div className="footercurve">
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

            <section className="footercurve-info">
                {/* COMPANY */}
                <div className="COMPANY">
                    <h4 className="footercurve-title">COMPANY</h4>
                    <ul>
                        <li>
                            <a href="#">關於品牌&nbsp;About&nbsp;Us</a>
                        </li>
                    </ul>
                </div>

                {/* SERVICE */}
                <div className="SERVICE">
                    <h4 className="footercurve-title">SERVICE</h4>
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
                <div className="CONTACT">
                    <h4 className="footercurve-title">CONTACT&nbsp;US</h4>
                    <p>聯絡電話&nbsp;/&nbsp;0800&nbsp;000&nbsp;000</p>
                    <p>MON&nbsp;-&nbsp;FRI&nbsp;/&nbsp;9:00am&nbsp;-&nbsp;18:00pm</p>
                </div>

                {/* FOLLOW */}
                <div className="FOLLOW">
                    <h4 className="footercurve-title">FOLLOW&nbsp;US</h4>
                    <ul className="footercurve-social-icon">
                        <li>
                            <a className="footercurveicon-line" href="#"></a>
                        </li>
                        <li>
                            <a className="footercurve-icon-ig" href="#"></a>
                        </li>
                        <li>
                            <a className="footercurve-icon-fb" href="#"></a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="footercurve-bottom">
                <hr />
                <span>2025&nbsp;©&nbsp;xxxxxxxxx&nbsp;ALL&nbsp;RIGHTS&nbsp;RESERVED.</span>
            </section>
        </footer>
    );
}