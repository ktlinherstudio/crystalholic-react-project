import './ProductCollection.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import BgDark from '../../components/BgDark';
import FooterTrn from '../../components/FooterTrn';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productSeriesData from '../../pages/Product/ProductCollection';


export default function ProductCollection() {
    const [activeSeries, setActiveSeries] = useState('blue');
    const [isFavorited, setIsFavorited] = useState(false);
    const navigate = useNavigate();

    const toggleFavorite = (e) => {
        e.preventDefault(); // 阻止 <Link> 預設跳轉
        e.stopPropagation(); // 阻止事件冒泡
        setIsFavorited((prev) => !prev);
    };

    const handleClickCard = () => {
        navigate('/Product');
    };

     const iconList = [
    { id: 'blue', label: '澄語之藍', icon: './images/Product/icon_procat-blue.svg' },
    { id: 'adventure', label: '秘境探光', icon: './images/Product/icon_procat-adventure.svg' },
    { id: 'seasons', label: '四季琉波', icon: './images/Product/icon_procat_seasons.svg' },
    { id: 'cocktail', label: '微醺晶釀', icon: './images/Product/icon_procat-cocktail.svg' }
  ];

    return (
        <>
            <NavBarWrapper variant="dark" />
            <main className="pc_main">
                {/* 系列 icon 區 */}
                <section className="pc_icon_area">
                    {/* 澄語之藍 */}
                    <div className="pc_icon_item">
                        <img src="./images/Product/icon_procat-blue.svg" alt="澄語之藍" />
                        <span>澄語之藍</span>
                    </div>
                    {/* 秘境探光 */}
                    <div className="pc_icon_item">
                        <img src="./images/Product/icon_procat-adventure.svg" alt="秘境探光" />
                        <span>秘境探光</span>
                    </div>
                    {/* 四季琉波 */}
                    <div className="pc_icon_item">
                        <img src="./images/Product/icon_procat_seasons.svg" alt="四季琉波" />
                        <span>四季琉波</span>
                    </div>
                    {/* 微醺晶釀（當前 active） */}
                    <div className="pc_icon_item pc_active">
                        <img src="./images/Product/icon_procat-cocktail.svg" alt="微醺晶釀" />
                        <span>微醺晶釀</span>
                    </div>
                </section>

                {/* 商品區與背景對話框 */}
                <section className="pc_product_area">
                    {/* 商品們 */}
                    <section className="pc_products">
                        {/* 薄荷之吻 */}
                        <div className="pc_product_card">
                            {/* 商品照 */}
                            <div className="pc_product_img_wrap">
                                <img className="pc_fav_icon" src="./images/Product/btn-fav.svg" alt="收藏" />
                                <img className="pc_product_img" src="./images/S-CrystalBracelet/product_cocktail_mojito.jpg" alt="薄荷之吻" />
                            </div>
                            {/* 商品資訊 */}
                            <div className="pc_product_info">
                                <span className="pc_product_name">薄荷之吻</span>
                                <span className="pc_product_price">$2,590</span>
                            </div>
                            {/* 水晶 */}
                            <div className="pc_product_crystals">
                                <img className="pc_crystal_img" src="./images/Product/pc_wg_mj-1.svg" alt="水晶名稱" />
                                <img className="pc_crystal_img" src="./images/Product/pc_wg_mj-2.svg" alt="水晶名稱" />
                                <img className="pc_crystal_img" src="./images/Product/pc_wg_mj-3.svg" alt="水晶名稱" />
                            </div>
                        </div>

                        {/* 薩提爾的獨酌 */}
                        <div className="pc_product_card" onClick={handleClickCard} style={{ cursor: 'pointer' }}>
                            <div className="pc_product_img_wrap">
                                <img
                                    className="pc_fav_icon"
                                    src={isFavorited ? "./images/Product/btn-fav-click.svg" : "./images/Product/btn-fav.svg"}
                                    alt="收藏"
                                    onClick={toggleFavorite}
                                />
                                <img className="pc_product_img" src="./images/S-CrystalBracelet/product_cocktail_whisky.jpg" alt="薩提爾的獨酌" />
                            </div>
                            <div className="pc_product_info">
                                <span className="pc_product_name">薩提爾的獨酌</span>
                                <span className="pc_product_price">$2,590</span>
                            </div>
                            <div className="pc_product_crystals">
                                <img className="pc_crystal_img" src="./images/Product/pc_wg_ws-1.svg" alt="水晶名稱" />
                                <img className="pc_crystal_img" src="./images/Product/pc_wg_ws-2.svg" alt="水晶名稱" />
                                <img className="pc_crystal_img" src="./images/Product/pc_wg_ws-3.svg" alt="水晶名稱" />
                            </div>
                        </div>

                        {/* 煙花紅酒 */}
                        <div className="pc_product_card">
                            <div className="pc_product_img_wrap">
                                <img className="pc_fav_icon" src="./images/Product/btn-fav.svg" alt="收藏" />
                                <img
                                    className="pc_product_img"
                                    src="./images/S-CrystalBracelet/product_cocktail_redwine.jpg"
                                    alt="煙花紅酒"
                                />
                            </div>
                            <div className="pc_product_info">
                                <span className="pc_product_name">煙花紅酒</span>
                                <span className="pc_product_price">$2,590</span>
                            </div>
                            <div className="pc_product_crystals">
                                <img className="pc_crystal_img" src="./images/Product/pc_wg_red-1.svg" alt="水晶名稱" />
                                <img className="pc_crystal_img" src="./images/Product/pc_wg_red-2.svg" alt="水晶名稱" />
                                <img className="pc_crystal_img" src="./images/Product/pc_wg_red-3.svg" alt="水晶名稱" />
                            </div>
                        </div>
                    </section>

                    {/* 系列產品介紹 */}
                    <section className="pc_product_introduce">
                        <h5>微醺晶釀</h5>
                        <img className="pc_divider_line" src="./images/Product/deco-divider_blue.png" alt="裝飾線" />
                        <p>微醺晶釀系列以經典調酒為靈感，每一款設計都蘊含著發酵萃取後的情感與能量。</p>
                        <p>這些水晶不僅是情緒的釀造者，還能帶來感官的豐富享受，</p>
                        <p>幫助你調整內心平衡，進入一個充滿儀式感的狀態。</p>
                        <p>如同調酒師精心調配的飲品，細膩又充滿層次，帶你時刻體會微醺的美好。</p>
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