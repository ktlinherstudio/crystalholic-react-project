import './ProductCollection.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import BgDark from '../../components/BgDark';
import FooterTrn from '../../components/FooterTrn';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import productSeriesData from '../../pages/Product/ProductCollection';


export default function ProductCollection() {
    /* --- React states ---------------------------------------------------- */
    const [activeSeries, setActiveSeries] = useState('blue');   // 目前選中的系列
    const [favorites, setFavorites] = useState({});
    const [triangleX, setTriangleX] = useState(0);            // 三角形的水平位置

    /* --- refs ------------------------------------------------------------ */
    const iconRefs = useRef({});      // { blue: HTMLElement, ... }
    const iconAreaRef = useRef(null);   // 整個 icon 區

    const navigate = useNavigate();

    /* ---  icon 清單（id 必須對應資料檔 key） ----------------------------- */
    const iconList = [
        { id: 'blue', label: '澄語之藍', icon: './images/Product/icon_procat-blue.svg' },
        { id: 'adventure', label: '秘境探光', icon: './images/Product/icon_procat-adventure.svg' },
        { id: 'seasons', label: '四季琉波', icon: './images/Product/icon_procat_seasons.svg' },
        { id: 'cocktail', label: '微醺晶釀', icon: './images/Product/icon_procat-cocktail.svg' }
    ];

    /* --- 點擊收藏 -------------------------------------------------------- */
    const toggleFavorite = (e, idx) => {
        e.preventDefault(); // 阻止 <Link> 預設跳轉
        e.stopPropagation(); // 阻止事件冒泡
        setFavorites(prev => ({
            ...prev,
            [idx]: !prev[idx]           // 只改這張卡
        }));
    };

    /* --- 點擊商品卡片導頁 ---------------------------------------------- */
    const handleClickCard = () => {
        navigate('/Product');
    };

    /* --- 每次切換系列時，計算三角形目標 X 座標 --------------------------- */
    useEffect(() => {
        const iconEl = iconRefs.current[activeSeries];
        const areaEl = iconAreaRef.current;
        if (iconEl && areaEl) {
            const iconRect = iconEl.getBoundingClientRect();
            const areaRect = areaEl.getBoundingClientRect();
            const centerX = iconRect.left + iconRect.width / 2 - areaRect.left; // 中心點
            setTriangleX(centerX);
        }
    }, [activeSeries]);



    return (
        <>
            <NavBarWrapper variant="dark" />
            <main className="pc_main">
                {/* ─── 系列 icon 區 ───────────────────── */}
                <section className="pc_icon_area" ref={iconAreaRef}>
                    {/* 單一三角形指示器 */}
                    <div
                        className="pc_triangle_indicator"
                        style={{ left: `${triangleX - 48}px` }}    // 48px = 6rem / 2，讓中心對齊
                    />

                    {iconList.map(({ id, label, icon }) => (
                        <div
                            key={id}
                            className={`pc_icon_item ${activeSeries === id ? 'pc_active' : ''}`}
                            onClick={() => setActiveSeries(id)}
                            ref={(el) => (iconRefs.current[id] = el)}
                        >
                            <img src={icon} alt={label} />
                            <span>{label}</span>
                        </div>
                    ))}
                </section>

                {/* ─── 商品區與背景對話框 ─────────────── */}
                <section className="pc_product_area">
                    {/* 商品們 */}
                    <section className="pc_products">
                        {productSeriesData[activeSeries]?.products.map((p, idx) => (
                            <div
                                key={idx}
                                className="pc_product_card"
                                onClick={handleClickCard}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="pc_product_img_wrap">
                                    <img
                                        className="pc_fav_icon"
                                        src={favorites[idx]
                                            ? './images/Product/btn-fav-click.svg'
                                            : './images/Product/btn-fav.svg'}
                                        alt="收藏"
                                        onClick={(e) => toggleFavorite(e, idx)}
                                    />
                                    <img className="pc_product_img" src={p.image} alt={p.name} />
                                </div>

                                <div className="pc_product_info">
                                    <span className="pc_product_name">{p.name}</span>
                                    <span className="pc_product_price">{p.price}</span>
                                </div>

                                <div className="pc_product_crystals">
                                    {p.crystals.map((src, i) => (
                                        <img key={i} className="pc_crystal_img" src={src} alt="水晶名稱" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* 系列介紹 */}
                    <section className="pc_product_introduce">
                        <h5>{productSeriesData[activeSeries].name}</h5>
                        <img className="pc_divider_line" src="./images/Product/deco-divider_blue.png" alt="裝飾線" />
                        {productSeriesData[activeSeries].description.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </section>
                </section>
            </main>

            <footer className='pc_footer'>
                <BgDark />
                <FooterTrn />
            </footer>
        </>
    )
} 