const crystalsData = {
    靈性直覺: [
        {
            name: "藍晶石",
            englishName: "Kyanite",
            image: "/images/S-CrystalSingle/crystal-kyanite.png",
            description: "藍晶石是一種美麗的藍色水晶，擁有從淺藍到深藍的色澤，並呈現獨特的光澤。它常用於增強溝通、情緒平衡和靈性覺醒。",
            effects: "促進溝通：幫助開啟喉輪，增強表達與自我溝通。\n情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。\n靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。",
            suitableFor: "追求心靈成長與靈性覺醒的人。\n需要情緒平衡與放鬆的人。",
            recommended: [
                {
                    src: "/images/S-CrystalSingle/crystal-angelite.png",
                    alt: "天使石",
                    category: "放鬆冥想",
                    targetName: "天使石"
                },
                {
                    src: "/images/S-CrystalSingle/crystal-amethyst.png",
                    alt: "紫水晶",
                    category: "放鬆冥想",
                    targetName: "紫水晶"
                },
                {
                    src: "/images/S-CrystalSingle/crystal-sunstone.png",
                    alt: "太陽石",
                    category: "放鬆冥想",
                    targetName: "太陽石"
                }
            ]
        },
        {
            name: "拉長石",
            englishName: "Labradorite",
            image: "/images/S-CrystalSingle/crystal-labradorite.png",
            description: "拉長石是一種帶有彩虹光澤的神秘水晶，常用於靈性覺醒與能量防護，能幫助打開潛意識的大門。",
            effects: "直覺啟動：提升對能量與情緒的敏銳度。\n靈視開發：增強靈視與第六感。\n能量防護：穩定氣場，抵禦外在干擾。",
            suitableFor: "渴望開發直覺與靈性視野的人。\n經常處於高能量環境中工作者。",
            recommended: [
                {
                    src: "/images/S-CrystalSingle/crystal-sodalite.png",
                    alt: "蘇打石",
                    category: "靈性直覺",
                    targetName: "蘇打石"
                },
                {
                    src: "/images/S-CrystalSingle/crystal-clearquartz.png",
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                },
                {
                    src: "/images/S-CrystalSingle/crystal-moonstone.png",
                    alt: "月光石",
                    category: "靈性直覺",
                    targetName: "月光石"
                }
            ]
        },
        {
            name: "青金石",
            englishName: "Lapis Lazuli",
            image: "/images/S-CrystalSingle/crystal-lapislazuli.png",
            description: "青金石是一種深藍色帶金點的水晶，自古以來被視為智慧與真理的象徵，對應第三眼與喉輪。",
            effects: "開啟直覺：激發洞察力與內在覺察。\n增進溝通：協助表達真實感受與思想。\n提升誠實與自省能力。",
            suitableFor: "希望提升心靈與溝通品質的人。\n探索內在智慧的靈性修行者。",
            recommended: [
                {
                    src: "/images/S-CrystalSingle/crystal-clearquartz.png",
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                },
                {
                    src: "/images/S-CrystalSingle/crystal-selenite.png",
                    alt: "月光石",
                    category: "靈性直覺",
                    targetName: "月光石"
                }
            ]
        },
        {
            name: "月光石",
            englishName: "Moonstone",
            image: "/images/S-CrystalSingle/crystal-moonstone.png",
            description: "月光石擁有柔和光澤，象徵女性能量與直覺之美，是與月亮能量連結的重要水晶。",
            effects: "增強直覺：喚醒潛藏的內在感知力。\n情緒穩定：柔化情緒波動，帶來內在平靜。\n助夢境探索與靈性連結。",
            suitableFor: "重視內在情緒與直覺發展的人。\n女性能量工作者與療癒者。",
            recommended: [
                { src: "/images/S-CrystalSingle/crystal-labradorite.png", alt: "拉長石" },
                { src: "/images/S-CrystalSingle/crystal-albite.png", alt: "白月光鈣長石" }
            ]
        },
        {
            name: "白水晶",
            englishName: "Clear Quartz",
            image: "/images/S-CrystalSingle/crystal-clearquartz.png",
            description: "白水晶是最具通用性的能量石之一，可放大其他水晶能量，也能幫助清理能量與思緒。",
            effects: "能量放大：提升其他水晶功效。\n思緒清晰：清除混亂，集中注意力。\n靈性連結：建立與宇宙的純淨管道。",
            suitableFor: "希望提升靈性覺察或做能量療癒者。\n初學者或希望水晶能發揮最大效能的人。",
            recommended: [
                { src: "/images/S-CrystalSingle/crystal-herkimerdiamond.png", alt: "赫基蒙鑽石" },
                { src: "/images/S-CrystalSingle/crystal-selenite.png", alt: "透石膏" }
            ]
        },
        {
            name: "金曜石",
            englishName: "Gold Obsidian",
            image: "/images/S-CrystalSingle/crystal-goldobsidian.png",
            description: "金曜石是一種擁有金色閃光的黑曜石，能深入潛意識進行自我覺察與靈性防護。",
            effects: "潛意識探索：幫助面對與整合陰影面。\n能量護盾：保護氣場免受外界干擾。\n穩定地氣：幫助靈性修行者保持腳踏實地。",
            suitableFor: "進行內在陰影療癒或能量保護的人。\n靈性修行路上想保持穩定能量的人。",
            recommended: [
                { src: "/images/S-CrystalSingle/crystal-labradorite.png", alt: "拉長石" },
                { src: "/images/S-CrystalSingle/crystal-herkimerdiamond.png", alt: "赫基蒙鑽石" }
            ]
        },
        {
            name: "蘇打石",
            englishName: "Sodalite",
            image: "/images/S-CrystalSingle/crystal-sodalite.png",
            description: "蘇打石具有深藍色與白色脈絡，幫助平衡理性與直覺，是高敏感者常用的能量穩定石。",
            effects: "直覺與邏輯整合：協助靈性思考時不偏不倚。\n冷靜思緒：減少情緒波動與過度腦袋運轉。\n表達清晰：幫助具象化靈感與訊息。",
            suitableFor: "感知力強但常情緒波動的人。\n需要提升專注與自我覺察力者。",
            recommended: [
                { src: "/images/S-CrystalSingle/crystal-lapislazuli.png", alt: "青金石" },
                { src: "/images/S-CrystalSingle/crystal-labradorite.png", alt: "拉長石" }
            ]
        },
        {
            name: "丹泉石",
            englishName: "Tanzanite",
            image: "/images/S-CrystalSingle/crystal-tanzanite.png",
            description: "丹泉石是一種稀有的高振動水晶，常被用於提升靈性意識與轉化。",
            effects: "打通靈性通道：連結更高次元與頻率。\n意識轉化：協助蛻變與超越舊有模式。\n喚醒內在靈魂目標。",
            suitableFor: "靈性成長快速的人。\n想尋求人生使命與內在覺醒者。",
            recommended: [
                { src: "/images/S-CrystalSingle/crystal-herkimerdiamond.png", alt: "赫基蒙鑽石" },
                { src: "/images/S-CrystalSingle/crystal-clearquartz.png", alt: "白水晶" }
            ]
        },
        {
            name: "白月光鈣長石",
            englishName: "Albite",
            image: "/images/S-CrystalSingle/crystal-albite.png",
            description: "白月光鈣長石有細緻柔和的銀白光澤，是夢境工作與潛意識探索的引導石。",
            effects: "提升夢境記憶與覺察。\n連結高維意識能量。\n協助情緒釋放與潛意識清理。",
            suitableFor: "從事夢境記錄與潛意識研究的人。\n重視內在療癒與能量淨化者。",
            recommended: [
                { src: "/images/S-CrystalSingle/crystal-moonstone.png", alt: "月光石" },
                { src: "/images/S-CrystalSingle/crystal-labradorite.png", alt: "拉長石" }
            ]
        },
        {
            name: "藍方解石",
            englishName: "Blue Calcite",
            image: "/images/S-CrystalSingle/crystal-bluecalcite.png",
            description: "藍方解石是一種淡藍色的柔和水晶，擁有穩定情緒與啟動直覺的力量，是通往內在覺知的重要引導石。",
            effects: "放鬆神經：減少焦慮與過度思考的能量負擔。\n靈性溝通：強化喉輪與第三眼的連動。\n提升接收力：協助接收宇宙靈感與夢境訊息。",
            suitableFor: "需要放鬆心智並開啟直覺感知的人。\n想增進靈性訊息接收能力的靈性初學者或療癒者。",
            recommended: [
                { src: "/images/S-CrystalSingle/crystal-moonstone.png", alt: "月光石" },
                { src: "/images/S-CrystalSingle/crystal-sodalite.png", alt: "蘇打石" }
            ]
        }
    ],
    專注工作: [
        {
            name: "黃水晶",
            englishName: "Citrine",
            image: "/images/S-CrystalSingle/crystal-citrine.png",
            description: "黃水晶象徵財富與自信，能激發思考與專注。",
            effects: "提升專注力、增強邏輯思考與自信",
            suitableFor: "需要提高工作效率、學習力的人",
            recommended: []
        }
    ],
    愛與人際: [
        {
            name: "玫瑰石英",
            englishName: "Rose Quartz",
            image: "/images/S-CrystalSingle/crystal-rosequartz.png",
            description: "玫瑰石英是愛與療癒之石，能打開心輪，帶來溫柔與包容。",
            effects: "促進人際關係、吸引愛情、療癒情傷",
            suitableFor: "渴望愛與情感連結者",
            recommended: []
        }
    ],
    能量防護: [
        {
            name: "黑曜石",
            englishName: "Obsidian",
            image: "/images/S-CrystalSingle/crystal-obsidian.png",
            description: "黑曜石是強大的防護石，能吸收負能量並穩定氣場。",
            effects: "防小人、防負能量、穩定磁場",
            suitableFor: "容易受外界影響、需要保護的人",
            recommended: []
        }
    ],
    放鬆冥想: [
        {
            name: "拉長石",
            englishName: "Labradorite",
            image: "/images/S-CrystalSingle/crystal-labradorite.png",
            description: "拉長石擁有彩虹光澤，是開啟直覺與靈性視野的水晶。",
            effects: "增強直覺、連結高我、提升洞察力",
            suitableFor: "冥想者、靈修者、靈性療癒工作者",
            recommended: []
        }
    ]
};

export default crystalsData;
