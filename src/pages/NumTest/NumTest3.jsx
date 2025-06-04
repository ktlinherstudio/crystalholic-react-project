import './NumTest3.css';
import '../../components/NumTestBg.css';
import { Link } from 'react-router-dom';
import NavBarWrapper from '../../components/NavBarWrapper';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// 生命靈數資料
const characterData = {
    1: {
        number: "1",
        title: "獨立領袖",
        tags: ["＃創意無限", "＃領袖魅力", "＃競爭心強"],
        image: "./images/Numtest/characters/numCharacter_1.png",
        friendImg1: "./images/Numtest/characters/numCharacter_s2.svg",
        friendImg2: "./images/Numtest/characters/numCharacter_s4.svg",
        friendImg3: "./images/Numtest/characters/numCharacter_s7.svg",
        friendtitle1: "2",
        friendtitle2: "4",
        friendtitle3: "7",
        friendtext1: "獨立領袖",
        friendtext2: "觀心旅人",
        friendtext3: "霸氣領袖",
        enemiesImg1: "./images/Numtest/characters/numCharacter_s6.svg",
        enemiesImg2: "./images/Numtest/characters/numCharacter_s8.svg",
        enemiesImg3: "./images/Numtest/characters/numCharacter_s9.svg",
        enemiestitle1: "6",
        enemiestitle2: "8",
        enemiestitle3: "9",
        enemiestext1: "獨立領袖",
        enemiestext2: "觀心旅人",
        enemiestext3: "霸氣領袖",
        crystalImg1: "./images/S-CrystalSingle/crystal-citrine.png",
        crystalImg2: "./images/S-CrystalSingle/crystal-green-phantom.png",
        crystalImg3: "./images/S-CrystalSingle/crystal-kyanite.png",
        crystaltitle1: "黃水晶",
        crystaltitle2: "綠幽靈",
        crystaltitle3: "藍晶石",
        crystaltext1: "金錢強強滾",
        crystaltext2: "工作神隊友",
        crystaltext3: "溝通表達力",
        bracelet: "./images/Numtest/bracelet/bracelet1.png",
    },
    2: {
        number: "2",
        title: "和平使者",
        tags: ["＃溫柔細膩", "＃人際天使", "＃愛心大使"],
        image: "./images/Numtest/characters/numCharacter_2.png",
        friendImg1: "./images/Numtest/characters/numCharacter_s1.svg",
        friendImg2: "./images/Numtest/characters/numCharacter_s3.svg",
        friendImg3: "./images/Numtest/characters/numCharacter_s9.svg",
        friendtitle1: "1",
        friendtitle2: "3",
        friendtitle3: "9",
        friendtext1: "獨立領袖",
        friendtext2: "快樂達人",
        friendtext3: "博愛智者",
        enemiesImg1: "./images/Numtest/characters/numCharacter_s2.svg",
        enemiesImg2: "./images/Numtest/characters/numCharacter_s5.svg",
        enemiesImg3: "./images/Numtest/characters/numCharacter_s7.svg",
        enemiestitle1: "2",
        enemiestitle2: "5",
        enemiestitle3: "7",
        enemiestext1: "和平使者",
        enemiestext2: "冒險玩家",
        enemiestext3: "觀心旅人",
        crystalImg1: "./images/S-CrystalSingle/crystal-rutile-quartz.png",
        crystalImg2: "./images/S-CrystalSingle/crystal-rosequartz.png",
        crystalImg3: "./images/S-CrystalSingle/crystal-moonstone.png",
        crystaltitle1: "金髮晶",
        crystaltitle2: "粉晶",
        crystaltitle3: "月光石",
        crystaltext1: "人氣吸引機",
        crystaltext2: "戀愛桃花王",
        crystaltext3: "直覺開天眼",
        bracelet: "./images/Numtest/bracelet/bracelet2.png",
    },
    3: {
        number: "3",
        title: "快樂達人",
        tags: ["＃社交高手", "＃正能量人", "＃創意滿點"],
        image: "./images/Numtest/characters/numCharacter_3.png",
        friendImg1: "./images/Numtest/characters/numCharacter_s2.svg",
        friendImg2: "./images/Numtest/characters/numCharacter_s8.svg",
        friendImg3: "./images/Numtest/characters/numCharacter_s9.svg",
        friendtitle1: "2",
        friendtitle2: "8",
        friendtitle3: "9",
        friendtext1: "和平使者",
        friendtext2: "霸氣領袖",
        friendtext3: "博愛智者",
        enemiesImg1: "./images/Numtest/characters/numCharacter_s3.svg",
        enemiesImg2: "./images/Numtest/characters/numCharacter_s4.svg",
        enemiesImg3: "./images/Numtest/characters/numCharacter_s7.svg",
        enemiestitle1: "3",
        enemiestitle2: "4",
        enemiestitle3: "7",
        enemiestext1: "快樂達人",
        enemiestext2: "踏實匠人",
        enemiestext3: "觀心旅人",
        crystalImg1: "./images/S-CrystalSingle/crystal-amethyst.png",
        crystalImg2: "./images/S-CrystalSingle/crystal-aquamarine.png",
        crystalImg3: "./images/S-CrystalSingle/crystal-blackobsidian.png",
        crystaltitle1: "螢石",
        crystaltitle2: "海藍寶",
        crystaltitle3: "黑曜石",
        crystaltext1: "點子製造機",
        crystaltext2: "內心靜音器",
        crystaltext3: "避邪防小人",
        bracelet: "./images/Numtest/bracelet/bracelet3.png",
    },
    4: {
        number: "4",
        title: "踏實匠人",
        tags: ["＃實幹派系", "＃規律達人", "＃耐心十足"],
        image: "./images/Numtest/characters/numCharacter_4.png",
        friendImg1: "./images/Numtest/characters/numCharacter_s1.svg",
        friendImg2: "./images/Numtest/characters/numCharacter_s7.svg",
        friendImg3: "./images/Numtest/characters/numCharacter_s8.svg",
        friendtitle1: "1",
        friendtitle2: "7",
        friendtitle3: "8",
        friendtext1: "獨立領袖",
        friendtext2: "觀心旅人",
        friendtext3: "霸氣領袖",
        enemiesImg1: "./images/Numtest/characters/numCharacter_s3.svg",
        enemiesImg2: "./images/Numtest/characters/numCharacter_s5.svg",
        enemiesImg3: "./images/Numtest/characters/numCharacter_s9.svg",
        enemiestitle1: "3",
        enemiestitle2: "5",
        enemiestitle3: "9",
        enemiestext1: "快樂達人",
        enemiestext2: "冒險玩家",
        enemiestext3: "博愛智者",
        crystalImg1: "./images/S-CrystalSingle/crystal-amethyst.png",
        crystalImg2: "./images/S-CrystalSingle/crystal-green-phantom.png",
        crystalImg3: "./images/S-CrystalSingle/crystal-angelite.png",
        crystaltitle1: "紫水晶",
        crystaltitle2: "綠幽靈",
        crystaltitle3: "天使石",
        crystaltext1: "智慧增強器",
        crystaltext2: "工作神隊友",
        crystaltext3: "心靈超療癒",
        bracelet: "./images/Numtest/bracelet/bracelet3.png",
    },
    5: {
        number: "5",
        title: "冒險玩家",
        tags: ["＃自由狂人", "＃隨性而行", "＃冒險精神"],
        image: "./images/Numtest/characters/numCharacter_5.png",
        friendImg1: "./images/Numtest/characters/numCharacter_s7.svg",
        friendImg2: "./images/Numtest/characters/numCharacter_s8.svg",
        friendImg3: "./images/Numtest/characters/numCharacter_s9.svg",
        friendtitle1: "7",
        friendtitle2: "8",
        friendtitle3: "9",
        friendtext1: "觀心旅人",
        friendtext2: "霸氣領袖",
        friendtext3: "博愛智者",
        enemiesImg1: "./images/Numtest/characters/numCharacter_s2.svg",
        enemiesImg2: "./images/Numtest/characters/numCharacter_s4.svg",
        enemiesImg3: "./images/Numtest/characters/numCharacter_s6.svg",
        enemiestitle1: "2",
        enemiestitle2: "4",
        enemiestitle3: "6",
        enemiestext1: "和平使者",
        enemiestext2: "踏實匠人",
        enemiestext3: "療癒守護者",
        crystalImg1: "./images/S-CrystalSingle/crystal-blackobsidian.png",
        crystalImg2: "./images/S-CrystalSingle/crystal-tigerseye.png",
        crystalImg3: "./images/S-CrystalSingle/crystal-sodalite.png",
        crystaltitle1: "黑曜石",
        crystaltitle2: "虎眼石",
        crystaltitle3: "蘇打石",
        crystaltext1: "避邪防小人",
        crystaltext2: "行動開外掛",
        crystaltext3: "理性大腦派",
        bracelet: "./images/Numtest/bracelet/bracelet4.png",
    },
    6: {
        number: "6",
        title: "療癒守護者",
        tags: ["＃照顧無處", "＃無私大師", "＃情感顧問"],
        image: "./images/Numtest/characters/numCharacter_6.png",
        friendImg1: "./images/Numtest/characters/numCharacter_s2.svg",
        friendImg2: "./images/Numtest/characters/numCharacter_s3.svg",
        friendImg3: "./images/Numtest/characters/numCharacter_s4.svg",
        friendtitle1: "2",
        friendtitle2: "3",
        friendtitle3: "4",
        friendtext1: "和平使者",
        friendtext2: "快樂達人",
        friendtext3: "踏實匠人",
        enemiesImg1: "./images/Numtest/characters/numCharacter_s1.svg",
        enemiesImg2: "./images/Numtest/characters/numCharacter_s5.svg",
        enemiesImg3: "./images/Numtest/characters/numCharacter_s7.svg",
        enemiestitle1: "1",
        enemiestitle2: "5",
        enemiestitle3: "7",
        enemiestext1: "獨立領袖",
        enemiestext2: "冒險玩家",
        enemiestext3: "觀心旅人",
        crystalImg1: "./images/S-CrystalSingle/crystal-rhodochrosite.png",
        crystalImg2: "./images/S-CrystalSingle/crystal-labradorite.png",
        crystalImg3: "./images/S-CrystalSingle/crystal-clearquartz.png",
        crystaltitle1: "紅紋石",
        crystaltitle2: "拉長石",
        crystaltitle3: "白水晶",
        crystaltext1: "直覺開天眼",
        crystaltext2: "潛能大爆發",
        crystaltext3: "萬能淨化王",
        bracelet: "./images/Numtest/bracelet/bracelet2.png",
    },
    7: {
        number: "7",
        title: "觀心旅人",
        tags: ["＃神秘智者", "＃孤獨旅人", "＃智慧寶庫"],
        image: "./images/Numtest/characters/numCharacter_7.png",
        friendImg1: "./images/Numtest/characters/numCharacter_s1.svg",
        friendImg2: "./images/Numtest/characters/numCharacter_s5.svg",
        friendImg3: "./images/Numtest/characters/numCharacter_s8.svg",
        friendtitle1: "1",
        friendtitle2: "5",
        friendtitle3: "8",
        friendtext1: "獨立領袖",
        friendtext2: "冒險玩家",
        friendtext3: "霸氣領袖",
        enemiesImg1: "./images/Numtest/characters/numCharacter_s2.svg",
        enemiesImg2: "./images/Numtest/characters/numCharacter_s3.svg",
        enemiesImg3: "./images/Numtest/characters/numCharacter_s6.svg",
        enemiestitle1: "2",
        enemiestitle2: "3",
        enemiestitle3: "6",
        enemiestext1: "和平使者",
        enemiestext2: "快樂達人",
        enemiestext3: "療癒守護者",
        crystalImg1: "./images/S-CrystalSingle/crystal-labradorite.png",
        crystalImg2: "./images/S-CrystalSingle/crystal-kyanite.png",
        crystalImg3: "./images/S-CrystalSingle/crystal-golden-strawberry-quartz.png",
        crystaltitle1: "拉長石",
        crystaltitle2: "藍晶石",
        crystaltitle3: "草莓晶",
        crystaltext1: "潛能大爆發",
        crystaltext2: "溝通表達力",
        crystaltext3: "人氣甜甜圈",
        bracelet: "./images/Numtest/bracelet/bracelet1.png",
    },
    8: {
        number: "8",
        title: "霸氣領袖",
        tags: ["＃事業狂人", "＃管理天才", "＃影響力人"],
        image: "./images/Numtest/characters/numCharacter_8.png",
        friendImg1: "./images/Numtest/characters/numCharacter_s3.svg",
        friendImg2: "./images/Numtest/characters/numCharacter_s5.svg",
        friendImg3: "./images/Numtest/characters/numCharacter_s7.svg",
        friendtitle1: "3",
        friendtitle2: "5",
        friendtitle3: "7",
        friendtext1: "快樂達人",
        friendtext2: "冒險玩家",
        friendtext3: "觀心旅人",
        enemiesImg1: "./images/Numtest/characters/numCharacter_s1.svg",
        enemiesImg2: "./images/Numtest/characters/numCharacter_s8.svg",
        enemiesImg3: "./images/Numtest/characters/numCharacter_s9.svg",
        enemiestitle1: "1",
        enemiestitle2: "8",
        enemiestitle3: "9",
        enemiestext1: "獨立領袖",
        enemiestext2: "霸氣領袖",
        enemiestext3: "博愛智者",
        crystalImg1: "./images/S-CrystalSingle/crystal-goldobsidian.png",
        crystalImg2: "./images/S-CrystalSingle/crystal-angelite.png",
        crystalImg3: "./images/S-CrystalSingle/crystal-rutile-quartz.png",
        crystaltitle1: "金曜石",
        crystaltitle2: "天使石",
        crystaltitle3: "鈦晶",
        crystaltext1: "事業守護神",
        crystaltext2: "心靈超療癒",
        crystaltext3: "目標衝衝衝",
        bracelet: "./images/Numtest/bracelet/bracelet4.png",
    },
    9: {
        number: "9",
        title: "博愛智者",
        tags: ["＃改變世界", "＃心靈療癒", "＃仁慈無邊"],
        image: "./images/Numtest/characters/numCharacter_9.png",
        friendImg1: "./images/Numtest/characters/numCharacter_s2.svg",
        friendImg2: "./images/Numtest/characters/numCharacter_s6.svg",
        friendImg3: "./images/Numtest/characters/numCharacter_s7.svg",
        friendtitle1: "2",
        friendtitle2: "6",
        friendtitle3: "7",
        friendtext1: "和平使者",
        friendtext2: "療癒守護者",
        friendtext3: "觀心旅人",
        enemiesImg1: "./images/Numtest/characters/numCharacter_s4.svg",
        enemiesImg2: "./images/Numtest/characters/numCharacter_s5.svg",
        enemiesImg3: "./images/Numtest/characters/numCharacter_s8.svg",
        enemiestitle1: "4",
        enemiestitle2: "5",
        enemiestitle3: "8",
        enemiestext1: "踏實匠人",
        enemiestext2: "冒險玩家",
        enemiestext3: "霸氣領袖",
        crystalImg1: "./images/S-CrystalSingle/crystal-angelite.png",
        crystalImg2: "./images/S-CrystalSingle/crystal-sunstone.png",
        crystalImg3: "./images/S-CrystalSingle/crystal-rhodochrosite.png",
        crystaltitle1: "天使石",
        crystaltitle2: "太陽石",
        crystaltitle3: "紅紋石",
        crystaltext1: "避邪防小人",
        crystaltext2: "自信開外掛",
        crystaltext3: "情傷修補師",
        bracelet: "./images/Numtest/bracelet/bracelet2.png",
    },
};



