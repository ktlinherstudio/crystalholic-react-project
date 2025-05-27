import './customize4.css'
import '../../components/NumTestBg.css'
import NavBarWrapper from '../../components/NavBarDark'

export default function Customize4() {
    return (
        <>
            <NavBarWrapper variant="dark" />
            {/* 內容 */}
            <main className="index">
                <div className="boxs">
                    {/* 名稱欄 */}
                    <div className="name">
                        <div className="title-name">
                            <p>✦ 幫我取個名吧 ✦</p>
                        </div>
                        <div className="input-name-box">
                            <input type="text" className="input-name" placeholder="－請輸入手鍊名稱－" />
                        </div>
                    </div>
                    {/* 尺寸設定 */}
                    <div className="size-box">
                        <div className="title-size">
                            <p>尺寸設定</p>
                        </div>

                        <hr className="line" />

                        <div className="crystal-size-box">
                            <div className="crystal-size">
                                <p>水晶大小：</p>
                            </div>
                            <div className="crystal-size-buttons">
                                <button className="button">6mm</button>
                                <button className="button">8mm</button>
                            </div>
                        </div>

                        <div className="ring-size-box">
                            <div className="ring-size">
                                <p>手圍尺寸：</p>
                            </div>
                            <div className="ring-size-slider">
                                <input type="range" className="slider_input" min="0" max="100" />
                            </div>
                            <div className="ring-size-value-box">
                                <p className="size-value">16cm</p>
                            </div>
                        </div>

                        <div className="ring-jewelry-box">
                            <div className="ring-jewelry">
                                <p>手鍊配飾：</p>
                            </div>
                            <div className="images-box">
                                <img src="../images/金屬球-香檳色.png" alt="" />
                                <img src="../images/金屬球-銅色.png" alt="" />
                                <img src="../images/金屬球-銀色.png" alt="" />
                                <img src="../images/金屬球-深黑色.png" alt="" />
                            </div>
                        </div>
                    </div>


                    {/* 單顆水晶列表 */}
                    <div id="bead-window">
                        <nav className="tabs">

                            <button className="tab">風格4</button>
                            <hr />
                            <button className="tab">風格3</button>
                            <hr />
                            <button className="tab">風格2</button>
                            <hr />
                            <button className="tab">風格1</button>
                        </nav>

                        <div className="bead-grid">
                            <img className="bead" src="../images/單顆水晶/月光石.png" alt="" />
                            <img className="bead" src="../images/單顆水晶/粉水晶.png" alt="" />
                            <img className="bead" src="../images/單顆水晶/金草莓晶.png" alt="" />
                            <img className="bead" src="../images/單顆水晶/黃水晶.png" alt="" />
                            <img className="bead" src="../images/單顆水晶/太陽石.png" alt="" />
                            <img className="bead" src="../images/單顆水晶/綠幽靈.png" alt="" />
                            <img className="bead" src="../images/單顆水晶/天使石.png" alt="" />
                            <img className="bead" src="../images/單顆水晶/藍晶石.png" alt="" />
                            <img className="bead" src="../images/單顆水晶/紫水晶.png" alt="" />
                            <span className="bead"></span>
                            <span className="bead"></span>
                            <span className="bead"></span>
                        </div>

                    </div>
                </div>

                <div className="boxs2">
                    {/* 手鏈 */}
                    <div className="bracelet">
                        {/* 依序放 32 顆珍珠，奇數大珠、偶數小珠 */}
                        {/* 用 inline style 設定 --i 角度索引，0~31 */}
                        {/* 大珠（16 顆） */}
                        <span className="pearl big" style="--i:0"></span>
                        <span className="pearl small" style="--i:1"></span>
                        <span className="pearl big" style="--i:2"></span>
                        <span className="pearl small" style="--i:3"></span>
                        <span className="pearl big" style="--i:4"></span>
                        <span className="pearl small" style="--i:5"></span>
                        <span className="pearl big" style="--i:6"></span>
                        <span className="pearl small" style="--i:7"></span>
                        <span className="pearl big" style="--i:8"></span>
                        <span className="pearl small" style="--i:9"></span>
                        <span className="pearl big" style="--i:10"></span>
                        <span className="pearl small" style="--i:11"></span>
                        <span className="pearl big" style="--i:12"></span>
                        <span className="pearl small" style="--i:13"></span>
                        <span className="pearl big" style="--i:14"></span>
                        <span className="pearl small" style="--i:15"></span>
                        <span className="pearl big" style="--i:16"></span>
                        <span className="pearl small" style="--i:17"></span>
                        <span className="pearl big" style="--i:18"></span>
                        <span className="pearl small" style="--i:19"></span>
                        <span className="pearl big" style="--i:20"></span>
                        <span className="pearl small" style="--i:21"></span>
                        <span className="pearl big" style="--i:22"></span>
                        <span className="pearl small" style="--i:23"></span>
                        <span className="pearl big" style="--i:24"></span>
                        <span className="pearl small" style="--i:25"></span>
                        <span className="pearl big" style="--i:26"></span>
                        <span className="pearl small" style="--i:27"></span>
                        <span className="pearl big" style="--i:28"></span>
                        <span className="pearl small" style="--i:29"></span>
                        <span className="pearl big" style="--i:30"></span>
                        <span className="pearl small" style="--i:31"></span>
                        {/* 按鈕  */}
                        <div className="icon-box1">
                            <img src="../images/btn-del.svg" alt="" />
                            <img src="../images/btn-save.svg" alt="" />
                        </div>

                    </div>


                    {/* 價格框 */}
                    <div className="price-box">
                        <input className="price" type="number" placeholder="價錢" />
                    </div>
                </div>


                {/* 右側功能欄 */}
                <div className="icon-box2">
                    <div className="icon1-box">
                        <div className="icon1">
                            <img className="icon-btn" src="../images/btn_size_tool.svg" alt="" />
                            <p>手圍測量</p>
                        </div>
                        <hr />
                        <div className="icon1">
                            <img className="icon-btn" src="../images/btn_ans_tool.svg" alt="" />
                            <p> 測驗結果</p>
                        </div>
                        <hr />
                        <div className="icon1">
                            <img className="icon-btn" src="../images/btn_knowl_tool.svg" alt="" />
                            <p>水晶百科</p>
                        </div>
                        <hr />
                        <div className="icon1">
                            <img className="icon-btn" src="../images/btn_note_tool.svg" alt="" />
                            <p>注意事項</p>
                        </div>
                        <hr />
                        <div className="icon1">
                            <img className="icon-btn" src="../images/btn_dum_tool.svg" alt="" />
                            <p>特別訂製</p>
                        </div>
                    </div>

                    {/* 購物按鈕 */}
                    <div className="icon2">
                        <img className="icon2-1" src="../images/btn_cart_tool.svg" alt="" />
                        <p>加購物車</p>
                    </div>
                </div>
            </main>

        </>
    )
}