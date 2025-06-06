import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import BgDark from '../../components/BgDark'
// import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn';
import '../../App.scss/css/Style.min.css'
import BackToTopBtn from '../../components/BackToTopBtn'

export default function Cover() {
    /*COVER1&2*/
    const [pageIndex, setPageIndex] = useState(0); // 0: 第一頁, 1: 第二頁

    // 🚫 根據 pageIndex 鎖住或恢復頁面滾動
    useEffect(() => {
        const body = document.body;

        if (pageIndex === 0) {
            body.style.overflow = 'hidden'; // 禁止整頁滾動
        } else {
            body.style.overflow = 'auto'; // 恢復整頁滾動
        }

        return () => {
            body.style.overflow = 'auto'; // 保險機制
        };
    }, [pageIndex]);

    const handleWheel = (e) => {
        if (e.deltaY > 0 && pageIndex === 0) {
            setPageIndex(1);
        } else if (e.deltaY < 0 && pageIndex === 1) {
            setPageIndex(0);
        }
    };

    /*tarotcard*/
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const tarotDescriptions = [
        <div className="lbcontent">
            <h2 className="lbh2">沁藍之澗</h2>
            <div><img src="./images/HomePage/lightboxdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
            <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
                海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
            <button className="lbbtn">看看手鍊</button>
        </div>,
        <div className="lbcontent">
            <h2 className="lbh2">金魚泡泡</h2>
            <div><img src="./images/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
            <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
                海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
            <button className="lbbtn">看看手鍊</button>
        </div>,
        <div className="lbcontent">
            <h2 className="lbh2">沉睡王國的夢幻派對</h2>
            <div><img src="./images/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
            <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
                海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
            <button className="lbbtn">看看手鍊</button>
        </div>,
        <div className="lbcontent">
            <h2 className="lbh2">北國雪森</h2>
            <div><img src="./images/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
            <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
                海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
            <button className="lbbtn">看看手鍊</button>
        </div>,
        <div className="lbcontent">
            <h2 className="lbh2">薄荷之吻</h2>
            <div><img src="./images/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
            <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
                海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
            <button className="lbbtn">看看手鍊</button>
        </div>,
        <div className="lbcontent">
            <h2 className="lbh2">極圈探險家</h2>
            <div><img src="./images/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
            <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
                海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
            <button className="lbbtn">看看手鍊</button>
        </div>
    ];

    const tarotImg = [
        <img src="./images/HomePage/lbtc1.png" className="trimg" alt="" />,
        <img src="./images/HomePage/lbtc2.png" className="trimg" alt="" />,
        <img src="./images/HomePage/lbtc3.png" className="trimg" alt="" />,
        <img src="./images/HomePage/lbtc4.png" className="trimg" alt="" />,
        <img src="./images/HomePage/lbtc5.png" className="trimg" alt="" />,
        <img src="./images/HomePage/lbtc6.png" className="trimg" alt="" />,
    ]

    const tarotBackImages = [
        "./images/HomePage/lbtc1.png",
        "./images/HomePage/lbtc2.png",
        "./images/HomePage/lbtc3.png",
        "./images/HomePage/lbtc4.png",
        "./images/HomePage/lbtc5.png",
        "./images/HomePage/lbtc6.png",
    ];


    const handleCardClick = (index) => {
        setSelectedCardIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedCardIndex(null);
    };

    /*水晶小百科*/
    const [crystals, setCrystals] = useState([
        'disc-kyanite',
        'disc-amethyst',
        'disc-sunstone',
        'disc-golden',
        'disc-strawberry',
        'disc-angelite',
        'disc-moonstone',
        'disc-rose',
        'disc-green',
        'disc-moonstone1',
        'disc-rose1',
        'disc-angelite1'
    ]);

    const crystalImages = {
        'disc-kyanite': 'crystal-kyanite.svg',
        'disc-amethyst': 'crystal-amethyst.svg',
        'disc-sunstone': 'crystal-sunstone.svg',
        'disc-golden': 'crystal-golden-rutilated-quartz.svg',
        'disc-strawberry': 'crystal-golden-strawberry-quartz.svg',
        'disc-angelite': 'crystal-angelite.svg',
        'disc-moonstone': 'crystal-moonstone.svg',
        'disc-rose': 'crystal-rose-quartz.svg',
        'disc-green': 'crystal-green-phantom-quartz.svg',
        'disc-moonstone1': 'crystal-moonstone.svg',
        'disc-rose1': 'crystal-rose-quartz.svg',
        'disc-angelite1': 'crystal-angelite.svg'
    };

    const handleUp = () => {
        const newOrder = [crystals[crystals.length - 1], ...crystals.slice(0, crystals.length - 1)];
        setCrystals(newOrder);
    };

    const handleDown = () => {
        const newOrder = [...crystals.slice(1), crystals[0]];
        setCrystals(newOrder);
    };

    const currentCrystal = crystals[0];

    /** */

    return (
        <>
            {/* 背景 */}
            <div className='coverbg'>
                <div className="bgdark1"><BgDark /></div>
                <div className="bgdark2"><BgDark /></div>
            </div>
            {/* menu bar*/}
            <NavBarWrapper variant="light" />

            {/* 封面1  */}
            <div className="covercontainer" onWheel={handleWheel}>
                <motion.section className="ch-cover"
                    // onWheel={handleWheel}
                    initial={false}
                    animate={pageIndex === 0 ? { y: 0, opacity: 1 } : { y: "-100vh", opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}>

                    <div className="cover-box">
                        <span><img src="./images/HomePage/deco-diamond.svg" className="deco1" alt="" /></span>
                        <h2 id='coverh2'>
                            <span className="cover1">匠心嚴選 靈韻手作</span>
                            <span className="cover2">打造專屬你的能量水晶</span>
                        </h2>
                        <span><img src="./images/HomePage/deco-diamond.svg" className="deco2" alt="" /></span>
                        <span><img src="./images/HomePage/deco-diamond.svg" className="deco3" alt="" /></span>
                        <span className='scrollbox'>
                            <img src="./images/HomePage/scroll1.svg" className="scroll1" alt="" />
                            <img src="./images/HomePage/scroll2.svg" className="scroll2" alt="" />
                        </span>
                    </div>
                </motion.section>

                {/* 封面2 */}
                <motion.section className="section-starttest"
                    initial={false}
                    animate={pageIndex === 1 ? { y: "-100vh", opacity: 1 } : { y: "0vh", opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}>

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
                        <span className='scrollbox2'>
                            <img src="./images/HomePage/scroll1.svg" className="scroll3" alt="" />
                            <img src="./images/HomePage/scroll2.svg" className="scroll4" alt="" />
                        </span>
                    </div>
                </motion.section>
            </div>

            {/* 憑直覺抽一張吧 */}
            <section id="section-tarotcard">
                {/* title */}
                <div id="tarotcard-title">
                    <span className="dimond-left"><img src="./images/HomePage/deco-diamond-left.svg" alt="" /></span>
                    <h2 id="tarot-title">憑直覺抽一張吧</h2>
                    <span className="dimond-right"><img src="./images/HomePage/deco-diamond-right.svg" alt="" /></span>
                </div>
                <div id="tarotcard-box">
                    {tarotDescriptions.map((desc, index) => (
                        <div key={index} className="Rcard">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img
                                        src="./images/HomePage/tarot-back0601.png"
                                        className={index === 0 ? 'trcardchild-1' : 'trcard'}
                                        alt={`tarot card ${index + 1}`}
                                        onClick={() => handleCardClick(index)}
                                    />
                                </div>
                                <div className="card-back">
                                    <img
                                        src={tarotBackImages[index]}
                                        className={index === 0 ? 'trcardchild-1' : 'trcard'}
                                        alt={`tarot card ${index + 1}`}
                                        onClick={() => handleCardClick(index)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id='tcbtn'>
                    <Link to="/ProductCollection" id="tarotcard-btn">所有商品</Link>
                </div>
            </section>

            {lightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <div className='lbborder1'>
                            <div className='lbborder2'>
                                <button className="lightbox-close" onClick={closeLightbox}>×</button>
                                <div className='lbimg'>{tarotImg[selectedCardIndex]}</div>
                                <div className="lightbox-text">{tarotDescriptions[selectedCardIndex]}</div>
                            </div>
                        </div>
                    </div>
                </div >
            )
            }

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
                {/* 版2 */}
                <div className="crystal-display">
                    <div className="circlebox">
                        {crystals.map((id) => (
                            <div className='circle' key={id}>
                                <img src={`./images/HomePage/covercrystal/${crystalImages[id]}`} id={id} alt="" />
                            </div>
                        ))}
                    </div>
                    {/* <div id='crystalbtn'> */}
                    <div className='ver4'>
                        <button id='circleup' onClick={handleUp}>
                            <img src="./images/HomePage/icon_btn_up.ico.svg" alt="" />
                        </button>
                        <button id='circledown' onClick={handleDown}>
                            <img src="./images/HomePage/icon_btn_down.ico.svg" alt="" />
                        </button>
                    </div>
                    {/* </div> */}
                </div>

                {/* 版1 */}
                {/* <div className="crystal-display">
                    <div className="circlebox">
                        {crystals.map((id, index) => (
                            <div className='circle' key={id}>
                                {index === 0 ?
                                 (
                                    <div className='withbtn'>
                                        <button id='circleup' onClick={handleUp}>
                                            <img src="./images/HomePage/icon_btn_down.ico.svg" alt="" />
                                        </button>
                                        <div>
                                            <img src={`./images/HomePage/covercrystal/${crystalImages[id]}`} id={id} alt="" />
                                        </div>
                                        <button id='circledown' onClick={handleDown}>
                                            <img src="./images/HomePage/icon_btn_up.ico.svg" alt="" />
                                        </button>
                                    </div>
                                ) 
                                :
                                 (
                                    <img src={`./images/HomePage/covercrystal/${crystalImages[id]}`} id={id} alt="" />
                                )}
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* 顯示對應水晶資訊 */}
                <div className="section-crystaldiscovery">
                    <header>
                        <div id="titlediscovery">
                            <span className="en">Crystal Discoveries</span>
                            <span>水晶小百科</span>
                        </div>
                    </header>
                    <div className="crystaldiscovery">
                        {renderCrystalContent(currentCrystal)}
                    </div>
                </div>
            </section>
           

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
             <BackToTopBtn />
            <div className="coverfooter"><FooterTrn /></div>
        </>
    )
}
/*水晶小百科*/
function renderCrystalContent(id) {
    const content = {
        'disc-kyanite': {
            name_en: 'Kyanite',
            name_ch: '藍晶石',
            description: '藍晶石是一種美麗的藍色水晶，擁有從淺藍到深藍的色澤，並呈現獨特的光澤。它常用於增強溝通、情緒平衡和靈性覺醒。',
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-angelite.png',
                'crystal-amethyst.png',
                'crystal-sunstone.png'
            ]
        },
        'disc-amethyst': {
            name_en: 'Amethyst',
            name_ch: "紫水晶",
            description: "紫水晶是一種高頻能量的靈性水晶，象徵智慧與平靜，能淨化心靈並帶來內在穩定。",
            benefits: [
                '安神鎮定：幫助釋放壓力、改善睡眠品質。',
                '提升智慧：強化集中力與創造力。',
                '靈性成長：幫助冥想與內在探索。'
            ],
            people: [
                '需要情緒紓壓與放鬆的人。',
                '從事創作、學習與靈修活動的人。'
            ],
            suggestionImgs: [
                'crystal-rosequartz.png',
                'crystal-clearquartz.png',
                'crystal-angelite.png'
            ]
        },
        'disc-sunstone': {
            name_en: 'Sunstone',
            name_ch: '太陽石',
            description: "太陽石是一種帶有金橘色光澤的水晶，象徵溫暖、活力與正向能量，能喚醒內在的生命力與快樂感。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-citrine.png',
                'crystal-rosequartz.png',
                'crystal-amethyst.png'
            ]
        },
        'disc-golden': {
            name_en: 'Gold Obsidia',
            name_ch: '金曜石',
            description: "金曜石是一種擁有金色光澤的黑曜石，象徵光明照進黑暗，能深入潛意識協助轉化陰影與建立能量防護罩，是極具力量的靈性護盾。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-blacktourmaline.png',
                'crystal-smokyquartz.png',
                'crystal-labradorite.png'
            ]
        },
        'disc-strawberry': {
            name_en: 'Strawberry',
            name_ch: '草莓晶',
            description: "草莓晶散發溫潤柔和的紅粉能量，有助吸引桃花與提升戀愛運，是甜美愛情能量的代表。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-rosequartz.png',
                'crystal-rhodochrosite.png',
                'crystal-garnet.png'
            ]
        },
        'disc-angelite': {
            name_en: 'Angelite',
            name_ch: '天使石',
            description: "天使石是一種溫柔的淡藍色水晶，象徵和平與靜心，常被視為與天使界連結的橋樑，能帶來深層的寧靜與支持感。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-moonstone.png',
                'crystal-rosequartz.png',
                'crystal-amethyst.png'
            ]
        },
        'disc-moonstone': {
            name_en: 'Moonstone',
            name_ch: '月光石',
            description: "月光石擁有柔和光澤，象徵女性能量與直覺之美，是與月亮能量連結的重要水晶。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-labradorite.png',
                'crystal-albite.png',
                'crystal-sunstone.png'
            ]
        },
        'disc-rose': {
            name_en: 'Rose Quartz',
            name_ch: '玫瑰石英',
            description: "玫瑰石英是最經典的愛情水晶，擁有溫柔粉色能量，象徵無條件的愛與心輪療癒。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-moonstone.png',
                'crystal-clearquartz.png',
                'crystal-rubellite.png'
            ]
        },
        'disc-green': {
            name_en: "Green Fluorite",
            name_ch: '綠螢石',
            description: "綠螢石具有淨化思緒與安撫心輪的功效，能協助釋放雜念、整理混亂狀態，非常適合在靜心與放鬆時使用。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-smokyquartz.png',
                'crystal-clearquartz.png',
                'crystal-rosequartz.png'
            ]
        },
        'disc-moonstone1': {
            name_en: 'Moonstone',
            name_ch: '月光石',
            description: "月光石擁有柔和光澤，象徵女性能量與直覺之美，是與月亮能量連結的重要水晶。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-labradorite.png',
                'crystal-albite.png',
                'crystal-sunstone.png'
            ]
        },
        'disc-rose1': {
            name_en: 'Rose Quartz',
            name_ch: '玫瑰石英',
            description: "玫瑰石英是最經典的愛情水晶，擁有溫柔粉色能量，象徵無條件的愛與心輪療癒。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-moonstone.png',
                'crystal-clearquartz.png',
                'crystal-rubellite.png'
            ]
        },
        'disc-angelite1': {
            name_en: 'Angelite',
            name_ch: '天使石',
            description: "天使石是一種溫柔的淡藍色水晶，象徵和平與靜心，常被視為與天使界連結的橋樑，能帶來深層的寧靜與支持感。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-moonstone.png',
                'crystal-rosequartz.png',
                'crystal-amethyst.png'
            ]
        }
        // ...你可以根據這個格式繼續補充其他水晶
    };

    const crystal = content[id];
    if (!crystal) return null;

    return (
        <>
            <article className="covercrystal">
                <div className="crystal-name">
                    <span className="en">{crystal.name_en}</span>
                    <span className="ch">{crystal.name_ch}</span>
                </div>
                <div className="discovery-content">
                    <p>{crystal.description}</p>
                </div>
            </article>
            <article className="discovery-p1">
                <h2>主要功效</h2>
                <p className="discovery-p1content">
                    {crystal.benefits.map((item, idx) => <span key={idx}>{item}<br /></span>)}
                </p>
            </article>
            <article className="discovery-p2">
                <h2>適合人群</h2>
                <p className="discovery-p2content">
                    {crystal.people.map((item, idx) => <span key={idx}>{item}<br /></span>)}
                </p>
            </article>
            <article className="discovery-p3">
                <h2>建議搭配水晶</h2>
                <div className="discovery-imgbox">
                    {crystal.suggestionImgs.map((img, idx) => (
                        <img src={`./images/S-CrystalSingle/${img}`} className="discovery-img" key={idx} alt="" />
                    ))}
                </div>
            </article>
        </>
    );
}




{/* jquery CDN 要先執行 */ }
< script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous" ></script >
{/* 自訂的js (一定放在最下面) */ }
< script src="./js/script.js" ></script >



