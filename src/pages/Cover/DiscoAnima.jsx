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
            name_ch: '2水晶',
            description: '紫水晶被認為是精神上的守護石，有助於舒緩壓力與提升直覺力。',
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
                'crystal-rose-quartz.png',
                'crystal-kyanite.png',
                'crystal-moonstone.png'
            ]
        },
        'disc-sunstone': {
            name_en: 'Kyanite',
            name_ch: '3晶石',
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
        'disc-golden': {
            name_en: 'Kyanite',
            name_ch: '4晶石',
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
        'disc-strawberry': {
            name_en: 'Kyanite',
            name_ch: '5晶石',
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
        'disc-angelite': {
            name_en: 'Kyanite',
            name_ch: '6晶石',
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
        'disc-moonstone': {
            name_en: 'Kyanite',
            name_ch: '7晶石',
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
        'disc-rose': {
            name_en: 'Kyanite',
            name_ch: '8晶石',
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
        'disc-green': {
            name_en: 'Kyanite',
            name_ch: '9晶石',
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
        'disc-moonstone1': {
            name_en: 'Kyanite',
            name_ch: '10晶石',
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
        'disc-rose1': {
            name_en: 'Kyanite',
            name_ch: '11晶石',
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
        'disc-angelite1': {
            name_en: 'Kyanite',
            name_ch: '12晶石',
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