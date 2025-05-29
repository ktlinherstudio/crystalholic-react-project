import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss/css/Style.min.css';

export default function TarotCard0528() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const tarotDescriptions = [
    '你最近需要多關心自己。',
    '你將迎來一個轉變。',
    '有人正在默默支持你。',
    '現在是放手的時候了。',
    '勇敢接受挑戰會帶來好運。',
    '請相信直覺的指引。'
  ];

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedCardIndex(null);
  };

  return (
    <>
      <section id="section-tarotcard">
        <div id="tarotcard-title">
          <span className="dimond-left"><img src="./images/HomePage/deco-diamond-left.svg" alt="" /></span>
          <h2 id="tarot-title">憑直覺抽一張吧</h2>
          <span className="dimond-right"><img src="./images/HomePage/deco-diamond-right.svg" alt="" /></span>
        </div>

        <div id="tarotcard-box">
          {tarotDescriptions.map((desc, index) => (
            <img
              key={index}
              src="./images/HomePage/tarot-back.svg"
              className={`trcard ${index === 0 ? 'trcardchild-1' : ''}`}
              alt={`tarot card ${index + 1}`}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        <div>
          <Link to="/ProductCollection" id="tarotcard-btn">所有商品</Link>
        </div>
      </section>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <p className="lightbox-text">{tarotDescriptions[selectedCardIndex]}</p>
          </div>
        </div>
      )}
    </>
  );
}
            // {/* 憑直覺抽一張吧 */}
            // <section id="section-tarotcard">
            //     <div id="tarotcard-title">
            //         <span className="dimond-left"><img src="./images/HomePage/deco-diamond-left.svg" alt="" /></span>
            //         <h2 id="tarot-title">憑直覺抽一張吧</h2>
            //         <span className="dimond-right"><img src="./images/HomePage/deco-diamond-right.svg" alt="" /></span>
            //     </div>
            //     <div id="tarotcard-box">
            //         <img src="./images/HomePage/tarot-back.svg" className="trcardchild-1" alt="" />
            //         <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
            //         <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
            //         <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
            //         <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
            //         <img src="./images/HomePage/tarot-back.svg" className="trcard" alt="" />
            //     </div>
            //     <div >
            //         <Link to="/ProductCollection" id="tarotcard-btn">所有商品</Link>
            //     </div>
            // </section>