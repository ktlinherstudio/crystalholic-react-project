import './NumTest1.css'; 
import NavBarDark from '../../components/NavBarDark';
import { useNavigate } from 'react-router-dom';

export default function NumTest1() {
  const navigate = useNavigate();

  return (
    <>
      <NavBarDark />
      <main className="numtest1">
        <section className="num1-numtest">
          {/* 第一個標題 */}
          <div className="num1-title-1">
            <img className="num1-decorate-left" src="/images/Numtest/decorate-left.svg" alt="左裝飾" />
            <h3 className="num1-decorate-title">探索適合的水晶</h3>
            <img className="num1-decorate-right" src="/images/Numtest/decorate-right.svg" alt="右裝飾" />
          </div>

          {/* 第二個標題 */}
          <h1 className="num1-title-2">生命靈數測驗</h1>

          {/* 按鈕 */}
          <button className="num1-button" onClick={() => navigate('/NumTest2')}>
            START!
          </button>
        </section>
      </main>
    </>
  );
}
