import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import BgDarkBlock from '../../components/BgDarkBlock'
import '../../App.scss/css/Style.min.css'

export default function CoverTest() {

    // cover1淡入
    const [show, setShow] = useState(true);
    // 自動在 1.5 秒後淡出
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    //cover2 滑入
    // const [hide, setHide] = useState(false);

    // const handleWheel = () => {
    //     setHide(true);
    // };
    // const [showCover2, setShowCover2] = useState(false);

    // const handleWheel = () => {
    //     setShowCover2(true); // 滾動後觸發第二頁淡入
    // };
    const [showFirstPage, setShowFirstPage] = useState(true);
    const [scrollTriggered, setScrollTriggered] = useState(false)

    const handleWheel = () => {
        setScrollTriggered(true)
    }




    return (
        <>
            <div id='coverbg'>
                <div className="bgdark1"><BgDarkBlock /></div>
                {/* <div className="bgdark2"><BgDarkBlock /></div> */}
            </div>
            {/* menu bar*/}

            {/* <NavBarWrapper variant="light" /> */}

            {/* 封面1  */}
            {showFirstPage && (
                <motion.section className='ch-cover'
                    onWheel={handleWheel}
                    initial={{ opacity: 1, y: 0 }}
                    animate={scrollTriggered ? { opacity: 0, y: 0 } : {}}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    {show && (
                        <motion.div className="cover-box"
                            initial={{ opacity: 0 }}         // 初始狀態：透明
                            animate={{ opacity: 1 }}         // 最終狀態：完全不透明
                            transition={{ duration: 3 }}     // 淡入時間 1 秒
                        >
                            <span><img src="./images/HomePage/deco-diamond.svg" className="deco1" alt="" /></span>
                            <h2>
                                <span className="cover1">匠心嚴選 靈韻手作</span>
                                <span className="cover2">打造專屬你的能量水晶</span>
                            </h2>
                            <span><img src="./images/HomePage/deco-diamond.svg" className="deco2" alt="" /></span>
                            <span><img src="./images/HomePage/deco-diamond.svg" className="deco3" alt="" /></span>
                            <span><img src="./images/HomePage/scroll.svg" className="scroll" alt="" /></span>
                        </motion.div>
                    )
                    }
                </motion.section >
            )}

            {/* 封面2 */}
            {scrollTriggered && (
                <motion.section className="section-starttest"
                    initial={{ opacity: 0, y: 0 }}
                    animate={scrollTriggered ? { opacity: 1, y: -800 } : {}}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <div className="startbox1">
                        <img src="./images/HomePage/L.svg" className="lefth" alt="" />
                        <div className="startbtn"><a href="#"><img src="./images/HomePage/start-test-btn.svg" alt="" /></a> </div>
                        <img src="./images/HomePage/R.svg" className="righth" alt="" />
                        <span className="bling"><img src="./images/HomePage/deco-bling2.svg" alt="" /></span>
                        <span className="numbg"><img src="./images/HomePage/deco-num-bg.svg" alt="" /></span>
                    </div>
                    <div className="startbox2">
                        <p>讓水晶傾聽心聲，編織你獨一無二的手鍊。</p>
                        <div><img src="./images/HomePage/scroll.svg" alt="" /></div>
                    </div>
                </motion.section>
            )}
            {/* 憑直覺抽一張吧 */}
            <motion.section id="section-tarotcard"
                initial={{ opacity: 1, y: 0 }}
                animate={scrollTriggered ? { opacity: 1, y: -800 } : {}}
                transition={{ duration: 0}}>
                <div className="tarotcard">
                    <h2 id="tarotcard-title">
                        <span className="dimond-left"><img src="./images/HomePage/deco-diamond-left.svg" alt="" /></span>
                        <div id="tarot-title">憑直覺抽一張吧</div>
                        <span className="dimond-right"><img src="./images/HomePage/deco-diamond-right.svg" alt="" /></span>
                    </h2>
                    <div id="tarotcard-box">
                        <img src="./images/HomePage/tarot-back.svg" className="trcardchild-1" alt="" />
                        <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
                        <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
                        <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
                        <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
                        <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
                    </div>
                    <button id="tarotcard-btn"><a href="#">所有商品</a></button>
                </div>
            </motion.section>
        </>
    )
}
