import './BgDarkBlock.css'
import { useEffect, useRef } from 'react';
import { createStarsBackground } from '../../public/background-star';

export default function BgDarkBlock() {

    const bgRef = useRef(null);

    useEffect(() => {
        if (bgRef.current) {
            const cleanup = createStarsBackground(bgRef.current);
            console.log("啟動");
            return cleanup;
        }
    }, []);

    return (
        <div>
            <main>
                {/* 星星特效背景 */}
                <div id="bgb-container" ref={bgRef} aria-hidden="true"></div>
                {/* 紫色動畫背景 */}
                <div className="gradient-bgb">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                    result="goo" />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                    <div className="bgb-gradients-container">
                        <div className="g1"></div>
                        <div className="g2"></div>
                        <div className="g3"></div>
                        <div className="g4"></div>
                        <div className="g5"></div>
                        <div className="interactive"></div>
                    </div>
                </div>
            </main >
            {/* 躁點效果背景 */}
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <filter id="f">
                    <feTurbulence type="fractalNoise" baseFrequency="10.8" numOctaves="20" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
            </svg>
            {/* 星星特效背景 js */}
        </div >

    )
}