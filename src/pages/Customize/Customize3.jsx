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
                <ul className="background-2">
                    <li><a href="#" className='img1'></a></li>
                    <li><a href="#" className='img2'></a></li>
                    <li><a href="#" className='img3'></a></li>
                </ul>
                {/* 按鈕 */}
                <div className="button-box3">
                    <button className="button2">開始DIY</button>
                </div>
            </main>

        </div>
    )
}