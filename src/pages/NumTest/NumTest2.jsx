import './NumTest2.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import { useRef, useState } from 'react';
import '../../components/BgLight.css';
import BgLightAni from '../../components/BgLightAni';
import { useNavigate } from 'react-router-dom';

export default function NumTest2() {
  const navigate = useNavigate();
  const dateInputRef = useRef(null);

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleCalendarChange = (e) => {
    const selected = new Date(e.target.value);
    setYear(String(selected.getFullYear()));
    setMonth(String(selected.getMonth() + 1).padStart(2, '0'));
    setDay(String(selected.getDate()).padStart(2, '0'));
  };

  return (
    <>
      <NavBarWrapper variant="dark" />
      <main className="numtest2" style={{ position: 'relative', overflow: 'hidden' }}>
        <BgLightAni />
        <section className="num2-numtest">
          {/* 第一個標題 */}
          <div className="num2-title-1">
            <img className="num2-decorate-left" src="./images/Numtest/decorate-left.svg" alt="左裝飾" />
            <h3 className="num2-decorate-title">探索適合的水晶</h3>
            <img className="num2-decorate-right" src="./images/Numtest/decorate-right.svg" alt="右裝飾" />
          </div>

          {/* 第二個:主標題 */}
          <h1 className="num2-title-2">請輸入您的西元出生年月日</h1>

          {/* 出生年月日選單 + 日曆 */}
          <div className="num2-date">
            {/* 西元出生年份 */}
            <div className="num2-date-enter">
              <select className="num2-select" required value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="" disabled hidden>yyyy</option>
                {Array.from({ length: 100 }, (_, i) => {
                  const y = 2025 - i;
                  return <option key={y} value={y}>{y}</option>;
                })}
              </select>
              <img className="num2-date-button" src="./images/Numtest/numtest-2_button.svg" alt="西元出生年份" />
            </div>

            {/* 出生月份 */}
            <div className="num2-date-enter">
              <select className="num2-select" required value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="" disabled hidden>mm</option>
                {Array.from({ length: 12 }, (_, i) => {
                  const m = String(i + 1).padStart(2, '0');
                  return <option key={m} value={m}>{m}</option>;
                })}
              </select>
              <img className="num2-date-button" src="./images/Numtest/numtest-2_button.svg" alt="出生月份" />
            </div>

            {/* 出生日期 */}
            <div className="num2-date-enter">
              <select className="num2-select" required value={day} onChange={(e) => setDay(e.target.value)}>
                <option value="" disabled hidden>dd</option>
                {Array.from({ length: 31 }, (_, i) => {
                  const d = String(i + 1).padStart(2, '0');
                  return <option key={d} value={d}>{d}</option>;
                })}
              </select>
              <img className="num2-date-button" src="./images/Numtest/numtest-2_button.svg" alt="出生日期" />
            </div>

            {/* 日曆 icon + 隱藏 input[type=date] */}
            <div className="num2-calendar-wrapper">
              <input
                type="date"
                className="num2-date-input"
                ref={dateInputRef}
                onChange={handleCalendarChange}
              />
              <img
                className="num2-calendar"
                src="./images/Numtest/numtest-2_calendar.svg"
                alt="請選擇您的西元出生年月日"
                onClick={() => dateInputRef.current?.showPicker?.() || dateInputRef.current?.click()}
              />
            </div>
          </div>

          {/* 下一步按鈕 */}
          <button
            className="num2-button"
            onClick={() => {
              if (year && month && day) {
                sessionStorage.setItem('numtest2-completed', 'true'); //  記錄按過
                navigate('/NumTest3');
              } else {
                alert('請完整填寫出生年月日');
              }
            }}
          >
            輸入完成
          </button>

        </section>
      </main>
    </>
  );
}
