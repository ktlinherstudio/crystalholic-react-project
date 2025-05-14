import '../App.scss/css/Style.min.css'

export default function Cover() {
    return (
        <>
            {/* 背景 */}
            <div id='cover'>
                <div className="bgdark1"></div>
                <div className="bgdark2"></div>
             {/* </div> */}

                {/* menu bar */}
                <header id="header"></header>

                {/* 封面1  */}
                <section className="ch-cover">
                    <div className="cover-box">
                        <span><img src="./images/deco-diamond.svg" className="deco1" alt="" /></span>
                        <h2>
                            <span className="cover1">匠心嚴選 靈韻手作</span>
                            <span className="cover2">打造專屬你的能量水晶</span>
                        </h2>
                        <span><img src="./images/deco-diamond.svg" className="deco2" alt="" /></span>
                        <span><img src="./images/deco-diamond.svg" className="deco3" alt="" /></span>
                        <span><img src="./images/scroll.svg" className="scroll" alt="" /></span>
                    </div>
                </section>

                {/* 封面2 */}
                <section className="section-starttest">
                    <div className="startbtn"><a href="#"><img src="./images/start-test-btn.svg" alt="" /></a>
                    </div>
                    <div className="startbox1">
                        <img src="./images/hand-left-gradient.svg" className="left" alt="" />
                        <img src="./images/hand-right-gradient.svg" className="right" alt="" />
                    </div>
                    <div className="startbox2">
                        <p>讓水晶傾聽心聲，編織你獨一無二的手鍊。</p>
                        <div><img src="./images/scroll.svg" alt="" /></div>
                    </div>
                    <span className="bling"><img src="./images/deco-bling2.svg" alt="" /></span>
                    <span className="numbg"><img src="./images/deco-num-bg.svg" alt="" /></span>
                </section>

                {/* 憑直覺抽一張吧 */}
                <section id="section-tarotcard">
                    <div className="tarotcard">
                        <h2 id="tarotcard-title">
                            <span className="dimond-left"><img src="./images/deco-diamond-left.svg" alt="" /></span>
                            <div id="tarot-title">憑直覺抽一張吧</div>
                            <span className="dimond-right"><img src="./images/deco-diamond-right.svg" alt="" /></span>
                        </h2>
                        <div id="tarotcard-box">
                            <img src="./images/tarot-back.svg" className="cardchild-1" alt="" />
                            <img src="./images/tarot-back.svg" className="card" alt="" />
                            <img src="./images/tarot-back.svg" className="card" alt="" />
                            <img src="./images/tarot-back.svg" className="card" alt="" />
                            <img src="./images/tarot-back.svg" className="card" alt="" />
                            <img src="./images/tarot-back.svg" className="card" alt="" />
                        </div>
                        <button id="tarotcard-btn"><a href="#">所有商品</a></button>
                    </div>
                </section>

                {/* 訂製專屬手鍊 */}
                <section id="custom">
                    <div id="title-all">
                        <header className="custom-title">
                            <span><img src="./images/鑽石左.svg" className="dimond-left" /></span>
                            <div id="custom-titlebox">
                                <h2>Customized 訂製你的專屬水晶</h2>
                                <br />
                                <h3>精選天然水晶，打造獨一無二的手鍊。</h3>
                            </div>
                            <span><img src="./images/鑽石右.svg" className="dimond-right" alt="" /></span>
                        </header>
                        <button><a href="../阿啾/html/customization-1.html">立即訂製</a></button>
                    </div>
                </section>

                {/* 水晶小百科  */}
                <section id="section-crystaldiscovery">
                    <div className="crystal-display">
                        <img src="./images/黃髮晶.svg" className="circle" alt="" />
                        <img src="./images/crystal-kyanite.png" className="circle" alt="" />
                        <img src="./images/天使石.svg" className="circle" alt="" />
                        <img src="./images/太陽石.svg" className="circle" alt="" />
                        <img src="./images/月光石.svg" className="circle" alt="" />
                        <img src="./images/綠幽靈1-02.svg" className="circle" alt="" />
                        <img src="./images/月光石.svg" className="circle" alt="" />
                        <img src="./images/粉水晶.svg" className="circle" alt="" />
                        <img src="./images/天使石.svg" className="circle" alt="" />

                        <div className="circle"><img src="./images/crystal-kyanite.png" alt="" /> </div>

                        <img src="./images/紫水晶.svg" className="circle" alt="" />
                        <img src="./images/太陽石.svg" className="circle" alt="" />
                    </div>
                    <div className="section-crystaldiscovery">
                        <header>
                            <div id="titlediscovery">
                                <span className="en">Crystal Discoveries</span>
                                <span>水晶小百科</span>
                            </div>
                        </header>
                        <div className="crystaldiscovery">
                            <article className="crystal">
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
                                    <img src="./images/天使石.svg" className="discovery-img" alt="" />
                                    <img src="./images/紫水晶.svg" className="discovery-img" alt="" />
                                    <img src="./images/太陽石.svg" className="discovery-img" alt="" />
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* 礦迷回饋 */}
                <section id="section-feedback">
                    <header className="feedback-displaytitle">
                        <span><img src="./images/裝飾-左.svg" alt="" /></span>
                        <div id="title">
                            <span>Feedback</span>
                            <span>礦迷回饋</span>
                        </div>
                        <span><img src="./images/裝飾-右.svg" alt="" /></span>
                        {/* span.image裝飾要設定長寬嗎  */}
                    </header>
                    <div className="feedback-box">
                        <span className="feedback-arrowleft"><img src="./images/icon_arrow_left.ico.svg" alt="" /></span>
                        <div className="feedback">
                            <div className="review-pic">

                                <span><img src="./images/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                                <span><img src="./images/img-feedback.jpg" className="review-img" alt="" /></span>
                            </div>
                            <div className="feedback-left">
                                {/* 水晶5星評價 */}
                                <div className="star-box">
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                </div>
                                {/* 回饋內文 */}
                                <div className="content">
                                    <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback">
                            <div className="review-pic">

                                <span><img src="./images/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                                <span><img src="./images/img-feedback.jpg" className="review-img" alt="" /></span>
                            </div>
                            <div className="feedback-left">
                                {/* 水晶5星評價 */}
                                <div className="star-box">
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                </div>
                                {/* 回饋內文  */}
                                <div className="content">
                                    <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback">
                            <div className="review-pic">

                                <span><img src="./images/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                                <span><img src="./images/img-feedback.jpg" className="review-img" alt="" /></span>
                            </div>
                            <div className="feedback-left">
                                {/* 水晶5星評價  */}
                                <div className="star-box">
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                </div>
                                {/* 回饋內文  */}
                                <div className="content">
                                    <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback">
                            <div className="review-pic">

                                <span><img src="./images/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                                <span><img src="./images/img-feedback.jpg" className="review-img" alt="" /></span>
                            </div>
                            <div className="feedback-left">
                                {/* 水晶5星評價  */}
                                <div className="star-box">
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                    <img src="./images/star.svg" className="star" alt="" />
                                </div>
                                {/* 回饋內文  */}
                                <div className="content">
                                    <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                                </div>
                            </div>
                        </div>
                        <span className="feedback-arrowright"><img src="./images/icon_arrow_right.ico.svg" alt="" /></span>
                    </div>
                </section>

                <footer id="footer"></footer>
            </div>
        </>
    )
}

{/* jquery CDN 要先執行 */ }
< script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous" ></script >
{/* 自訂的js (一定放在最下面) */ }
< script src="./js/script.js" ></script >




