import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss/css/Style.min.css';
import { div, img } from 'framer-motion/client';

export default function TarotCard0528() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const tarotDescriptions = [
    <div className="lbcontent">
      <h2 className="lbh2">沁藍之澗</h2>
      <div><img src="./public/image/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
      <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
      <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
        海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
      <button className="lbbtn">看看手鍊</button>
    </div>,
    <div className="lbcontent">
      <h2 className="lbh2">金魚泡泡</h2>
      <div><img src="./public/image/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
      <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
      <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
        海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
      <button className="lbbtn">看看手鍊</button>
    </div>,
    <div className="lbcontent">
      <h2 className="lbh2">沉睡王國的夢幻派對</h2>
      <div><img src="./public/image/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
      <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
      <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
        海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
      <button className="lbbtn">看看手鍊</button>
    </div>,
    <div className="lbcontent">
      <h2 className="lbh2">北國雪森</h2>
      <div><img src="./public/image/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
      <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
      <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
        海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
      <button className="lbbtn">看看手鍊</button>
    </div>,
    <div className="lbcontent">
      <h2 className="lbh2">薄荷之吻</h2>
      <div><img src="./public/image/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
      <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
      <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
        海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
      <button className="lbbtn">看看手鍊</button>
    </div>,
    <div className="lbcontent">
      <h2 className="lbh2">極圈探險家</h2>
      <div><img src="./public/image/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
      <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
      <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
        海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
      <button className="lbbtn">看看手鍊</button>
    </div>
  ];

  const tarotImg = [
    <img src="./images/HomePage/lbtc1.svg" className="lbimg" alt="" />,
    <img src="./images/HomePage/lbtc2.svg" className="lbimg" alt="" />,
    <img src="./images/HomePage/lbtc3.svg" className="lbimg" alt="" />,
    <img src="./images/HomePage/lbtc4.svg" className="lbimg" alt="" />,
    <img src="./images/HomePage/lbtc5.svg" className="lbimg" alt="" />,
    <img src="./images/HomePage/lbtc6.svg" className="lbimg" alt="" />,

  ]

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
        {/* title */}
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
            <div className='lbborder1'>
              <div className='lbborder2'>
                <button className="lightbox-close" onClick={closeLightbox}>×</button>
                <div>{tarotImg[selectedCardIndex]}</div>
                <div className="lightbox-text">{tarotDescriptions[selectedCardIndex]}</div>
              </div>
            </div>
          </div>
        </div >
      )
      }

      
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
// </section>\
//   className={index === 0 ? 'trcardchild-1' : 'trcard'}



{/* lightbox */}
      // <div id='lblb'>
      //   <section className='lbborder1'>
      //     <div className='lbborder2'>
      //       <div className='lbcard'>
      //         <button className="lightbox-close" onClick={closeLightbox}>×</button>
      //         {/* <div><img src="./images/HomePage/lbtc1.svg" className="lbimg" alt="" /></div> */}
      //         <div className="lbcontent">
      //           <h2 className="lbh2">沁藍之澗</h2>
      //           <div><img src="./public/image/HomePage/lbdeco.svg" alt="" className='lbdeco' /></div>
      //           <p className="p1"> 主石：海藍寶 平靜溝通之石</p>
      //           <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
      //             海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
      //           <button className="lbbtn">看看手鍊</button>
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      // </div>