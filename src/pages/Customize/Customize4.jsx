import style from './Customize4.module.css'
import '../../components/NumTestBg.css'
import NavBarWrapper from '../../components/NavBarWrapper';
import { useEffect, useState, useMemo } from 'react';

import CustomizeInfoModal from '../../components/Customize/CustomizeInfoModal';

import { generateBraceletLayout, calculateRadius, calculateBeadAngles } from '../../utils/generateBraceletLayout';




export default function Customize4() {
    const [showInfo, setShowInfo] = useState(true);

    useEffect(() => {
        setShowInfo(true);
    }, []);

    //尺寸及畫布設定
    const [selectedSize, setSelectedSize] = useState(8); // 預設 8mm
    const [wristSize, setWristSize] = useState(16);
    const [braceletBeads, setBraceletBeads] = useState(generateBraceletLayout(8));

    const handleConfirm = () => {
        const newLayout = generateBraceletLayout(selectedSize, wristSize);
        setBraceletBeads(newLayout);
    };

    //滑動手圍尺寸立即重繪
    useEffect(() => {
        const newLayout = generateBraceletLayout(selectedSize, wristSize);
        setBraceletBeads(newLayout);
    }, [selectedSize, wristSize]);

    // 根據手圍計算半徑
    const braceletRadius = useMemo(() => {
        return calculateRadius(wristSize) * 1.1;
    }, [wristSize]);

    const scale = 6; // 視覺放大比例

    //在 useMemo 裡取得角度陣列
    const beadAngles = useMemo(() => {
        return calculateBeadAngles(braceletBeads, selectedSize);
    }, [braceletBeads, selectedSize]);




    return (
        <>
            <CustomizeInfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />
            <NavBarWrapper variant="dark" />
            {/* 內容 */}
            <main className={style.index}>
                {/* 預載icon hover按鈕(解決重整頁面hover狀態前的閃爍問題) */}
                <div className={style.preload} />

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
                                {[8, 10].map(size => (
                                    <button
                                        key={size}
                                        className={`${style.button} ${selectedSize === size ? style.active : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}mm
                                    </button>
                                ))}
                            </div>


                        </div>

                        <div className={style.ringSizeBox}>
                            <div className={style.ringSize}>
                                <p>手圍尺寸：</p>
                            </div>
                            <div className={style.ringSizeSlider}>
                                <input
                                    type="range"
                                    className={style.sliderInput}
                                    min="13"
                                    max="18"
                                    step="1"
                                    value={wristSize}
                                    onChange={(e) => setWristSize(Number(e.target.value))}
                                />
                            </div>
                            <div className={style.ringSizeValueBox}>
                                <p className={style.sizeValue}>{wristSize}cm</p>
                            </div>

                        </div>

                        <div className={style.ringJewelryBox}>
                            <div className={style.ringJewelry}>
                                <p>手鍊配飾：</p>
                            </div>
                            <div className={style.imagesBox}>
                                <img src="./images/Custom/ball1.png" alt="" />
                                <img src="./images/Custom/ball2.png" alt="" />
                                <img src="./images/Custom/ball3.png" alt="" />
                                <img src="./images/Custom/ball4.png" alt="" />
                            </div>
                        </div>
                        <button className={style.button} onClick={handleConfirm}>
                            確定
                        </button>
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
                            <img className={style.bead} src="./images/S-CrystalSingle/crystal-moonstone.png" alt="" />
                            <img className={style.bead} src="./images/S-CrystalSingle/crystal-pinkquartz.png" alt="" />
                            <img className={style.bead} src="./images/S-CrystalSingle/crystal-golden-strawberry-quartz.png" alt="" />
                            <img className={style.bead} src="./images/S-CrystalSingle/crystal-citrine.png" alt="" />
                            <img className={style.bead} src="./images/S-CrystalSingle/crystal-sunstone.png" alt="" />
                            <img className={style.bead} src="./images/S-CrystalSingle/crystal-green-phantom.png" alt="" />
                            <img className={style.bead} src="./images/S-CrystalSingle/crystal-angelite.png" alt="" />
                            <img className={style.bead} src="./images/S-CrystalSingle/crystal-kyanite.png" alt="" />
                            <img className={style.bead} src="./images/S-CrystalSingle/crystal-lilac-amethyst.png" alt="" />
                            <span className={style.bead}></span>
                            <span className={style.bead}></span>
                            <span className={style.bead}></span>
                        </div>
                    </div>
                </div>

                <div className={style.boxs2}>
                    {/* 手鏈 */}
                    <div

                        className={style.bracelet}
                        style={{
                            width: `${braceletRadius * 2 * scale}px`,
                            height: `${braceletRadius * 2 * scale}px`,
                        }}
                    >
                       {(() => {
  let accumulatedAngle = 0;

  return braceletBeads.map((bead, index) => {
    const isMetal = bead === "metal";
    const size = isMetal ? 6 : selectedSize;
    const angle = beadAngles[index];
    const offset = (size * scale) / 2;

    accumulatedAngle += angle;

    return (
      <span
        key={index}
        style={{
          width: `${size * scale}px`,
          height: `${size * scale}px`,
          backgroundColor: isMetal ? "#ccc" : "#a78dbb",
          position: "absolute",
          top: "50%",
          left: "50%",
          borderRadius: "50%",
          transform: `
            rotate(${accumulatedAngle}deg)
            translate(${braceletRadius * scale}px)
            rotate(-${accumulatedAngle}deg)
            translate(-${offset}px, -${offset}px)
          `,
          transformOrigin: "0 0",
        }}
      />
    );
  });
})()}





                        <div className={style.iconBox1}>
                            <div className={style.btnDel}></div>
                            <div className={style.btnSave}></div>
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
                        <img className={style.icon2_1} src="./images/Custom/btn_cart_tool.svg" alt="" />
                        <p>加購物車</p>
                    </div>
                </div>
            </main>
        </>
    )
}
