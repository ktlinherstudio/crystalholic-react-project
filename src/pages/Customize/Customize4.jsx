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

    useEffect(() => {
        const newLayout = generateBraceletLayout(selectedSize, wristSize);
        setBraceletBeads(newLayout);
    }, [selectedSize, wristSize]);

    const braceletRadius = useMemo(() => {
        return calculateRadius(wristSize) * 1.1;
    }, [wristSize]);

    const scale = 6;

    const beadAngles = useMemo(() => {
        return calculateBeadAngles(braceletBeads, selectedSize);
    }, [braceletBeads, selectedSize]);

    const [selectedMetalImage, setSelectedMetalImage] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState("靈性直覺"); // 預設分類

    const crystalData = {
        靈性直覺: [
            "./images/S-CrystalSingle/crystal-kyanite.png",
            "./images/S-CrystalSingle/crystal-labradorite.png",
            "./images/S-CrystalSingle/crystal-lapislazuli.png",
            "./images/S-CrystalSingle/crystal-sodalite.png",
            "./images/S-CrystalSingle/crystal-bluecalcite.png",
            "./images/S-CrystalSingle/crystal-pietersite.png",
            "./images/S-CrystalSingle/crystal-tanzanite.png",
            "./images/S-CrystalSingle/crystal-amethyst.png",
            "./images/S-CrystalSingle/crystal-albite.png",
            "./images/S-CrystalSingle/crystal-moonstone.png",
            "./images/S-CrystalSingle/crystal-clearquartz.png"
        ],
        專注工作: [
            "./images/S-CrystalSingle/crystal-citrine.png",
            "./images/S-CrystalSingle/crystal-rutile-quartz.png",
            "./images/S-CrystalSingle/crystal-aquamarine.png",
            "./images/S-CrystalSingle/crystal-sodalite.png",
            "./images/S-CrystalSingle/crystal-purplefluorite.png",
            "./images/S-CrystalSingle/crystal-fluorite.png",
            "./images/S-CrystalSingle/crystal-hawkseye.png",
            "./images/S-CrystalSingle/crystal-tigerseye.png",
            "./images/S-CrystalSingle/crystal-green-phantom.png",
            "./images/S-CrystalSingle/crystal-carnelian.png"
        ],
        愛與人際: [
            "./images/S-CrystalSingle/crystal-iolite.png",
            "./images/S-CrystalSingle/crystal-lilac-amethyst.png",
            "./images/S-CrystalSingle/crystal-pinkquartz.png",
            "./images/S-CrystalSingle/crystal-rosequartz.png",
            "./images/S-CrystalSingle/crystal-pinkquartz.png",
            "./images/S-CrystalSingle/crystal-golden-strawberry-quartz.png",
            "./images/S-CrystalSingle/crystal-rubellite.png",
            "./images/S-CrystalSingle/crystal-rhodochrosite.png",
            "./images/S-CrystalSingle/crystal-carnelian.png",
            "./images/S-CrystalSingle/crystal-garnet.png",
            "./images/S-CrystalSingle/crystal-oceanjasper.png"

        ],
        能量防護: [
            "./images/S-CrystalSingle/crystal-blackobsidian.png",
            "./images/S-CrystalSingle/crystal-goldobsidian.png",
            "./images/S-CrystalSingle/crystal-blacktourmaline.png",
            "./images/S-CrystalSingle/crystal-snowflakeobsidian.png",
            "./images/S-CrystalSingle/crystal-blackobsidian.png",
            "./images/S-CrystalSingle/crystal-silversheenobsidian.png",
            "./images/S-CrystalSingle/crystal-hematite.png",
            "./images/S-CrystalSingle/crystal-rhodochrosite.png",
            "./images/S-CrystalSingle/crystal-bloodstone.png",
            "./images/S-CrystalSingle/crystal-tridacna.png",
        ],
        放鬆冥想: [
            "./images/S-CrystalSingle/crystal-pinkcalcite.png",
            "./images/S-CrystalSingle/crystal-amethyst.png",
            "./images/S-CrystalSingle/crystal-iolite.png",
            "./images/S-CrystalSingle/crystal-hackmanite.png",
            "./images/S-CrystalSingle/crystal-celestite.png",
            "./images/S-CrystalSingle/crystal-angelite.png",
            "./images/S-CrystalSingle/crystal-sunstone.png",
            "./images/S-CrystalSingle/crystal-smokyquartz.png",
            "./images/S-CrystalSingle/crystal-greenfluorite.png",
            "./images/S-CrystalSingle/crystal-silversheenobsidian.png",

        ],
    };
    const crystalPrices = {
        "./images/S-CrystalSingle/crystal-kyanite.png": 200,
        "./images/S-CrystalSingle/crystal-labradorite.png": 150,
        "./images/S-CrystalSingle/crystal-lapislazuli.png": 160,
        "./images/S-CrystalSingle/crystal-sodalite.png": 150,
        "./images/S-CrystalSingle/crystal-bluecalcite.png": 120,
        "./images/S-CrystalSingle/crystal-pietersite.png": 300,
        "./images/S-CrystalSingle/crystal-tanzanite.png": 200,
        "./images/S-CrystalSingle/crystal-amethyst.png": 120,
        "./images/S-CrystalSingle/crystal-albite.png": 100,
        "./images/S-CrystalSingle/crystal-moonstone.png": 130,
        "./images/S-CrystalSingle/crystal-clearquartz.png": 100,

        "./images/S-CrystalSingle/crystal-citrine.png": 110,
        "./images/S-CrystalSingle/crystal-rutile-quartz.png": 180,
        "./images/S-CrystalSingle/crystal-aquamarine.png": 140,
        "./images/S-CrystalSingle/crystal-purplefluorite.png": 100,
        "./images/S-CrystalSingle/crystal-fluorite.png": 200,
        "./images/S-CrystalSingle/crystal-hawkseye.png": 130,
        "./images/S-CrystalSingle/crystal-tigerseye.png": 120,
        "./images/S-CrystalSingle/crystal-green-phantom.png": 170,
        "./images/S-CrystalSingle/crystal-carnelian.png": 100,

        "./images/S-CrystalSingle/crystal-iolite.png": 150,
        "./images/S-CrystalSingle/crystal-lilac-amethyst.png": 110,
        "./images/S-CrystalSingle/crystal-pinkquartz.png": 120,
        "./images/S-CrystalSingle/crystal-rosequartz.png": 150,
        "./images/S-CrystalSingle/crystal-golden-strawberry-quartz.png": 160,
        "./images/S-CrystalSingle/crystal-rubellite.png": 200,
        "./images/S-CrystalSingle/crystal-rhodochrosite.png": 190,
        "./images/S-CrystalSingle/crystal-garnet.png": 100,
        "./images/S-CrystalSingle/crystal-oceanjasper.png": 120,

        "./images/S-CrystalSingle/crystal-blackobsidian.png": 170,
        "./images/S-CrystalSingle/crystal-goldobsidian.png": 160,
        "./images/S-CrystalSingle/crystal-blacktourmaline.png": 220,
        "./images/S-CrystalSingle/crystal-snowflakeobsidian.png": 150,
        "./images/S-CrystalSingle/crystal-silversheenobsidian.png": 110,
        "./images/S-CrystalSingle/crystal-hematite.png": 190,
        "./images/S-CrystalSingle/crystal-bloodstone.png": 120,
        "./images/S-CrystalSingle/crystal-tridacna.png": 140,

        "./images/S-CrystalSingle/crystal-pinkcalcite.png": 190,
        "./images/S-CrystalSingle/crystal-hackmanite.png": 140,
        "./images/S-CrystalSingle/crystal-celestite.png": 130,
        "./images/S-CrystalSingle/crystal-angelite.png": 110,
        "./images/S-CrystalSingle/crystal-sunstone.png": 120,
        "./images/S-CrystalSingle/crystal-smokyquartz.png": 180,
        "./images/S-CrystalSingle/crystal-greenfluorite.png": 100
    };

    const metalPrices = {
        "./images/Custom/ball1.png": 200,
        "./images/Custom/ball2.png": 200,
        "./images/Custom/ball3.png": 200,
        "./images/Custom/ball4.png": 200,
        "./images/Custom/ball5.png": 400,
        "./images/Custom/ball6.png": 300,
        "./images/Custom/ball7.png": 600,
    };

    const [selectedCrystal, setSelectedCrystal] = useState(null);
    const [crystalPlacement, setCrystalPlacement] = useState({});
    const [selectedBeadIndex, setSelectedBeadIndex] = useState(null);
    const handleBeadClick = (index) => {
        if (braceletBeads[index] === 'metal') return;

        if (selectedCrystal) {
            // 有選水晶 → 放到點的格子裡
            setCrystalPlacement(prev => ({
                ...prev,
                [index]: selectedCrystal
            }));
            setSelectedCrystal(null);
            setSelectedBeadIndex(null);
        } else if (crystalPlacement[index]) {
            // 有放過 → 選取現有的水晶
            setSelectedCrystal(crystalPlacement[index]);
            setSelectedBeadIndex(index);
        } else {
            // 沒選水晶 → 先記下 index 等待選水晶
            setSelectedBeadIndex(index);
        }
    };

    useEffect(() => {
        if (selectedCrystal && selectedBeadIndex !== null) {
            setCrystalPlacement(prev => ({
                ...prev,
                [selectedBeadIndex]: selectedCrystal
            }));
            setSelectedCrystal(null);
            setSelectedBeadIndex(null);
        }
    }, [selectedCrystal, selectedBeadIndex]);

    //刪除按鈕 清空手鍊
    const handleClearBracelet = () => {
        setCrystalPlacement({});
        setSelectedCrystal(null);
        setSelectedBeadIndex(null);
        setSelectedMetalImage(null);
    }

    //儲存
    const [braceletName, setBraceletName] = useState('');
    const [braceletPrice, setBraceletPrice] = useState('');
    const handleSaveBracelet = () => {
        const savedData = {
            braceletName,
            wristSize,
            selectedSize,
            crystalPlacement,
            selectedMetalImage,
            braceletPrice,
            createdAt: new Date().toISOString(),
        };

        localStorage.setItem('customBracelet', JSON.stringify(savedData));
        alert('手鍊資料已儲存！');
    };

    useEffect(() => {
        const saved = localStorage.getItem('customBracelet');
        if (saved) {
            const parsed = JSON.parse(saved);
            setBraceletName(parsed.braceletName || '');
            setWristSize(parsed.wristSize || 16);
            setSelectedSize(parsed.selectedSize || 8);
            setCrystalPlacement(parsed.crystalPlacement || {});
            setSelectedMetalImage(parsed.selectedMetalImage || null);
            setBraceletPrice(parsed.braceletPrice || '');
        }
    }, []);


    //計算價格
    useEffect(() => {
        let total = 0;

        // 計算所有水晶價格（只有有放進手鍊裡的才算）
        braceletBeads.forEach((bead, index) => {
            if (crystalPlacement[index]) {
                const price = crystalPrices[crystalPlacement[index]] || 0;
                total += price;
            }
        });

        // 加上金屬配飾價格
        if (selectedMetalImage) {
            total += metalPrices[selectedMetalImage] || 0;
        }

        setBraceletPrice(total); // 顯示在輸入欄位
    }, [braceletBeads, crystalPlacement, selectedMetalImage]);



    return (
        <>
            <CustomizeInfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />
            <NavBarWrapper variant="dark" />
            <main className={style.index}>
                <div className={style.preload} />
                <div className={style.boxs}>
                    <div className={style.name}>
                        <div className={style.titleName}>
                            <p>✦ 幫我取個名吧 ✦</p>
                        </div>
                        <div className={style.inputNameBox}>
                            <input
                                type="text"
                                className={style.inputName}
                                value={braceletName}
                                onChange={(e) => setBraceletName(e.target.value)}
                                placeholder="－請輸入手鍊名稱－"
                            />
                        </div>
                    </div>
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
                                {["ball1", "ball2", "ball3", "ball4", "ball5", "ball6", "ball7"].map((img, i) => (
                                    <img
                                        key={i}
                                        src={`./images/Custom/${img}.png`}
                                        alt=""
                                        onClick={() => setSelectedMetalImage(`./images/Custom/${img}.png`)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div id={style.beadWindow}>
                        <nav className={style.tabs}>
                            {Object.keys(crystalData).map((category) => (
                                <button
                                    key={category}
                                    className={`${style.tab} ${selectedCategory === category ? style.active : ""}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </nav>
                        <div className={style.beadGrid}>
                            {crystalData[selectedCategory].map((imgSrc, index) => (
                                <img
                                    key={index}
                                    className={`${style.bead} ${selectedCrystal === imgSrc ? style.selectedBead : ''}`}
                                    src={imgSrc}
                                    alt=""
                                    onClick={() => setSelectedCrystal(imgSrc)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div className={style.boxs2}>
                    <div className={style.bracelet}
                        style={{
                            width: `${braceletRadius * 2 * scale}px`,
                            height: `${braceletRadius * 2 * scale}px`,
                        }}>
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
                                        onClick={() => handleBeadClick(index)}
                                        className={`${isMetal ? style.pearlSmall : style.pearlBig} ${selectedBeadIndex === index ? style.selectedBead : ''}`}
                                        style={{
                                            backgroundImage: crystalPlacement[index]
                                                ? `url(${crystalPlacement[index]})`
                                                : isMetal && selectedMetalImage
                                                    ? `url(${selectedMetalImage})`
                                                    : undefined,
                                            width: `${size * scale}px`,
                                            height: `${size * scale}px`,
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            borderRadius: "50%",
                                            transform: `rotate(${accumulatedAngle}deg)translate(${braceletRadius * scale}px)rotate(-${accumulatedAngle}deg)translate(-${offset}px, -${offset}px)`,
                                            transformOrigin: "0 0",

                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                    />
                                );
                            });
                        })()}
                        <div className={style.iconBox1}>
                            <div className={style.btnDel} onClick={handleClearBracelet}></div>
                            <div className={style.btnSave} onClick={handleSaveBracelet}></div>
                        </div>
                    </div>
                    <div className={style.priceBox}>
                        <input
                            className={style.price}
                            type="text"
                            placeholder="價錢"
                            value={braceletPrice === 0 ? "自動計算價格" : `${braceletPrice} 元`}
                            readOnly
                        />
                    </div>
                </div>
                <div className={style.iconBox2}>
                    <div className={style.icon1Box}>
                        <div className={style.icon1}><div className={style.iconBtn1}></div><p>手圍測量</p></div>
                        <hr className={style.line2} />
                        <div className={style.icon1}><div className={style.iconBtn2}></div><p> 測驗結果</p></div>
                        <hr className={style.line2} />
                        <div className={style.icon1}><div className={style.iconBtn3}></div><p>水晶百科</p></div>
                        <hr className={style.line2} />
                        <div className={style.icon1}><div className={style.iconBtn4}></div><p>注意事項</p></div>
                        <hr className={style.line2} />
                        <div className={style.icon1}><div className={style.iconBtn5}></div><p>特別訂製</p></div>
                    </div>
                    <div className={style.icon2}>
                        <img className={style.icon2_1} src="./images/Custom/btn_cart_tool.svg" alt="" />
                        <p>加購物車</p>
                    </div>
                </div>
            </main>
        </>
    )
}
