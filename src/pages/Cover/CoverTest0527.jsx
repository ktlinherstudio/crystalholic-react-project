import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BgDarkBlock from '../../components/BgDarkBlock';
// import '../../App.scss/css/Style.min.css';
import '../../App.scss/css/Style.min.css';
export default function CoverTest() {
    const [showFirstPage, setShowFirstPage] = useState(true);
    const [scrollTriggered, setScrollTriggered] = useState(false);

    // 封面1的淡入動畫控制
    const [show, setShow] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    // 當觸發 scroll 過場動畫時，鎖住 scroll 兩秒
    useEffect(() => {
        if (scrollTriggered) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 2000); // 跟動畫時間一致
        }
    }, [scrollTriggered]);

    // 滾輪觸發動畫
    const handleWheel = (e) => {
        e.preventDefault(); // 阻止預設滾動
        if (!scrollTriggered) {
            setScrollTriggered(true);
        }
    };

    return (
        <>
            {/* 背景裝飾 */}
            <div id='coverbg'>
                <div className="bgdark1"><BgDarkBlock /></div>
            </div>

            {/* 封面1 */}
            {showFirstPage && (
                <motion.section className='ch-cover'
                    onWheel={handleWheel}
                    initial={{ opacity: 1, y: 0 }}
                    animate={scrollTriggered ? { opacity: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {show && (
                        <motion.div className="cover-box"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                        >
                            <span><img src="./images/HomePage/deco-diamond.svg" className="deco1" alt="" /></span>
                            <h2>
                                <span className="cover1">匠心嚴選 靈韻手作</span>
                                <span className="cover2">打造專屬你的能量水晶</span>
                            </h2>
                            <span><img src="./images/HomePage/deco-diamond.svg" className="deco2" alt="" /></span>
                            <span><img src="./images/HomePage/deco-diamond.svg" className="deco3" alt="" /></span>
                            <motion.span
                                initial={{ y: "70vh" }}
                                animate={{ y: ["75vh", "70vh", "75vh"] }}
                                transition={{
                                    delay: 1.5,
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <img src="./images/HomePage/scroll.svg" className="scroll" alt="" />
                            </motion.span>
                        </motion.div>
                    )}
                </motion.section>
            )}

            {/* 封面2（滑入動畫） */}
            {scrollTriggered && (
                <motion.section className="section-starttest"
                    initial={{ opacity: 0, y: "100vh" }}
                    animate={{ opacity: 1, y: "0vh" }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                >
                    <div className="startbox1">
                        <img src="./images/HomePage/L.svg" className="lefth" alt="" />
                        <div className="startbtn"><a href="#"><img src="./images/HomePage/start-test-btn.svg" alt="" /></a></div>
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
        </>
    );
}