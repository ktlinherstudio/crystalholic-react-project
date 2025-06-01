import './customize1-3.css'
import '../../components/Bglight.css'
import NavBarWrapper from '../../components/NavBarWrapper';
import { useNavigate } from 'react-router-dom';

export default function Customize3() {
  const navigate = useNavigate();

  const handleStartWithRecommend = () => {
    navigate('/Customize4');
  };

  const handleStartWithoutRecommend = () => {
    navigate('/Customize4');
  };

  return (
    <div className="customize3-page">
      <NavBarWrapper variant="dark" />

      <main className="index3">
        {/* 標題 */}
        <div className="text3-wrap">
          <div className="text3">
            <h2>
              <img src="/images/Custom/line_left.svg" alt="" />
              你是？號人 以下為你推薦手鍊 可選擇一條開始設計
              <img src="/images/Custom/line_right.svg" alt="" />
            </h2>
          </div>
        </div>

        {/* 圖 */}
        <ul className="background-2">
          <li><a href="#" className="img1"></a></li>
          <li><a href="#" className="img2"></a></li>
          <li><a href="#" className="img3"></a></li>
        </ul>

        {/* 按鈕 */}
        <div className="button-box3">

          <button className="button2" onClick={handleStartWithoutRecommend}>
            不套用推薦手鍊
          </button>
          <button className="button2" onClick={handleStartWithRecommend}>
            套用推薦手鍊
          </button>
        </div>
      </main>
    </div>
  );
}
