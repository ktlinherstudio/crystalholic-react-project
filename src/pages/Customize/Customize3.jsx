import './customize1-3.css'
import '../../components/Bglight.css'
import NavBarDark from '../../components/NavBarDark'

export default function Customize3() {
    return (
        <div className="customize3-page">
            <NavBarDark />

            <main className="index3">
                {/* 標題 */}
                <div className="text3-wrap">
                    <div className="text3">
                        <h2>
                            <img src="/public/images/Custom/line_left.svg" alt="" />
                            選擇一條推薦手鍊
                            <img src="/public/images/Custom/line_right.svg" alt="" />
                        </h2>
                    </div>
                </div>
                {/* 圖 */}
                <div className="background-2">
                    <img className='img1' src="/public/images/Custom/custom-bracelet-recommend-1.png" alt="" />
                    <img className='img2' src="/public/images/Custom/custom-bracelet-recommend-2.png" alt="" />
                    <img className='img3' src="/public/images/Custom/custom-bracelet-recommend-3.png" alt="" />
                </div>
                {/* 按鈕 */}
                <div className="button-box3">
                    <button className="button2">開始DIY</button>
                </div>
            </main>

        </div>
    )
}