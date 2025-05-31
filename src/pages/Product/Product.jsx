import './Product.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn';
import '../../components/BgLight.css';
import BgDark from '../../components/BgDark';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const [isFav, setIsFav] = useState(false);
  const [collectionFavs, setCollectionFavs] = useState([false, false, false]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleFavClick = (e) => {
    e.stopPropagation();
    setIsFav((prev) => !prev);
  };

  const handleCollectionFavClick = (index) => (e) => {
    e.stopPropagation();
    setCollectionFavs((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const handleIncreaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <NavBarWrapper variant="dark" />
      <main className="product_main">
        {/* 單一商品區 */}
        <section className="p_product_area">
          <div className="p_product_box">
            <div className="p_product_img_left">
              <img
                className="p_fav_icon"
                src={isFav ? "./images/Product/btn-fav-click.svg" : "./images/Product/btn-fav.svg"}
                alt="收藏"
                onClick={handleFavClick}
                style={{ cursor: 'pointer' }}
              />
              <img
                className="p_product_img"
                src="./images/S-CrystalBracelet/product_cocktail_whisky.jpg"
                alt="薩提爾的獨酌"
              />
            </div>
            <div className="p_product_right">
              <div className="p_product_title">
                <h3>薩提爾的獨酌</h3>
                <span>NT$2,590</span>
              </div>
              <hr />
              <p className="p_product_description">
                這款設計靈感來自加入冰塊的威士忌，透過喜馬拉雅白水晶所營造出的「冰晶意象」，傳達出清冽、透明且深層的情感釋放。
              </p>
              <div className="p_product_crystal_area">
                <div className="p_product_crystals">
                  <img className="p_crystal_img" src="./images/Product/pc_ct_ws-1.svg" alt="水晶名稱" />
                  <img className="p_crystal_img" src="./images/Product/pc_ct_ws-2.svg" alt="水晶名稱" />
                  <img className="p_crystal_img" src="./images/Product/pc_ct_ws-3.svg" alt="水晶名稱" />
                </div>
                <p>主石：黃碧璽｜自信與平衡之石</p>
                <p>其他：喜馬拉雅白水晶、黃葡萄石、摩根石、虎眼石</p>
              </div>
              <div className="p_product_size">
                <span>串珠</span>
                <button type="button">6</button>
                <button type="button">8</button>
                <span>mm</span>
              </div>
              <div className="p_product_hand">
                <span>手圍</span>
                <button type="button">14</button>
                <button type="button">16</button>
                <button type="button">18</button>
                <span>cm</span>
              </div>
              <div className="p_product_qty">
                <button type="button" className="p_left" onClick={handleDecreaseQty}>-</button>
                <button type="button" className="p_center">{quantity}</button>
                <button type="button" className="p_right" onClick={handleIncreaseQty}>+</button>
              </div>
              <div className="p_product_buy">
                <button type="button" className="p_btn_cart">加入購物車</button>
                <button className="button" onClick={() => navigate('/ShoppingCart')}>
                  立即購買
                </button>
              </div>
            </div>
          </div>
        </section>

                {/* Collection 區 */}
                <section className="p_collection">
                    <BgDark />
                    {/* 區塊標題 */}
                    <h1 className="p_collection_title">✦&nbsp;&nbsp;Recommended&nbsp;&nbsp;✦</h1>

                    {/* 系列商品卡片 */}
                    <div className="p_collection_products">
                        {/* ── 卡片 1 ── */}
                        <div className="p_product_card">
                            <div className="p_product_img_wrap">
                                <img className="p_fav_icon" src="./images/Product/btn-fav.svg" alt="收藏" />
                                <img className="p_product_img" src="./images/S-CrystalBracelet/product_cocktail_redwine.jpg" alt="煙花紅酒" />
                            </div>
                            <div className="p_product_info">
                                <span className="p_product_name">煙花紅酒</span>
                                <span className="p_product_price">$2,590</span>
                            </div>
                            <div className="p_product_crystals">
                                <img className="ps_crystal_img" src="./images/Product/pc_ct_red-1.svg" alt="水晶名稱" />
                                <img className="ps_crystal_img" src="./images/Product/pc_ct_red-2.svg" alt="水晶名稱" />
                                <img className="ps_crystal_img" src="./images/Product/pc_ct_red-3.svg" alt="水晶名稱" />
                            </div>
                        </div>

                        {/* ── 卡片 2 ── */}
                        <div className="p_product_card">
                            <div className="p_product_img_wrap">
                                <img className="p_fav_icon" src="./images/Product/btn-fav.svg" alt="收藏" />
                                <img className="p_product_img" src="./images/S-CrystalBracelet/product_cocktail_mojito.jpg" alt="薄荷之吻" />
                            </div>
                            <div className="p_product_info">
                                <span className="p_product_name">薄荷之吻</span>
                                <span className="p_product_price">$2,590</span>
                            </div>
                            <div className="p_product_crystals">
                                <img className="ps_crystal_img" src="./images/Product/pc_ct_mj-1.svg" alt="水晶名稱" />
                                <img className="ps_crystal_img" src="./images/Product/pc_ct_mj-2.svg" alt="水晶名稱" />
                                <img className="ps_crystal_img" src="./images/Product/pc_ct_mj-3.svg" alt="水晶名稱" />
                            </div>
                        </div>

                        {/* ── 卡片 3 (重複示範) ── */}
                        <div className="p_product_card">
                            <div className="p_product_img_wrap">
                                <img className="p_fav_icon" src="./images/Product/btn-fav.svg" alt="收藏" />
                                <img className="p_product_img" src="./images/S-CrystalBracelet/product_cocktail_redwine.jpg" alt="煙花紅酒" />
                            </div>
                            <div className="p_product_info">
                                <span className="p_product_name">煙花紅酒</span>
                                <span className="p_product_price">$2,590</span>
                            </div>
                            <div className="p_product_crystals">
                                <img className="ps_crystal_img" src="./images/Product/pc_ct_red-1.svg" alt="水晶名稱" />
                                <img className="ps_crystal_img" src="./images/Product/pc_ct_red-2.svg" alt="水晶名稱" />
                                <img className="ps_crystal_img" src="./images/Product/pc_ct_red-3.svg" alt="水晶名稱" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="p_footer">
                {/* <BgDark /> */}
                <FooterTrn />
            </footer>
        </>
    )
} 