import './NumTest2.css';
import NavBarDark from '../../components/NavBarDark';

function App() {
    return (
        <>
            <NavBarDark />
            <main>
                <section className="numtest">
                    {/* 第一個標題 */}
                    <div id="title-1">
                        <img className="decorate-left" src="/images/Numtest/decorate-left.svg" alt="左裝飾" />
                        <h3 className="decorate-title">探索適合的水晶</h3>
                        <img className="decorate-right" src="/images/Numtest/decorate-right.svg" alt="右裝飾" />
                    </div>

                    {/* 第二個:主標題 */}
                    <h1 id="title-2">請輸入您的西元出生年月日</h1>

                    {/* 填入西元出生年月日 */}
                    <div id="date">
                        {/* 西元出生年份 */}
                        <div className="date-enter">
                            <span>yyyy</span>
                            <img className="date-button" src="/images/Numtest/numtest-2_button.svg" alt="西元出生年份" />
                        </div>

                        {/* 出生月份 */}
                        <div className="date-enter">
                            <span>mm</span>
                            <img className="date-button" src="/images/Numtest/numtest-2_button.svg" alt="出生月份" />
                        </div>

                        {/* 出生日期 */}
                        <div className="date-enter">
                            <span>dd</span>
                            <img className="date-button" src="/images/Numtest/numtest-2_button.svg" alt="出生日期" />
                        </div>

                        {/* 日曆icon */}
                        <img className="calendar" src="/images/Numtest/numtest-2_calendar.svg" alt="請選擇您的西元出生年月日" />
                    </div>

                    {/* 按鈕 */}
                    <button id="button">輸入完成</button>
                </section>
            </main>
        </>
    )
} export default App