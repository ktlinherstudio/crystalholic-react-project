import './KnowledgeCrystal.css'; 
import HeaderBg from '../components/HeaderBg'
import FooterPlain from '../components/FooterPlain'

export default function CrystalPage() {
    return (
        <>
            <div className='knowledge-crystal-page'>
                <HeaderBg />
                <main className="main">
                    {/* 上半區：文字與水晶簡介 */}
                    <section className="arc-outer-content">
                        <div className="space">
                            <ul className="category">
                                <li>放鬆冥想</li>
                                <li>專注工作</li>
                                <li>愛與人際</li>
                                <li>能量防護</li>
                                <li>靈性直覺</li>
                            </ul>

                            <div className="crystal">
                                <h1>Kyanite</h1>

                                <div className="crystal-img">
                                    <img src="/images/icon_btn_left.svg" alt="Left" />
                                    <div className="crystal">
                                        <img src="/images/knowledge2_單顆水晶_藍晶石.png" alt="藍晶石" />
                                    </div>
                                    <img src="/images/icon_btn_right.svg" alt="Right" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 下半區：弧形背景包裹內容 */}
                    <div className="arc-wrapper">
                        <div className="arc-svg-bg">
                            <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                                <path d="M0,320 C480,90 960,90 1440,320 L1440,0 L0,0 Z" fill="#fff" />
                            </svg>
                        </div>

                        <section className="arc-inner-content">
                            <div className="part1">
                                <h2>藍晶石</h2>
                                <p>
                                    藍晶石是一種美麗的藍色水晶，擁有從淺藍到深藍的色澤，並呈現獨特的光澤。
                                    它常用於增強溝通、情緒平衡和靈性覺醒。
                                </p>
                            </div>

                            <div className="p2p3">
                                <div className="part2">
                                    <h2>主要功效</h2>
                                    <hr />
                                    <p>
                                        促進溝通：幫助開啟喉輪，增強表達與自我溝通。<br />
                                        情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。<br />
                                        靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。
                                    </p>
                                </div>

                                <div className="part3">
                                    <h2>適合人群</h2>
                                    <hr />
                                    <p>
                                        追求心靈成長與靈性覺醒的人。<br />
                                        需要情緒平衡與放鬆的人。
                                    </p>
                                </div>
                            </div>

                            <div className="recommended-crystals">
                                <h2>推薦搭配水晶</h2>
                                <div className="rc-img">
                                    <img src="/images/knowledge2_單顆水晶_天使石.png" alt="天使石" className="crystal1" />
                                    <img src="/images/knowledge2_單顆水晶_紫水晶.png" alt="紫水晶" className="crystal2" />
                                    <img src="/images/knowledge2_單顆水晶_太陽石.png" alt="太陽石" className="crystal3" />
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <FooterPlain />
            </div>
        </>
    );
}
