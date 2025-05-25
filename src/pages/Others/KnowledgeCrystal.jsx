import './KnowledgeCrystal.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterPlain from '../../components/FooterPlain'
import BgDarkBlock from '../../components/BgDarkBlock'
import '../../css/fonts.css';
import BackToTopBtn from '../../components/BackToTopBtn'

export default function CrystalPage() {
    return (
        <>
            <div className="font-style">
                <div className='knowledge-crystal-page'>
                    <NavBarWrapper variant="dark" />
                    <main className="knowledge-crystal-main" id="crystal-main">
                        {/* 上半區：文字與水晶簡介 */}
                        <section className="arc-k-outer-content">
                            <div className="space">
                                <ul className="category-k">
                                    <li>放鬆冥想</li>
                                    <li>專注工作</li>
                                    <li>愛與人際</li>
                                    <li>能量防護</li>
                                    <li>靈性直覺</li>
                                </ul>

                                <div className="crystal-k">
                                    <h1>Kyanite</h1>

                                    <div className="crystal-k-img">
                                        <img src="/images/S-Btn/btn_left.svg" alt="Left" className="crystal-k-arrow" />
                                        <img src="/images/S-CrystalSingle/crystal-kyanite.png" alt="藍晶石" className="crystal-k-center" />
                                        <img src="/images/S-Btn/btn_right.svg" alt="Right" className="crystal-k-arrow" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 下半區：弧形背景包裹內容 */}

                        <div className="arc-k-wrapper">
                            <div className="bgdark-inside"> <BgDarkBlock /></div>

                            <section className="arc-k-inner-content">
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

                                <div className="recommended-crystals-k">
                                    <h2>推薦搭配水晶</h2>
                                    <div className="rc-img">
                                        <img src="/images/S-CrystalSingle/crystal-angelite.png" alt="天使石" className="crystal1" />
                                        <img src="/images/S-CrystalSingle/crystal-amethyst.png" alt="紫水晶" className="crystal2" />
                                        <img src="/images/S-CrystalSingle/crystal-sunstone.png" alt="太陽石" className="crystal3" />
                                    </div>
                                </div>
                            </section>
                            <BackToTopBtn />
                            <FooterPlain />
                        </div>
                    </main>
                </div>

            </div>


        </>
    );
}
