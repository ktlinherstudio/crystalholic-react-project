import './NumTest1.css'; 
import NavBarDark from '../../components/NavBarDark';

function App(){
    return(
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

                    {/* 第二個標題 */}
                    <h1 id="title-2">生命靈數測驗</h1>

                    {/* 按鈕 */}
                    <button id="button">START!</button>
                </section>
            </main>
        </>
    )
}export default App