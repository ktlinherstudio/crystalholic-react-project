import './NumTest3.css'
import '../../components/NumTestBg.css'
import NavBarWrapper from '../../components/NavBarWrapper'

export default function NumTest3() {
    return (
        <>
            <NavBarWrapper variant="dark" />
            <main className="index-numtest3">
                <div id="left">
                    <div className="box-numtest3">
                        <div className="name-box">
                            <p className="title-name">你是<span>1</span>號人</p>
                            <p className="name-0">獨立領袖</p>
                        </div>
                        {/* 標籤 (1440px：隱藏) */}
                        <ul id="hashtag-box2">
                            <li className="hashtag">
                                <p>＃創意無限</p>
                            </li>
                            <li className="hashtag">
                                <p>＃領袖魅力</p>
                            </li>
                            <li className="hashtag">
                                <p>＃競爭心強</p>
                            </li>
                        </ul>
                    </div>

                    <div className="imgp0-box">
                        <img className="img-p0" src="/public/images/Numtest/characters/numCharacter_1.svg" alt="" />
                    </div>
                </div>
                <div id="right">
                    {/* 標籤 */}
                    <ul id="hashtag-box">
                        <li className="hashtag">
                            <p>＃創意無限</p>
                        </li>
                        <li className="hashtag">
                            <p>＃領袖魅力</p>
                        </li>
                        <li className="hashtag">
                            <p>＃競爭心強</p>
                        </li>
                    </ul>


                    <div id="box1">
                        {/* 是你的好麻吉 */}
                        <div className="friends">
                            {/* 小標題 */}
                            <div className="title-numtest3">
                                <p>是你的好麻吉</p>
                            </div>
                            {/* 好麻吉3個 */}
                            <ul className="people-box">
                                <li className="people">
                                    <img className="img-p1" src="/public/images/Numtest/num3-s.svg" alt="" />
                                    <div>
                                        <p className="name">3號人</p>
                                        <p className="content-numtest3">快樂達人</p>
                                    </div>
                                </li>
                                <li className="people">
                                    <img className="img-p2" src="/public/images/Numtest/num5-s.svg" alt="" />
                                    <div>
                                        <p className="name">5號人</p>
                                        <p className="content-numtest3">冒險家</p>
                                    </div>
                                </li>
                                <li className="people">
                                    <img className="img-p3" src="/public/images/Numtest/num7-s.svg" alt="" />
                                    <div>
                                        <p className="name">7號人</p>
                                        <p className="content-numtest3">深度思考者</p>
                                    </div>
                                </li>
                            </ul>
                        </div>


                        {/* 遇到快逃R! */}
                        <div className="enemies">
                            {/* 小標題 */}
                            <div className="title-numtest3">
                                <p>遇到快逃R!</p>
                            </div>
                            <ul className="people-box2">
                                <li className="people">
                                    <img className="img-p4" src="/public/images/Numtest/num3-s.svg" alt="" />
                                    <div>
                                        <p className="name">8號人</p>
                                        <p className="content-numtest3">霸氣領袖</p>
                                    </div>
                                </li>
                                <li className="people">
                                    <img className="img-p5" src="/public/images/Numtest/num5-s.svg" alt="" />
                                    <div>
                                        <p className="name">9號人</p>
                                        <p className="content-numtest3">大愛使者</p>
                                    </div>
                                </li>
                                <li className="people">
                                    <img className="img-p6" src="/public/images/Numtest/num7-s.svg" alt="" />
                                    <div>
                                        <p className="name">1號人</p>
                                        <p className="content-numtest3">獨立領袖</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div id="box2">
                        {/* 適合你的水晶 */}
                        <div className="crystals">
                            {/* 小標題 */}
                            <div className="title-numtest3">
                                <p>適合你的水晶</p>
                            </div>
                            <ul className="crystal-box">
                                <li className="crystal">
                                    <img className="img-p7" src="/public/images/S-CrystalSingle/crystal-citrine.png" alt="" />
                                    <div>
                                        <p className="name">黃水晶</p>
                                        <p className="content-numtest3">金錢強強滾</p>
                                    </div>
                                </li>
                                <li className="crystal">
                                    <img className="img-p8" src="/public/images/S-CrystalSingle/crystal-green-phantom.png" alt="" />
                                    <div>
                                        <p className="name">綠幽靈</p>
                                        <p className="content-numtest3">工作神隊友</p>
                                    </div>
                                </li>
                                <li className="crystal">
                                    <img className="img-p9" src="/public/images/S-CrystalSingle/crystal-kyanite.png" alt="" />
                                    <div>
                                        <p className="name">藍晶石</p>
                                        <p className="content-numtest3">溝通表達力</p>
                                    </div>
                                </li>
                            </ul>
                        </div>


                        {/* 推薦設計款 */}
                        <div className="bracelet-design">
                            <div className="title2">
                                {/* <svg width="220" height="65"> */}
                                <svg viewBox="0 0 300 130" width="100%" preserveAspectRatio="xMidYMid meet">
                                    {/* <svg viewBox="0 0 300 130" width="100%" style={{ maxWidth: "300px", height: "auto" }}> */}
                                    <defs>
                                        <path id="curve" d="M 50,100 A 100,50 0 0,1 250,100" />
                                    </defs>
                                    <text fill="#684581" fontSize="18" letterSpacing="3">
                                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                                            ✦ 推薦設計款 ✦
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="title3">
                                <div className="star-box">
                                    <img className="star" src="/public/images/Numtest/star.png" alt="" />
                                </div>
                                <div className="bracelet-box">
                                    <img className="bracelet" src="/public/images/Numtest/bracelet.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 按鈕 */}
                    <div id="button-box">
                        <button className="button1-j">分享測驗結果</button>
                        <button className="button2-j">✦ 訂製專屬手鍊 ✦</button>
                    </div>
                </div>
            </main>

        </>
    )
} 