import style from './Customize4.module.css'
import '../../components/NumTestBg.css'
import NavBarWrapper from '../../components/NavBarWrapper';
import { useEffect, useState, useMemo } from 'react';

import CustomizeInfoModal from '../../components/Customize/CustomizeInfoModal';

import { generateBraceletLayout, calculateRadius, calculateBeadAngles } from '../../utils/generateBraceletLayout';

import { resultCrystalMap } from '../../utils/resultCrystalMap';

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
  const [openPanel, setOpenPanel] = useState(null); // null 或 "measure", "result", "wiki", "note", "custom"
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

  const categorizedCrystalInfo = {
    "靈性直覺": [
      {
        name: "藍晶石",
        en: "Kyanite",
        image: "./images/S-CrystalSingle/crystal-kyanite.png",
        desc: "提升直覺與靈性，幫助清晰溝通與能量流動。"
      },
      {
        name: "拉長石",
        en: "Labradorite",
        image: "./images/S-CrystalSingle/crystal-labradorite.png",
        desc: "喚醒潛能，增強直覺與靈性探索。"
      },
      {
        name: "青金石",
        en: "Lapis Lazuli",
        image: "./images/S-CrystalSingle/crystal-lapislazuli.png",
        desc: "開啟第三眼，增進洞察力與靈性。"
      },
      {
        name: "蘇打石",
        en: "Sodalite",
        image: "./images/S-CrystalSingle/crystal-sodalite.png",
        desc: "理性與直覺的平衡，幫助清晰思考。"
      },
      {
        name: "藍方解石",
        en: "Blue Calcite",
        image: "./images/S-CrystalSingle/crystal-bluecalcite.png",
        desc: "舒緩情緒、提升表達與靈性覺察。"
      },
      {
        name: "彼得石",
        en: "Pietersite",
        image: "./images/S-CrystalSingle/crystal-pietersite.png",
        desc: "激發洞察與意志力，有助直覺行動。"
      },
      {
        name: "丹泉石",
        en: "Tanzanite",
        image: "./images/S-CrystalSingle/crystal-tanzanite.png",
        desc: "開啟高頻能量通道，強化直覺與創造力。"
      },
      {
        name: "紫水晶",
        en: "Amethyst",
        image: "./images/S-CrystalSingle/crystal-amethyst.png",
        desc: "協助專注與情緒平衡，提升靈性直覺。"
      },
      {
        name: "白月光鈣長石",
        en: "Albite",
        image: "./images/S-CrystalSingle/crystal-albite.png",
        desc: "帶來澄澈的靈感與轉化支持，幫助釋放限制。"
      },
      {
        name: "月光石",
        en: "Moonstone",
        image: "./images/S-CrystalSingle/crystal-moonstone.png",
        desc: "穩定情緒與睡眠，有助連結直覺與靈感。"
      },
      {
        name: "白水晶",
        en: "Clear Quartz",
        image: "./images/S-CrystalSingle/crystal-clearquartz.png",
        desc: "放大能量，協助靈性提升與淨化。"
      }
    ],
    "專注工作": [
      {
        name: "黃水晶",
        en: "Citrine",
        image: "./images/S-CrystalSingle/crystal-citrine.png",
        desc: "提升財富與自信，帶來清晰與行動力。"
      },
      {
        name: "鈦晶/髮晶",
        en: "Rutile Quartz",
        image: "./images/S-CrystalSingle/crystal-rutile-quartz.png",
        desc: "增強企圖心與效率，吸引人脈資源。"
      },
      {
        name: "海藍寶",
        en: "Aquamarine",
        image: "./images/S-CrystalSingle/crystal-aquamarine.png",
        desc: "提升表達與冷靜思考，帶來清新能量。"
      },
      {
        name: "蘇打石",
        en: "Sodalite",
        image: "./images/S-CrystalSingle/crystal-sodalite.png",
        desc: "平衡邏輯與直覺，協助專注與清晰思維。"
      },
      {
        name: "紫螢石",
        en: "Purple Fluorite",
        image: "./images/S-CrystalSingle/crystal-purplefluorite.png",
        desc: "穩定情緒與專注力，激發創造靈感。"
      },
      {
        name: "螢石",
        en: "Fluorite",
        image: "./images/S-CrystalSingle/crystal-fluorite.png",
        desc: "協助組織思緒，提升學習效率。"
      },
      {
        name: "鷹眼石",
        en: "Hawk’s Eye",
        image: "./images/S-CrystalSingle/crystal-hawkseye.png",
        desc: "洞察先機、提升判斷力與執行力。"
      },
      {
        name: "虎眼石",
        en: "Tiger’s Eye",
        image: "./images/S-CrystalSingle/crystal-tigerseye.png",
        desc: "帶來決斷力與勇氣，幫助實現目標。"
      },
      {
        name: "綠幽靈",
        en: "Green Phantom",
        image: "./images/S-CrystalSingle/crystal-green-phantom.png",
        desc: "支持事業發展，幫助釋放負面能量。"
      },
      {
        name: "紅玉髓",
        en: "Carnelian",
        image: "./images/S-CrystalSingle/crystal-carnelian.png",
        desc: "注入活力與行動力，激發創造與熱情。"
      }
    ],
    "愛與人際": [
      {
        name: "堇青石",
        en: "Iolite",
        image: "./images/S-CrystalSingle/crystal-iolite.png",
        desc: "幫助釐清混亂思緒、強化內在導引，促進真誠溝通與心靈連結。"
      },
      {
        name: "粉紫水晶",
        en: "Lilac Amethyst",
        image: "./images/S-CrystalSingle/crystal-lilac-amethyst.png",
        desc: "溫和淨化情緒，柔化內在能量。"
      },
      {
        name: "粉晶",
        en: "Rose Quartz",
        image: "./images/S-CrystalSingle/crystal-rosequartz.png",
        desc: "開啟心輪，提升愛與被愛的能力。"
      },
      {
        name: "草莓晶",
        en: "Strawberry Quartz",
        image: "./images/S-CrystalSingle/crystal-golden-strawberry-quartz.png",
        desc: "吸引美好關係與愛情。"
      },
      {
        name: "紅碧璽",
        en: "Rubellite",
        image: "./images/S-CrystalSingle/crystal-rubellite.png",
        desc: "強化情感表達，提升人際魅力。"
      },
      {
        name: "紅紋石",
        en: "Rhodochrosite",
        image: "./images/S-CrystalSingle/crystal-rhodochrosite.png",
        desc: "療癒情感創傷，協助打開心扉。"
      },
      {
        name: "紅石榴石",
        en: "Garnet",
        image: "./images/S-CrystalSingle/crystal-garnet.png",
        desc: "激發情感活力並提升安全感。"
      },
      {
        name: "海洋碧玉",
        en: "Ocean Jasper",
        image: "./images/S-CrystalSingle/crystal-oceanjasper.png",
        desc: "穩定情緒與和諧交流。"
      }
    ],
    "能量防護": [
      {
        name: "黑曜石",
        en: "Black Obsidian",
        image: "./images/S-CrystalSingle/crystal-blackobsidian.png",
        desc: "吸收負能量，強化保護場域。"
      },
      {
        name: "金曜石",
        en: "Gold Obsidian",
        image: "./images/S-CrystalSingle/crystal-goldobsidian.png",
        desc: "提升直覺與防護能量。"
      },
      {
        name: "黑碧璽",
        en: "Black Tourmaline",
        image: "./images/S-CrystalSingle/crystal-blacktourmaline.png",
        desc: "穩定情緒與防止負能量入侵。"
      },
      {
        name: "雪花黑曜石",
        en: "Snowflake Obsidian",
        image: "./images/S-CrystalSingle/crystal-snowflakeobsidian.png",
        desc: "淨化內在陰影，帶來清晰與平衡。"
      },
      {
        name: "黑銀曜石",
        en: "Silver Sheen Obsidian",
        image: "./images/S-CrystalSingle/crystal-silversheenobsidian.png",
        desc: "保護靈性空間，協助自我認識。"
      },
      {
        name: "黑鐵礦",
        en: "Hematite",
        image: "./images/S-CrystalSingle/crystal-hematite.png",
        desc: "強化精神穩定性與實際行動力。"
      },
      {
        name: "龍血石",
        en: "Bloodstone",
        image: "./images/S-CrystalSingle/crystal-bloodstone.png",
        desc: "促進勇氣與身心淨化。"
      },
      {
        name: "硨磲石",
        en: "Tridacna",
        image: "./images/S-CrystalSingle/crystal-tridacna.png",
        desc: "帶來純淨能量，清除雜念與焦慮。"
      }
    ],
    "放鬆冥想": [
      {
        name: "粉方解石",
        en: "Pink Calcite",
        image: "./images/S-CrystalSingle/crystal-pinkcalcite.png",
        desc: "柔化內心、釋放壓力與情緒。"
      },
      {
        name: "紫水晶",
        en: "Amethyst",
        image: "./images/S-CrystalSingle/crystal-amethyst.png",
        desc: "協助專注與情緒平衡，提升靈性直覺。"
      },
      {
        name: "堇青石",
        en: "Iolite",
        image: "./images/S-CrystalSingle/crystal-iolite.png",
        desc: "幫助冥想與內在旅程的探索。"
      },
      {
        name: "方鈉石",
        en: "Hackmanite",
        image: "./images/S-CrystalSingle/crystal-hackmanite.png",
        desc: "帶來平靜與安心，有助內省。"
      },
      {
        name: "天青石",
        en: "Celestite",
        image: "./images/S-CrystalSingle/crystal-celestite.png",
        desc: "安撫焦慮，連結更高頻靈性。"
      },
      {
        name: "天使石",
        en: "Angelite",
        image: "./images/S-CrystalSingle/crystal-angelite.png",
        desc: "促進平靜與內在連結。"
      },
      {
        name: "太陽石",
        en: "Sunstone",
        image: "./images/S-CrystalSingle/crystal-sunstone.png",
        desc: "激發正能量與快樂感。"
      },
      {
        name: "茶晶",
        en: "Smoky Quartz",
        image: "./images/S-CrystalSingle/crystal-smokyquartz.png",
        desc: "釋放壓力與情緒毒素。"
      },
      {
        name: "綠螢石",
        en: "Green Fluorite",
        image: "./images/S-CrystalSingle/crystal-greenfluorite.png",
        desc: "穩定思緒與情緒，有助放鬆。"
      },
      {
        name: "黑銀曜石",
        en: "Silver Sheen Obsidian",
        image: "./images/S-CrystalSingle/crystal-silversheenobsidian.png",
        desc: "促進冥想與保護靈性。"
      }
    ]
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

  // 生命靈數測驗結果導入推薦水晶
  const lifePathNumber = 7;

  //特殊訂製需求
  const [customRequest, setCustomRequest] = useState('');

  //右側按鈕點擊效果
  const [activePanel, setActivePanel] = useState(null);
  const handlePanelClick = (panelName) => {
    // 強制重觸動畫：每次點擊都會先設 null 再設值
    setOpenPanel(null);
    setActivePanel(panelName); // 不要設 null，這樣 icon 還會亮
    setTimeout(() => {
      setOpenPanel(panelName);
    }, 20); // 小延遲讓 React 有時間 unmount
  };

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
            <div className={style.icon1} onClick={() => handlePanelClick("measure")}>
              <div className={`${style.iconBtn1} ${activePanel === "measure" ? style.active : ""}`}></div>
              <p>手圍測量</p>
            </div>
            <hr className={style.line2} />

            <div className={style.icon1} onClick={() => handlePanelClick("result")}>
              <div className={`${style.iconBtn2} ${activePanel === "result" ? style.active : ""}`}></div>
              <p>測驗結果</p>
            </div>
            <hr className={style.line2} />

            <div className={style.icon1} onClick={() => handlePanelClick("wiki")}>
              <div className={`${style.iconBtn3} ${activePanel === "wiki" ? style.active : ""}`}></div>
              <p>水晶百科</p>
            </div>
            <hr className={style.line2} />

            <div className={style.icon1} onClick={() => handlePanelClick("note")}>
              <div className={`${style.iconBtn4} ${activePanel === "note" ? style.active : ""}`}></div>
              <p>注意事項</p>
            </div>
            <hr className={style.line2} />

            <div className={style.icon1} onClick={() => handlePanelClick("custom")}>
              <div className={`${style.iconBtn5} ${activePanel === "custom" ? style.active : ""}`}></div>
              <p>特別訂製</p>
            </div>
          </div>

          <div className={style.icon2}>
            <img className={style.icon2_1} src="./images/Custom/btn_cart_tool.svg" alt="" />
            <p>加購物車</p>
          </div>
        </div>

        {openPanel && (
          <div
            className={style.panelOverlay}
          >
            <div
              className={style.panelContent}
            >
              <div className={style.closeBtnWrapper}>
                <button className={style.closeBtn} onClick={() => {
                  setOpenPanel(null);
                  setActivePanel(null);
                }}>✕</button>
              </div>

              {openPanel === "measure" && (
                <div>
                  <h2 className={style.panelTitle}>✦ 手圍測量 ✦</h2>

                  <img className={style.decorLine} src="./images/Custom/deco-divider_overlay.png" alt="裝飾線" />
                  <div className={style.overlayContent}>

                    <p>▸ 測量位置：手腕最細處</p>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <img
                          src="./images/Custom/deco-diamaond.png"
                          alt="裝飾圖"
                          style={{
                            width: "1rem",
                            height: "1rem",
                            marginRight: "0.4rem",
                          }}
                        />
                        <span className={style.panelTitle2} >紙條測量方式</span>
                      </div>
                      <p>
                        準備寬約 0.5 公分的紙條，繞手腕一圈，在交會處做記號，攤平紙條測量長度。
                      </p>
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <img
                          src="./images/Custom/deco-diamaond.png"
                          alt="裝飾圖"
                          style={{
                            width: "1rem",
                            height: "1rem",
                            marginRight: "0.4rem",
                          }}
                        />
                        <span className={style.panelTitle2} >皮尺測量方式</span>
                      </div>
                      <p>
                        使用皮尺繞手腕一圈，測量手圍。
                      </p>

                      <p style={{ color: "#A67CEB", marginTop: "1rem" }}>
                        測量完畢，加 0.5~1公分，使配戴更舒適不緊繃！
                      </p>
                    </div>

                  </div>

                </div>
              )}

              {openPanel === "note" && (
                <div className={style.panelInner}>
                  <h2 className={style.panelTitle}>✦ 注意事項 ✦</h2>
                  <img className={style.decorLine} src="./images/Custom/deco-divider_overlay.png" alt="裝飾線" />

                  <div className={style.overlayContent}>
                    <p>▸ 客製商品需 先付款 才會開始製作，請耐心等待製作時間約 5–7 個工作天。</p>
                    <p>▸ 實品顏色可能因 螢幕顯示設定 略有差異，請以實品為準。</p>
                    <p>▸ 如需修改手圍尺寸，將酌收材料與工本費，請事先聯繫客服確認是否可調整。</p>
                    <p>▸ 天然水晶每顆顏色深淺與紋理皆不相同，無法指定。</p>
                    <p>▸ 若有斷裂或非人為瑕疵，可於七日內聯繫我們。</p>
                    <p style={{ color: "#A67CEB" }}>
                      若需特殊設計／包裝／尺寸，請選擇「特別訂製」填寫說明
                    </p>
                  </div>
                </div>
              )}

              {openPanel === "result" && (
                <div className={style.panelInner}>
                  <h2 className={style.panelTitle}>✦ 測驗結果 ✦</h2>
                  <img className={style.decorLine} src="./images/Custom/deco-divider_overlay.png" alt="裝飾線" />
                  <div className={style.overlayContent}>
                    {!lifePathNumber ? (
                      // 若尚未測驗，顯示前往測驗按鈕
                      <button
                        onClick={() => window.open('/numtest2', '_blank')}
                        className={style.testButton}
                      >
                        🔮 前往進行生命靈數測驗
                      </button>
                    ) : (
                      // 有測驗結果，顯示對應資料
                      <>
                        <p>你的生命靈數是 <strong style={{ color: "#8750BF" }}>{lifePathNumber} 號人</strong>。</p>
                        <p style={{ marginBottom: "1rem" }}>{resultCrystalMap[lifePathNumber].description}</p>

                        <h3 className={style.panelTitle2}>✧ 推薦水晶 ✧</h3>

                        {resultCrystalMap[lifePathNumber].crystals.map((crystal, index) => (
                          <div
                            key={index}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                              marginBottom: "1rem"
                            }}
                          >
                            <img
                              src={crystal.image}
                              alt={crystal.name}
                              style={{
                                width: "3.5rem",
                                height: "3.5rem",
                                borderRadius: "999px",
                                objectFit: "cover"
                              }}
                            />
                            <div>
                              <p style={{ fontWeight: "500", color: "#8750BF" }}>
                                【{crystal.category}】 {crystal.name} {crystal.en}
                              </p>
                              <p style={{ fontSize: "0.8rem", color: "#585858" }}>{crystal.desc}</p>
                            </div>
                          </div>
                        ))}



                      </>
                    )}

                  </div>
                </div>
              )}
              {openPanel === "wiki" && (
                <div className={style.panelInner}>
                  <h2 className={style.panelTitle}>✦ 水晶分類 ✦</h2>
                  <img className={style.decorLine} src="./images/Custom/deco-divider_overlay.png" alt="裝飾線" />
                  <div className={style.overlayContent}>
                    {Object.entries(categorizedCrystalInfo).map(([category, crystals]) => (
                      <div key={category}>
                        <h3 className={style.panelTitle2}>✧ {category} ✧</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "1rem 0" }}>
                          {crystals.map((crystal, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                              <img
                                src={crystal.image}
                                alt={`${crystal.name} 圖片`}
                                style={{
                                  width: "3rem",
                                  height: "3rem",
                                  borderRadius: "999rem",
                                  objectFit: "cover",
                                }}
                              />
                              <div>
                                <p style={{ margin: 0, fontWeight: 500, fontSize: 14, color: "#8750BF" }}>【{crystal.name}】</p>
                                <p style={{ fontSize: "0.75rem", color: "#585858", paddingLeft: "0.5rem" }}>
                                  {crystal.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    <button
                      onClick={() => window.open('/KnowledgeCrystal')}
                      className={style.wikiBtn}
                    >
                      前往水晶小百科查看更多
                    </button>
                  </div>
                </div>
              )}
              {openPanel === "custom" && (
                <div className={style.panelInner}>
                  <h2 className={style.panelTitle}>✦ 特別訂製 ✦</h2>
                  <img className={style.decorLine} src="./images/Custom/deco-divider_overlay.png" alt="裝飾線" />
                  <div className={style.overlayContent}>
                    <p style={{ marginBottom: "0.5rem" }}>請留下您的特殊訂製需求，我們將盡快聯繫您：</p>

                    <textarea
                      className={style.customTextarea}
                      placeholder="請輸入您想調整的尺寸、水晶款式、特殊設計需求…"
                      value={customRequest}
                      onChange={(e) => setCustomRequest(e.target.value)}
                    />

                    <button
                      className={style.wikiBtn}
                      onClick={() => {
                        if (customRequest.trim()) {
                          alert("特別訂製需求已送出，我們將於五個工作天內與您聯繫！");
                          setCustomRequest("");
                          setOpenPanel(null);
                        } else {
                          alert("請先填寫您的訂製需求內容！");
                        }
                      }}
                    >
                      送出需求
                    </button>
                  </div>
                </div>
              )}


            </div>
          </div>
        )}


      </main>
    </>
  )
}
