import { useEffect, useState } from 'react';
import '../../App.scss/css/Style.min.css';

export default function Cover() {
    const [crystals, setCrystals] = useState([
        'disc-kyanite',
        'disc-amethyst',
        'disc-sunstone',
        'disc-golden',
        'disc-strawberry',
        'disc-angelite',
        'disc-moonstone',
        'disc-rose',
        'disc-green',
        'disc-moonstone1',
        'disc-rose1',
        'disc-angelite1'
    ]);

    const crystalImages = {
        'disc-kyanite': 'crystal-kyanite.svg',
        'disc-amethyst': 'crystal-amethyst.svg',
        'disc-sunstone': 'crystal-sunstone.svg',
        'disc-golden': 'crystal-golden-rutilated-quartz.svg',
        'disc-strawberry': 'crystal-golden-strawberry-quartz.svg',
        'disc-angelite': 'crystal-angelite.svg',
        'disc-moonstone': 'crystal-moonstone.svg',
        'disc-rose': 'crystal-rose-quartz.svg',
        'disc-green': 'crystal-green-phantom-quartz.svg',
        'disc-moonstone1': 'crystal-moonstone.svg',
        'disc-rose1': 'crystal-rose-quartz.svg',
        'disc-angelite1': 'crystal-angelite.svg'
    };

    const handleUp = () => {
        const newOrder = [crystals[crystals.length - 1], ...crystals.slice(0, crystals.length - 1)];
        setCrystals(newOrder);
    };

    const handleDown = () => {
        const newOrder = [...crystals.slice(1), crystals[0]];
        setCrystals(newOrder);
    };

    const currentCrystal = crystals[0];

    return (
        <>
            <section id="section-crystaldiscovery">
                <div className="crystal-display">
                    <div className="circlebox">
                        {crystals.map((id, index) => (
                            <div className='circle' key={id}>
                                {index === 0 ? (
                                    <div className='withbtn'>
                                        <button id='circleup' onClick={handleUp}>
                                            <img src="./images/HomePage/icon_btn_down.ico.svg" alt="" />
                                        </button>
                                        <div>
                                            <img src={`./images/HomePage/covercrystal/${crystalImages[id]}`} id={id} alt="" />
                                        </div>
                                        <button id='circledown' onClick={handleDown}>
                                            <img src="./images/HomePage/icon_btn_up.ico.svg" alt="" />
                                        </button>
                                    </div>
                                ) : (
                                    <img src={`./images/HomePage/covercrystal/${crystalImages[id]}`} id={id} alt="" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 顯示對應水晶資訊 */}
                <div className="section-crystaldiscovery">
                    <header>
                        <div id="titlediscovery">
                            <span className="en">Crystal Discoveries</span>
                            <span>水晶小百科</span>
                        </div>
                    </header>
                    <div className="crystaldiscovery">
                        {renderCrystalContent(currentCrystal)}
                    </div>
                </div>
            </section>
        </>
    );
}

function renderCrystalContent(id) {
    const content = {
        'disc-kyanite': {
            name_en: 'Kyanite',
            name_ch: '藍晶石',
            description: '藍晶石是一種美麗的藍色水晶，擁有從淺藍到深藍的色澤，並呈現獨特的光澤。它常用於增強溝通、情緒平衡和靈性覺醒。',
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-angelite.png',
                'crystal-amethyst.png',
                'crystal-sunstone.png'
            ]
        },
        'disc-amethyst': {
            name_en: 'Amethyst',
            name_ch: "紫水晶",
            description: "紫水晶是一種高頻能量的靈性水晶，象徵智慧與平靜，能淨化心靈並帶來內在穩定。",
            benefits: [
                '安神鎮定：幫助釋放壓力、改善睡眠品質。',
                '提升智慧：強化集中力與創造力。',
                '靈性成長：幫助冥想與內在探索。'
            ],
            people: [
                '需要情緒紓壓與放鬆的人。',
                '從事創作、學習與靈修活動的人。'
            ],
            suggestionImgs: [
                'crystal-rosequartz.png',
                'crystal-clearquartz.png',
                'crystal-angelite.png'
            ]
        },
        'disc-sunstone': {
            name_en: 'Sunstone',
            name_ch: '太陽石',
            description: "太陽石是一種帶有金橘色光澤的水晶，象徵溫暖、活力與正向能量，能喚醒內在的生命力與快樂感。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-citrine.png',
                'crystal-rosequartz.png',
                'crystal-amethyst.png'
            ]
        },
        'disc-golden': {
            name_en: 'Gold Obsidia',
            name_ch: '金曜石',
            description: "金曜石是一種擁有金色光澤的黑曜石，象徵光明照進黑暗，能深入潛意識協助轉化陰影與建立能量防護罩，是極具力量的靈性護盾。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-blacktourmaline.png',
                'crystal-smokyquartz.png',
                'crystal-labradorite.png'
            ]
        },
        'disc-strawberry': {
            name_en: 'Strawberry',
            name_ch: '草莓晶',
            description: "草莓晶散發溫潤柔和的紅粉能量，有助吸引桃花與提升戀愛運，是甜美愛情能量的代表。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-rosequartz.png',
                'crystal-rhodochrosite.png',
                'crystal-garnet.png'
            ]
        },
        'disc-angelite': {
            name_en: 'Angelite',
            name_ch: '天使石',
            description: "天使石是一種溫柔的淡藍色水晶，象徵和平與靜心，常被視為與天使界連結的橋樑，能帶來深層的寧靜與支持感。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-moonstone.png',
                'crystal-rosequartz.png',
                'crystal-amethyst.png'
            ]
        },
        'disc-moonstone': {
            name_en: 'Moonstone',
            name_ch: '月光石',
            description: "月光石擁有柔和光澤，象徵女性能量與直覺之美，是與月亮能量連結的重要水晶。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-labradorite.png',
                'crystal-albite.png',
                'crystal-sunstone.png'
            ]
        },
        'disc-rose': {
            name_en: 'Rose Quartz',
            name_ch: '玫瑰石英',
            description: "玫瑰石英是最經典的愛情水晶，擁有溫柔粉色能量，象徵無條件的愛與心輪療癒。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-moonstone.png',
                'crystal-clearquartz.png',
                'crystal-rubellite.png'
            ]
        },
        'disc-green': {
            name_en: "Green Fluorite",
            name_ch: '綠螢石',
            description: "綠螢石具有淨化思緒與安撫心輪的功效，能協助釋放雜念、整理混亂狀態，非常適合在靜心與放鬆時使用。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-smokyquartz.png',
                'crystal-clearquartz.png',
                'crystal-rosequartz.png'
            ]
        },
        'disc-moonstone1': {
            name_en: 'Moonstone',
            name_ch: '月光石',
            description: "月光石擁有柔和光澤，象徵女性能量與直覺之美，是與月亮能量連結的重要水晶。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-labradorite.png',
                'crystal-albite.png',
                'crystal-sunstone.png'
            ]
        },
        'disc-rose1': {
            name_en: 'Rose Quartz',
            name_ch: '玫瑰石英',
            description: "玫瑰石英是最經典的愛情水晶，擁有溫柔粉色能量，象徵無條件的愛與心輪療癒。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-moonstone.png',
                'crystal-clearquartz.png',
                'crystal-rubellite.png'
            ]
        },
        'disc-angelite1': {
            name_en: 'Angelite',
            name_ch: '天使石',
            description: "天使石是一種溫柔的淡藍色水晶，象徵和平與靜心，常被視為與天使界連結的橋樑，能帶來深層的寧靜與支持感。",
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-moonstone.png',
                'crystal-rosequartz.png',
                'crystal-amethyst.png'
            ]
        }
        // ...你可以根據這個格式繼續補充其他水晶
    };

    const crystal = content[id];
    if (!crystal) return null;

    return (
        <>
            <article className="covercrystal">
                <div className="crystal-name">
                    <span className="en">{crystal.name_en}</span>
                    <span className="ch">{crystal.name_ch}</span>
                </div>
                <div className="discovery-content">
                    <p>{crystal.description}</p>
                </div>
            </article>
            <article className="discovery-p1">
                <h2>主要功效</h2>
                <p className="discovery-p1content">
                    {crystal.benefits.map((item, idx) => <span key={idx}>{item}<br /></span>)}
                </p>
            </article>
            <article className="discovery-p2">
                <h2>適合人群</h2>
                <p className="discovery-p2content">
                    {crystal.people.map((item, idx) => <span key={idx}>{item}<br /></span>)}
                </p>
            </article>
            <article className="discovery-p3">
                <h2>建議搭配水晶</h2>
                <div className="discovery-imgbox">
                    {crystal.suggestionImgs.map((img, idx) => (
                        <img src={`./images/S-CrystalSingle/${img}`} className="discovery-img" key={idx} alt="" />
                    ))}
                </div>
            </article>
        </>
    );
}