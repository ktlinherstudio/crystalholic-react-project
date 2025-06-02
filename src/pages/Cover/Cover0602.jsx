import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import BgDark from '../../components/BgDark'
// import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn';
import '../../App.scss/css/Style.min.css'
import BackToTopBtn from '../../components/BackToTopBtn'

export default function Cover() {

    return (
        <>
            {/* 背景 */}
            <div className='coverbg'>
                <div className="bgdark1"><BgDark/></div>
                <div className="bgdark2"><BgDark/></div>
            </div>
            {/* menu bar*/}
            <NavBarWrapper variant="light" />

            {/* 封面1  */}
            <section className='ch-cover'>
                <div className="cover-box">
                    <span><img src="./images/HomePage/deco-diamond.svg" className="deco1" alt="" /></span>
                    <h2>
                        <span className="cover1">匠心嚴選 靈韻手作</span>
                        <span className="cover2">打造專屬你的能量水晶</span>
                    </h2>
                    <span><img src="./images/HomePage/deco-diamond.svg" className="deco2" alt="" /></span>
                    <span><img src="./images/HomePage/deco-diamond.svg" className="deco3" alt="" /></span>
                    <span><img src="./images/HomePage/scroll.svg" className="scroll" alt="" /></span>
                </div>
            </section>


            {/* 封面2 */}
            <section className="section-starttest">
                <div className="startbox1">
                    <img src="./images/HomePage/L.svg" className="lefth" alt="" />
                    <div className="startbtn">
                        <Link to="Numtest1"><img src="./images/HomePage/start-test-btn.svg" alt="" /></Link>
                    </div>
                    <img src="./images/HomePage/R.svg" className="righth" alt="" />
                    <span className="bling"><img src="./images/HomePage/deco-bling2.svg" alt="" /></span>
                    <span className="numbg"><img src="./images/HomePage/deco-num-bg.svg" alt="" /></span>
                </div>
                <div className="startbox2">
                    <p>讓水晶傾聽心聲，編織你獨一無二的手鍊。</p>
                    <div><img src="./images/HomePage/scroll.svg" alt="" /></div>
                </div>
            </section>


            {/* 憑直覺抽一張吧 */}
            <section id="section-tarotcard">
                <div id="tarotcard-title">
                    <span className="dimond-left"><img src="./images/HomePage/deco-diamond-left.svg" alt="" /></span>
                    <h2 id="tarot-title">憑直覺抽一張吧</h2>
                    <span className="dimond-right"><img src="./images/HomePage/deco-diamond-right.svg" alt="" /></span>
                </div>
                <div id="tarotcard-box">
                    <img src="./images/HomePage/tarot-back.png" className="trcardchild-1" alt="" />
                    <img src="./images/HomePage/tarot-back.png" className="trcard" alt="" />
                    <img src="./images/HomePage/tarot-back.png" className="trcard" alt="" />
                    <img src="./images/HomePage/tarot-back.png" className="trcard" alt="" />
                    <img src="./images/HomePage/tarot-back.png" className="trcard" alt="" />
                    <img src="./images/HomePage/tarot-back.png" className="trcard" alt="" />
                </div>
                <div >
                    <Link to="/ProductCollection" id="tarotcard-btn">所有商品</Link>
                </div>
            </section>

            {/* 訂製專屬手鍊 */}
            <section id="custom">
                <div id="title-all">
                    <header className="custom-title">
                        <span><img src="./images/HomePage/deco-diamond-left.svg" className="dimond-left" /></span>
                        <div id="custom-titlebox">
                            <h2>Customized 訂製你的專屬水晶</h2>
                            <br />
                            <h3>精選天然水晶，打造獨一無二的手鍊。</h3>
                        </div>
                        <span><img src="./images/HomePage/deco-diamond-right.svg" className="dimond-right" alt="" /></span>
                    </header>
                    {/* <button><a href="../阿啾/html/customization-1.html">立即訂製</a></button> */}
                    <Link to="/Customize1" id='custombtn'>立即訂製</Link>
                </div>
            </section>

            {/* 水晶小百科  */}
            <section id="section-crystaldiscovery">
                <div className="crystal-display">
                    <div className="circlebox">
                        <img src="./images/HomePage/covercrystal/crystal-golden-rutilated-quartz.svg" className="circle" alt="" />
                        <img src="./images/HomePage/covercrystal/crystal-kyanite.svg" className="circle" alt="" />
                        <img src="./images/HomePage/covercrystal/crystal-angelite.svg" className="circle" alt="" />
                        <img src="./images/HomePage/covercrystal/crystal-sunstone.svg" className="circle" alt="" />
                        <img src="./images/HomePage/covercrystal/crystal-moonstone.svg" className="circle" alt="" />
                        <img src="./images/HomePage/covercrystal/crystal-green-phantom-quartz.svg" className="circle" alt="" />
                        <img src="./images/HomePage/covercrystal/crystal-moonstone.svg" className="circle" alt="" />
                        <img src="./images/HomePage/covercrystal/crystal-rose-quartz.svg" className="circle" alt="" />
                        <img src="./images/HomePage/covercrystal/crystal-angelite.svg" className="circle" alt="" />

                        <div className="circle"><img src="./images/HomePage/covercrystal/crystal-kyanite.svg" alt="" /> </div>

                        <img src="./images/HomePage/covercrystal/crystal-amethyst.svg" className="circle" alt="" />
                        <img src="./images/HomePage/covercrystal/crystal-sunstone.svg" className="circle" alt="" />
                   {/* <button><img src="./images/HomePage/icon_btn_down.ico.svg" alt="" /></button> */}
                   {/* <button><img src="./images/HomePage/icon_btn_up.ico.svg" alt="" /></button> */}
                    </div>
                </div>
                <div className="section-crystaldiscovery">
                    <header>
                        <div id="titlediscovery">
                            <span className="en">Crystal Discoveries</span>
                            <span>水晶小百科</span>
                        </div>
                    </header>
                    <div className="crystaldiscovery">
                        <article className="covercrystal">
                            <div className="crystal-name">
                                <span className="en">Kyanite</span>
                                <span className="ch">藍晶石</span>
                            </div>
                            <div className="discovery-content">
                                <p>藍晶石是一種美麗的藍色水晶，擁有從淺藍到深藍的色澤，並呈現獨特的光澤。它常用於增強溝通、情緒平衡和靈性覺醒。</p>
                            </div>
                        </article>
                        <article className="discovery-p1">
                            <h2>主要功效</h2>
                            <p className="discovery-p1content">
                                促進溝通：幫助開啟喉輪，增強表達與自我溝通。<br />
                                情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。<br />
                                靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。
                            </p>
                        </article>
                        <article className="discovery-p2">
                            <h2>適合人群</h2>
                            <p className="discovery-p2content">
                                追求心靈成長與靈性覺醒的人。<br />
                                需要情緒平衡與放鬆的人。
                            </p>
                        </article>
                        <article className="discovery-p3">
                            <h2>建議搭配水晶</h2>
                            <div className="discovery-imgbox">
                                <img src="./images/S-CrystalSingle/crystal-angelite.png" className="discovery-img" alt="" />
                                <img src="./images/S-CrystalSingle/crystal-amethyst.png" className="discovery-img" alt="" />
                                <img src="./images/S-CrystalSingle/crystal-sunstone.png" className="discovery-img" alt="" />
                            </div>
                        </article>
                    </div>
                </div>
            </section>
             <BackToTopBtn />

            {/* 礦迷回饋 */}
            <section id="section-feedback">
                <header className="feedback-displaytitle">
                    <span><img src="./images/HomePage/deco-left.svg" alt="" /></span>
                    <div id="fbtitle">
                        <span>Feedback</span>
                        <span>礦迷回饋</span>
                    </div>
                    <span><img src="./images/HomePage/deco-right.svg" alt="" /></span>
                    {/* span.image裝飾要設定長寬嗎  */}
                </header>
                <div className="feedback-box">
                    <span className="feedback-arrowleft"><img src="./images/HomePage/icon_arrow_left.ico.svg" alt="" /></span>
                    <div className="feedback">
                        <div className="review-pic">

                            <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                            <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                        </div>
                        <div className="feedback-left">
                            {/* 水晶5星評價 */}
                            <div className="fdstar-box">
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                            </div>
                            {/* 回饋內文 */}
                            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                        </div>
                    </div>
                    <div className="feedback">
                        <div className="review-pic">

                            <span><img src="./images/HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                            <span><img src="./images/HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                        </div>
                        <div className="feedback-left">
                            {/* 水晶5星評價 */}
                            <div className="fdstar-box">
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                            </div>
                            {/* 回饋內文  */}
                            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                        </div>
                    </div>
                    <div className="feedback">
                        <div className="review-pic">

                            <span><img src="./images/HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                            <span><img src="./images/HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                        </div>
                        <div className="feedback-left">
                            {/* 水晶5星評價  */}
                            <div className="fdstar-box">
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                            </div>
                            {/* 回饋內文  */}
                            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                        </div>
                    </div>
                    <div className="feedback">
                        <div className="review-pic">

                            <span><img src="./images/HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                            <span><img src="./images/HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                        </div>
                        <div className="feedback-left">
                            {/* 水晶5星評價  */}
                            <div className="fdstar-box">
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                            </div>
                            {/* 回饋內文  */}
                            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                        </div>
                    </div>
                    <span className="feedback-arrowright"><img src="./images/HomePage/icon_arrow_right.ico.svg" alt="" /></span>
                </div>
            </section>
            <div className="coverfooter"><FooterTrn /></div>
        </>
    )
}




{/* jquery CDN 要先執行 */ }
< script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous" ></script >
{/* 自訂的js (一定放在最下面) */ }
< script src="./js/script.js" ></script >



