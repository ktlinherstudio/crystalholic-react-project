import './customize1-3.css'
import '../../components/Bglight.css'
import NavBarDark from '../../components/NavBarDark'

export default function Customize2() {
    return (
        <div className="customize2-page">
            <NavBarDark />

            <main className="index2">
                <div className="text2">
                    <h2>
                        <img src="/public/images/Custom/line_left.svg" alt="" />
                        客製專屬自己的手鍊
                        <img src="/public/images/Custom/line_right.svg" alt="" />
                    </h2>
                </div>
                <div className="button-box2">
                    <button className="button1">測驗獲得推薦結果</button>
                    <button className="button1">直接開始設計</button>
                </div>
                <div className="background-1">
                    <img src="/public/images/Custom/custom-bracelet-blur.svg" alt="" />
                </div>
            </main>

        </div>
    )
}