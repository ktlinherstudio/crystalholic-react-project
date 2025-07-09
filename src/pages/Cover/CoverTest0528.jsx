import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BgDarkBlock from '../../components/BgDarkBlock'
import '../../App.scss/css/Style.min.css'

export default function CoverTes0528() {
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

    return (
        <>
            {/* 背景 */}
            <div className='coverbg'>
                <div className="bgdark1"><BgDarkBlock /></div>
                <div className="bgdark2"><BgDarkBlock /></div>
            </div>

            {/* 封面1  */}
            <div className="covercontainer" onWheel={handleWheel}>
                <motion.section className="ch-cover"
                    // onWheel={handleWheel}
                    initial={false}
                    animate={pageIndex === 0 ? { y: 0, opacity: 1 } : { y: "-100vh", opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}>

                    <div className="cover-box">
                        <span><img src="./images/HomePage/deco-diamond.svg" className="deco1" alt="" /></span>
                        <h2>
                            <span className="cover1">匠心嚴選 靈韻手作</span>
                            <span className="cover2">打造專屬你的能量水晶</span>
                        </h2>
                        <span><img src="./images/HomePage/deco-diamond.svg" className="deco2" alt="" /></span>
                        <span><img src="./images/HomePage/deco-diamond.svg" className="deco3" alt="" /></span>
                        <span>
                            <img src="./images/HomePage/scroll.svg" className="scroll" alt="" />
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
                        <div><img src="./images/HomePage/scroll.svg" className="scroll2" alt="" /></div>
                    </div>
                </motion.section>
            </div>

            {/* 憑直覺抽一張吧 */}
            <section id="section-tarotcard">
                <div id="tarotcard-title">
                    <span className="dimond-left"><img src="./images/HomePage/deco-diamond-left.svg" alt="" /></span>
                    <h2 id="tarot-title">憑直覺抽一張吧</h2>
                    <span className="dimond-right"><img src="./images/HomePage/deco-diamond-right.svg" alt="" /></span>
                </div>
                <div id="tarotcard-box">
                    <img src="./images/HomePage/tarot-back.svg" className="trcardchild-1" alt="" />
                    <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
                    <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
                    <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
                    <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
                    <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
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
                    <Link to="/Customize1" id='custombtn'>立即訂製</Link>
                </div>
            </section>

            {/* 水晶小百科  */}
            <section id="section-crystaldiscovery">
            </section>

            {/* 礦迷回饋 */}
            <section id="section-feedback">
            </section>
            {/* <div className="coverfooter"><FooterTrn /></div> */}
        </>
    )
}




{/* jquery CDN 要先執行 */ }
< script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous" ></script >
{/* 自訂的js (一定放在最下面) */ }
< script src="./js/script.js" ></script >



