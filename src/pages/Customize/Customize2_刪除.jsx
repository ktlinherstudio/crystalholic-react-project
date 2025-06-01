import './customize1-3.css'
import '../../components/Bglight.css'
import NavBarWrapper from '../../components/NavBarWrapper';
import { useNavigate } from 'react-router-dom';

export default function Customize2() {
  const navigate = useNavigate();

  return (
    <div className="customize2-page">
     <NavBarWrapper variant="dark" />

      <main className="index2">
        <div className="text2">
          <h2>
            <img src="./images/Custom/line_left.svg" alt="" />
            客製專屬自己的手鍊
            <img src="./images/Custom/line_right.svg" alt="" />
          </h2>
        </div>

        <div className="button-box2">
          <button className="button1" onClick={() => navigate('/NumTest1')}>
            測驗獲得推薦結果
          </button>
          <button className="button1" onClick={() => navigate('/Customize4')}>
            直接開始設計
          </button>
        </div>

        <div className="background-1">
          <img src="./images/Custom/custom-bracelet-blur.svg" alt="" />
        </div>
      </main>
    </div>
  );
}
