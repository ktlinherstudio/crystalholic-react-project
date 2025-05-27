import style from './Customize4.module.css'
import '../../components/NumTestBg.css'
import NavBarWrapper from '../../components/NavBarDark'
import { useEffect, useState } from 'react';
import CustomizeInfoModal from '../../components/Customize/CustomizeInfoModal';



export default function Customize4() {
    const [showInfo, setShowInfo] = useState(true);

    useEffect(() => {
        setShowInfo(true);
    }, []);

    return (
        <>
            <CustomizeInfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />
            <NavBarWrapper variant="dark" />
            {/* 內容 */}
            <main className={style.index}>
                <div className={style.boxs}>
                    {/* 名稱欄 */}
                    <div className={style.name}>
                        <div className={style.titleName}>
                            <p>✦ 幫我取個名吧 ✦</p>
                        </div>
                        <div className={style.inputNameBox}>
                            <input type="text" className={style.inputName} placeholder="－請輸入手鍊名稱－" />
                        </div>
                    </div>

                    {/* 尺寸設定 */}
                    <div className={style.sizeBox}>
                        <div className={style["title-size"]}>
                            <p>尺寸設定</p>
                        </div>

                        <hr className={style.line} />

                        <div className={style.crystalSizeBox}>
                            <div className={style.crystalSize}>
                                <p>水晶大小：</p>
                            </div>
                            <div className={style.crystalSizeButtons}>
                                <button className={style.button}>6mm</button>
                                <button className={style.button}>8mm</button>
                            </div>
                        </div>

                        <div className={style.ringSizeBox}>
                            <div className={style.ringSize}>
                                <p>手圍尺寸：</p>
                            </div>
                            <div className={style.ringSizeSlider}>
                                <input type="range" className={style.sliderInput} min="0" max="100" />
                            </div>
                            <div className={style.ringSizeValueBox}>
                                <p className={style.sizeValue}>16cm</p>
                            </div>
                        </div>

                        <div className={style.ringJewelryBox}>
                            <div className={style.ringJewelry}>
                                <p>手鍊配飾：</p>
                            </div>
                            <div className={style.imagesBox}>
                                <img src="./public/images/Custom/ball1.png" alt="" />
                                <img src="./public/images/Custom/ball2.png" alt="" />
                                <img src="./public/images/Custom/ball3.png" alt="" />
                                <img src="./public/images/Custom/ball4.png" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* 單顆水晶列表 */}
                    <div id={style.beadWindow}>
                        <nav className={style.tabs}>
                            <button className={style.tab}>澄語之藍</button>
                            <hr />
                            <button className={style.tab}>秘境探光</button>
                            <hr />
                            <button className={style.tab}>四季琉波</button>
                            <hr />
                            <button className={style.tab}>微醺晶釀</button>
                        </nav>

                        <div className={style.beadGrid}>
                            <img className={style.bead} src="./public/images/S-CrystalSingle/crystal-moonstone.png" alt="" />
                            <img className={style.bead} src="./public/images/S-CrystalSingle/crystal-pinkquartz.png" alt="" />
                            <img className={style.bead} src="./public/images/S-CrystalSingle/crystal-golden-strawberry-quartz.png" alt="" />
                            <img className={style.bead} src="./public/images/S-CrystalSingle/crystal-citrine.png" alt="" />
                            <img className={style.bead} src="./public/images/S-CrystalSingle/crystal-sunstone.png" alt="" />
                            <img className={style.bead} src="./public/images/S-CrystalSingle/crystal-green-phantom.png" alt="" />
                            <img className={style.bead} src="./public/images/S-CrystalSingle/crystal-angelite.png" alt="" />
                            <img className={style.bead} src="./public/images/S-CrystalSingle/crystal-kyanite.png" alt="" />
                            <img className={style.bead} src="./public/images/S-CrystalSingle/crystal-lilac-amethyst.png" alt="" />
                            <span className={style.bead}></span>
                            <span className={style.bead}></span>
                            <span className={style.bead}></span>
                        </div>
                    </div>
                </div>

                <div className={style.boxs2}>
                    {/* 手鏈 */}
                    <div className={style.bracelet}>
                        {/* 依序放 32 顆珍珠，奇數大珠、偶數小珠 */}
                        {/* 用 inline style 設定 --i 角度索引，0~31 */}
                        {/* 大珠（16 顆） */}
                        <span className={style.pearlBig} style={{ '--i': 0 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 1 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 2 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 3 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 4 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 5 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 6 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 7 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 8 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 9 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 10 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 11 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 12 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 13 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 14 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 15 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 16 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 17 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 18 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 19 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 20 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 21 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 22 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 23 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 24 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 25 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 26 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 27 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 28 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 29 }}></span>
                        <span className={style.pearlBig} style={{ '--i': 30 }}></span>
                        <span className={style.pearlSmall} style={{ '--i': 31 }}></span>

                        {/* 按鈕  */}
                        <div className={style.iconBox1}>
                            <img src="./public/images/Custom/btn-del.svg" alt="" />
                            <img src="./public/images/Custom/btn-save.svg" alt="" />
                        </div>
                    </div>

                    {/* 價格框 */}
                    <div className={style.priceBox}>
                        <input className={style.price} type="number" placeholder="價錢" />
                    </div>
                </div>

                {/* 右側功能欄 */}
                <div className={style.iconBox2}>
                    <div className={style.icon1Box}>
                        <div className={style.icon1}>
                            <div className={style.iconBtn1}></div>
                            <p>手圍測量</p>
                        </div>
                        <hr className={style.line2} />
                        <div className={style.icon1}>
                            <div className={style.iconBtn2}></div>
                            <p> 測驗結果</p>
                        </div>
                        <hr className={style.line2} />
                        <div className={style.icon1}>
                            <div className={style.iconBtn3}></div>
                            <p>水晶百科</p>
                        </div>
                        <hr className={style.line2} />
                        <div className={style.icon1}>
                            <div className={style.iconBtn4}></div>
                            <p>注意事項</p>
                        </div>
                        <hr className={style.line2} />
                        <div className={style.icon1}>
                            <div className={style.iconBtn5}></div>
                            <p>特別訂製</p>
                        </div>
                    </div>

                    {/* 購物按鈕 */}
                    <div className={style.icon2}>
                        <img className={style.icon2_1} src="./public/images/Custom/btn_cart_tool.svg" alt="" />
                        <p>加購物車</p>
                    </div>
                </div>
            </main>
        </>
    )
}
