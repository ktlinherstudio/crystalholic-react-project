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
              className={index === 0 ? 'trcardchild-1' : 'trcard'}
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

      {/* lightbox */}
      <div id='lblb'>
        <section className=''>
          <div className='lbborder1'>
            <div className='lbcard'>
              <div><img src="./images/HomePage/lbtc1.svg" className="lbimg" alt="" /></div>
              <div className="lbcontent">
                <h2 className="lbh2">沁藍之澗</h2>
                <div><img src="./image/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
                <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
                <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。
                  海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
                <button className="lbbtn">看看手鍊</button>
              </div>
            </div>
          </div>
        </section>
      </div>
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