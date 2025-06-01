import './customize1-3.css'
import '../../components/Bglight.css'
import NavBarWrapper from '../../components/NavBarWrapper';
import { useNavigate } from 'react-router-dom';


export default function Customize1() {
    const navigate = useNavigate();

    const handleClick = () => {
        const hasCompletedNumTest2 = sessionStorage.getItem('numtest2-completed') === 'true';

        if (hasCompletedNumTest2) {
            navigate('/Customize3');
        } else {
            navigate('/NumTest1');
        }
    };

    return (
        <div className="customize1-page">
            <NavBarWrapper variant="dark" />

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
                    <button className="button1" onClick={handleClick}>
                        測驗獲得推薦結果
                    </button>
                    <button className="button1" onClick={() => navigate('/Customize4')}>
                        直接開始設計
                    </button>
                </div>
            </main>
        </div>
    )
}