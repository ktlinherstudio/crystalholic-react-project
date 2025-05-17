import './customize1-3.css'
import '../../components/Bglight.css'
import NavBarDark from '../../components/NavBarDark'

export default function Customize1() {
    return (
        <div className="customize1-page">
            <NavBarDark />

            <main className="index">
                <div className="text-j">
                    <h2>你的水晶 ∞ 你的故事</h2>
                    <p className='content-j'>
                        量身訂製專屬飾品，為生活注入正能量<br />
                        自己串串看，或是交給 Crystalholic<br />
                        為自己或重要的人，設計一份獨特又美麗的水晶祝福！
                    </p>
                </div>
                <div className="button-box">
                    <button className="button1">DIY 水晶手鍊</button>
                    <button className="button1">其他訂製需求</button>
                </div>
            </main>

        </div>
    )
}