export default function NumTest3() {
    const navigate = useNavigate();
    const [lifeNumber, setLifeNumber] = useState(1);

    useEffect(() => {
        const stored = sessionStorage.getItem('lifePathNumber');
        if (stored) {
            const parsed = parseInt(stored, 10);
            if (!isNaN(parsed) && characterData[parsed]) {
                setLifeNumber(parsed);
            }
        }
    }, []);

    const data = characterData[lifeNumber];

    return (
        <>
            <NavBarWrapper variant="dark" />
            <main className="index-numtest3">
                {/* ---------- 左側 ---------- */}
                <div id="left">
                    <div className="box-numtest3">
                        <div className="name-box">
                            <p className="title-name">你是<span>{data.number}</span>號人</p>
                            <p className="name-0">{data.title}</p>
                        </div>
                        <ul id="hashtag-box2">
                            {data.tags.map((tag, i) => (
                                <li className="hashtag" key={i}><p>{tag}</p></li>
                            ))}
                        </ul>
                    </div>
                    <div className="imgp0-box">
                        <img className="img-p0" src={data.image} alt="角色圖" />
                    </div>
                </div>

                {/* ---------- 右側 ---------- */}
                <div id="right">
                    <ul id="hashtag-box">
                        {data.tags.map((tag, i) => (
                            <li className="hashtag" key={i}><p>{tag}</p></li>
                        ))}
                    </ul>

                    <div id="box1">
                        {/* ✅ 好麻吉套資料 */}
                        <div className="friends">
                            <div className="title-numtest3">
                                <p>是你的好麻吉</p>
                            </div>
                            <ul className="people-box">
                                {[1, 2, 3].map(i => (
                                    <li className="people" key={i}>
                                        <img className={`img-p${i}`} src={data[`friendImg${i}`]} alt="好麻吉角色圖" />
                                        <div>
                                            <p className="name">{data[`friendtitle${i}`]}號人</p>
                                            <p className="content-numtest3">{data[`friendtext${i}`]}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ✅ 討厭鬼套資料 */}
                        <div className="enemies">
                            <div className="title-numtest3">
                                <p>遇到快逃R!</p>
                            </div>
                            <ul className="people-box2">
                                {[1, 2, 3].map(i => (
                                    <li className="people" key={i}>
                                        <img className={`img-p${i + 3}`} src={data[`enemiesImg${i}`]} alt="敵人角色圖" />
                                        <div>
                                            <p className="name">{data[`enemiestitle${i}`]}號人</p>
                                            <p className="content-numtest3">{data[`enemiestext${i}`]}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div id="box2">
                        {/* ✅ 水晶推薦 */}
                        <div className="crystals">
                            <div className="title-numtest3">
                                <p>適合你的水晶</p>
                            </div>
                            <ul className="crystal-box">
                                {[1, 2, 3].map(i => (
                                    <li className="crystal" key={i}>
                                        <img className={`img-p${i + 6}`} src={data[`crystalImg${i}`]} alt="水晶圖" />
                                        <div>
                                            <p className="name">{data[`crystaltitle${i}`]}</p>
                                            <p className="content-numtest3">{data[`crystaltext${i}`]}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bracelet-design">
                            <div className="title2">
                                <svg viewBox="0 0 300 130" width="100%" preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                        <path id="curve" d="M 50,100 A 100,50 0 0,1 250,100" />
                                    </defs>
                                    <text fill="#684581" fontSize="18" letterSpacing="3">
                                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                                            ✦ 推薦設計款 ✦
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="title3">
                                <div className="star-box">
                                    <img className="star" src="./images/Numtest/star.png" alt="" />
                                </div>
                                <Link to="/Product">
                                    <div className="bracelet-box">
                                        <img className="bracelet" src={data.bracelet} alt="bracelet" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div id="button-box">
                        <button className="button1-j">分享測驗結果</button>
                        <button className="button2-j" onClick={() => navigate('/Customize1')}>
                            ✦ 訂製專屬手鍊 ✦
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
