import { useState } from 'react';
import '../../App.scss/css/Style.min.css';

export default function TarotCard0528() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const tarotCards = [
    {
      title: '關心自己',
      text: '你最近需要多關心自己。',
      frontImage: './images/HomePage/lbtc1.svg',
    },
    {
      title: '轉變來臨',
      text: '你將迎來一個轉變。',
      frontImage: './images/HomePage/lbtc1.svg',
    },
    {
      title: '默默支持',
      text: '有人正在默默支持你。',
      frontImage: './images/HomePage/lbtc1.svg',
    },
    {
      title: '放手時機',
      text: '現在是放手的時候了。',
      frontImage: './images/HomePage/lbtc1.svg',
    },
    {
      title: '勇敢挑戰',
      text: '勇敢接受挑戰會帶來好運。',
      frontImage: './images/HomePage/lbtc1.svg',
    },
    {
      title: '直覺指引',
      text: '請相信直覺的指引。',
      frontImage: './images/HomePage/lbtc1.svg',
    },
  ];

  return (
    <section id="section-tarotcard">
      <div id="tarotcard-title">
        <span className="dimond-left">
          <img src="./images/HomePage/deco-diamond-left.svg" alt="" />
        </span>
        <h2 id="tarot-title">憑直覺抽一張吧</h2>
        <span className="dimond-right">
          <img src="./images/HomePage/deco-diamond-right.svg" alt="" />
        </span>
      </div>

      <div id="tarotcard-box">
        {tarotCards.map((card, index) => (
          <div
            key={index}
            className={`${index === 0 ? 'trcardchild-1' : 'trcard'} ${hoveredCard === index ? 'flipped' : ''}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => {
              if (hoveredCard === index) {
                setSelectedCard(index);
              }
            }}
          >
            <div className="card-inner">
              <div className="card-back">
                <img src="./images/HomePage/tarot-back.svg" alt="tarot back" />
              </div>
              <div className="card-front">
                <img src={card.frontImage} alt="tarot front" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCard !== null && (
        <div className="lightbox" onClick={() => setSelectedCard(null)}>
          <div className="lightbox-content">
            <h3>{tarotCards[selectedCard].title}</h3>
            <p>{tarotCards[selectedCard].text}</p>
            <button>關閉</button>
          </div>
        </div>
      )}
    </section>
  );
}