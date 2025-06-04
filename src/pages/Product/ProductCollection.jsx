import './ProductCollection.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import BgDark from '../../components/BgDark';
import FooterTrn from '../../components/FooterTrn';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import productSeriesData from './productSeriesData';

export default function ProductCollection() {
  /* --- React states ---------------------------------------------------- */
  const [activeSeries, setActiveSeries] = useState('blue');
  const [favorites, setFavorites] = useState({});
  const [triangleX, setTriangleX] = useState(0);

  /* --- refs ------------------------------------------------------------ */
  const iconRefs = useRef({});
  const iconAreaRef = useRef(null);

  const navigate = useNavigate();

  /* ---  icon 清單（id 必須對應資料檔 key） ----------------------------- */
  const iconList = [
    { id: 'blue', label: '澄語之藍', icon: './images/Product/icon_procat-blue.svg' },
    { id: 'adventure', label: '秘境探光', icon: './images/Product/icon_procat-adventure.svg' },
    { id: 'seasons', label: '四季琉波', icon: './images/Product/icon_procat_seasons.svg' },
    { id: 'cocktail', label: '微醺晶釀', icon: './images/Product/icon_procat-cocktail.svg' }
  ];

  /* --- 點擊收藏 -------------------------------------------------------- */
  // const toggleFavorite = (e, idx) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setFavorites(prev => ({ ...prev, [idx]: !prev[idx] }));
  // };

  /* --- 點擊商品卡片導頁 ---------------------------------------------- */
  const handleClickCard = (seriesKey, productIndex) => {
    navigate(`/Product/${seriesKey}/${productIndex}`);
  };

  /* --- 切換系列時移動三角形 ------------------------------------------ */
  useEffect(() => {
    const iconEl = iconRefs.current[activeSeries];
    const areaEl = iconAreaRef.current;
    if (iconEl && areaEl) {
      const iconRect = iconEl.getBoundingClientRect();
      const areaRect = areaEl.getBoundingClientRect();
      setTriangleX(iconRect.left + iconRect.width / 2 - areaRect.left);
    }
  }, [activeSeries]);

  useEffect(() => {
    const hash = window.location.hash?.replace('#', '');
    if (hash && productSeriesData[hash]) {
      setActiveSeries(hash);
    }
  }, []);

  useEffect(() => {
    // 預載每個系列的主圖與水晶圖
    Object.values(productSeriesData).forEach(series => {
      series.products.forEach(product => {
        // 預載主圖
        const img = new Image();
        img.src = product.image;
  
        // 預載水晶圖
        if (Array.isArray(product.crystals)) {
          product.crystals.forEach(src => {
            const crystalImg = new Image();
            crystalImg.src = src;
          });
        }
      });
    });
  }, []);

  return (
    <>
      <NavBarWrapper variant="dark" />
      <main className="pc_main">
        {/* ─── 系列 icon 區 ───────────────────── */}
        <section className="pc_icon_area" ref={iconAreaRef}>
          {/* 三角形指示器 */}
          <div
            className={`pc_triangle_indicator triangle_${activeSeries}`}
            style={{ left: `${triangleX - 48}px` }}
          />
          {iconList.map(({ id, label, icon }) => (
            <div
              key={id}
              className={`pc_icon_item ${activeSeries === id ? 'pc_active' : ''}`}
              onClick={() => setActiveSeries(id)}
              ref={el => (iconRefs.current[id] = el)}
            >
              <img src={icon} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </section>

        {/* ─── 商品區 ─────────────────────────── */}
        <section className={`pc_product_area pc_bg_${activeSeries}`}>
          <section className="pc_products">
            {productSeriesData[activeSeries]?.products.map((p, idx) => (
              <div
                key={idx}
                className="pc_product_card"
                onClick={() => handleClickCard(activeSeries, idx)}
              >
                <div className="pc_product_img_wrap">
                  {/* <div
                    className={`pc_fav_icon ${favorites[idx] ? 'clicked' : ''}`}
                    onClick={e => toggleFavorite(e, idx)}
                    onMouseEnter={e => e.currentTarget.classList.add('hover')}
                    onMouseLeave={e => e.currentTarget.classList.remove('hover')}
                  /> */}
                  <img className="pc_product_img" src={p.image} alt={p.name} />
                </div>

                <div className="pc_product_info">
                  <span className="pc_product_name">{p.name}</span>
                  <span className={`pc_product_price price_${activeSeries}`}>{p.price}</span>
                </div>

                <div className="pc_product_crystals">
                  {p.crystals.map((src, i) => (
                    <img key={i} className="pc_crystal_img" src={src} alt="" />
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* ─── 系列介紹 ─────────────────────── */}
          <section className="pc_product_introduce">
            <h5 className={`pc_intro_title pc_intro_title_${activeSeries}`}>
              {productSeriesData[activeSeries].name}
            </h5>
            <img
              className="pc_divider_line"
              src={`/images/Product/deco-divider_${activeSeries}.svg`}
              alt=""
            />
            {productSeriesData[activeSeries].description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </section>
        </section>
      </main>

      <footer className="pc_footer">
        <BgDark />
        <FooterTrn />
      </footer>
    </>
  );
}
