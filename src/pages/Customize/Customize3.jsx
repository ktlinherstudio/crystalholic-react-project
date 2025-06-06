import './customize1-3.css'
import '../../components/Bglight.css'
import NavBarWrapper from '../../components/NavBarWrapper';
import CopyrightNotice from '../../components/CopyrightNotice'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { resultCrystalMap } from '../../utils/resultCrystalMap';
import { generateBraceletLayout, calculateRadius, calculateBeadAngles } from '../../utils/generateBraceletLayout';


export default function Customize3() {
  //取得生命靈數測驗結果
  const [lifePathNumber, setLifePathNumber] = useState(null);

  useEffect(() => {
    const storedNumber = sessionStorage.getItem('lifePathNumber');
    if (storedNumber) {
      setLifePathNumber(Number(storedNumber));
    }
  }, []);

  const navigate = useNavigate();

  //推薦手鍊
  const crystalSize = 8;
  const wristSize = 16;
  const layout = generateBraceletLayout(crystalSize, wristSize);
  const radius = calculateRadius(wristSize) * 6;
  const angles = calculateBeadAngles(layout, crystalSize);

  //推薦手鍊hover及點擊效果
  const [hoveredBracelet, setHoveredBracelet] = useState(null);
  const [selectedBracelet, setSelectedBracelet] = useState(null);
  // 取得推薦水晶（假設 resultCrystalMap[7].crystals 是陣列）
  const recommendedCrystals = resultCrystalMap[lifePathNumber]?.crystals.slice(0, 3); // 取前3顆
  //點擊後將推薦水晶存入 sessionStorage
  const handleStartWithoutRecommend = () => {
    sessionStorage.removeItem('recommendedCrystal');
    sessionStorage.removeItem('shouldApplyRecommend');
    sessionStorage.setItem('designMode', 'custom'); // ✅ 加入這行
    navigate('/Customize4');
  };

  const handleStartWithRecommend = () => {
    if (!selectedCrystal) {
      alert('請先點選一條推薦手鍊！');
      return;
    }

    sessionStorage.setItem('recommendedCrystal', JSON.stringify(selectedCrystal));
    sessionStorage.setItem('shouldApplyRecommend', 'true');
    sessionStorage.setItem('designMode', 'recommend');

    // 預設金屬珠為 ball3
    sessionStorage.setItem('recommendedMetalImage', './images/Custom/ball3.png');

    navigate('/Customize4');
  };



  const [selectedCrystal, setSelectedCrystal] = useState(null);
  const handleSelectCrystal = (crystal) => {
    setSelectedCrystal(crystal);
  };


  return (
    <div className="customize3-page">
      <NavBarWrapper variant="dark" />

      <div className='copyrightNotice'>
        <main className="index3">
          {/* 標題 */}
          <div className="text3-wrap">
            <div className="text3">
              <h2>
                <img src="/images/Custom/line_left.svg" alt="" />
                {lifePathNumber && (
                  <p className="sub-title">你的生命靈數是 {lifePathNumber} 號，點擊一條手鍊開始設計</p>
                )}
                <img src="/images/Custom/line_right.svg" alt="" />
              </h2>
            </div>
          </div>

          {/* 推薦手鍊展示 */}

          <div className="bracelet-preview-wrap">
            {recommendedCrystals?.map((crystal, idx) => {
              let accumulatedAngle = 0;
              return (
                <div
                  key={idx}
                  className="bracelet-preview"
                  onMouseEnter={() => setHoveredBracelet(idx)}
                  onMouseLeave={() => setHoveredBracelet(null)}
                  onClick={() => {
                    setSelectedBracelet(idx);
                    handleSelectCrystal(crystal);
                  }}
                  style={{
                    cursor: 'pointer',
                    transform: selectedBracelet === idx ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <svg viewBox="0 0 480 480" width="360" height="360" className="bracelet-svg">
                    <defs>
                      {layout.map((bead, i) => {
                        const isCrystal = bead === 'crystal';
                        const imgSrc = isCrystal ? crystal.image : "/images/Custom/ball3.png";
                        return (
                          <pattern id={`img-${idx}-${i}`} key={i} patternUnits="objectBoundingBox" width="1" height="1" >
                            <image href={imgSrc} width="48" height="48" preserveAspectRatio="xMidYMid slice" />
                          </pattern>
                        );
                      })}
                    </defs>

                    {layout.map((bead, i) => {
                      accumulatedAngle += angles[i];
                      const rad = (accumulatedAngle * Math.PI) / 180;
                      const cx = 240 + radius * Math.cos(rad);
                      const cy = 240 + radius * Math.sin(rad);

                      const isCrystal = bead === 'crystal';
                      const size = isCrystal ? 50 : 30;

                      return (
                        <image
                          key={i}
                          href={isCrystal ? crystal.image : "/images/Custom/ball3.png"}
                          x={cx - size / 2}
                          y={cy - size / 2}
                          width={size}
                          height={size}
                          style={{
                            transform:
                              hoveredBracelet === idx || selectedBracelet === idx ? 'scale(1.1)' : 'scale(1)',
                            filter:
                              hoveredBracelet === idx || selectedBracelet === idx
                                ? 'drop-shadow(0 0 4px #A67CEB)'
                                : 'none',
                            transition: 'transform 0.3s ease, filter 0.3s ease',
                            transformOrigin: 'center center',
                          }}
                        />
                      );
                    })}
                  </svg>
                  {/* <p className="bracelet-label">{crystal.name}</p> */}
                </div>
              );
            })}
          </div>



          {/* 按鈕 */}
          <div className="button-box3">

            <button className="button2" onClick={handleStartWithoutRecommend}>
              自由設計
            </button>
            <button className="button2" onClick={handleStartWithRecommend}>
              套用推薦
            </button>
          </div>
        </main>
        <CopyrightNotice />
      </div>
    </div>
  );
}
