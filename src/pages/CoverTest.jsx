import { useEffect, useRef, useState } from 'react';
import '../App.scss/css/Style.min.css'
import NavBarLight from '../components/NavBarLight'
import FooterPlain from '../components/FooterPlain'
import BgDarkBlock from '../components/BgDarkBlock'
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

export default function Cover() {
    const [showCover, setShowCover] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const controlsSecond = useAnimation();

    useEffect(() => {
        const handleWheel = (e) => {
            if (window.scrollY > 50 || isAnimating) return;

            e.preventDefault();
            setIsAnimating(true);

            if (e.deltaY > 0 && showCover) {
                // 向下滾動時退場 Cover、進場第二頁
                setShowCover(false);
                controlsSecond.start({
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 }
                });
                setTimeout(() => {
                    setIsAnimating(false);
                }, 1000);
            }

            if (e.deltaY < 0 && !showCover) {
                // 向上滾動時回來 Cover
                controlsSecond.start({
                    opacity: 0,
                    y: 100,
                    transition: { duration: 1 }
                });
                setTimeout(() => {
                    setShowCover(true);
                    setIsAnimating(false);
                }, 1000);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [showCover, isAnimating, controlsSecond]);


    return (
        <>
            {/* <div id='color'>做RWD用 之後會拿掉 */}
            {/* <div id='color'> */}
            {/* 背景 */}
            <div id='coverbg'>
                <div className="bgdark1"><BgDarkBlock /></div>
                <div className="bgdark2"><BgDarkBlock /></div>
            </div>
            {/* menu bar*/}
            <NavBarLight />

            {/* 封面1  */}
            <AnimatePresence>
                {showCover && (
                    <motion.section className='ch-cover'
                        initial={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100, transition: { duration: 1 } }}
                        key="cover">
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
                    </motion.section>
                )}
            </AnimatePresence>

            {/* 封面2 */}
            <motion.section className="section-starttest"
                initial={{ opacity: 0, y: 100 }}
                animate={controlsSecond}>
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
        </>
    )
}
