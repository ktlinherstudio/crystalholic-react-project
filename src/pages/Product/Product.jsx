import './Product.css'; 
import NavBarDark from '../../components/NavBarDark';
import FooterTrn from '../../components/FooterTrn';
import '../../components/BgLight.css';
import BgDark from '../../components/BgDark';

export default function Product(){
    return(
        <>
            <NavBarDark />
            <main>
                {/* 單一商品區 */}
                <section className="p_product_area">
                    <div className="p_product_box">
                    {/* 商品照（左） */}
                    <div className="p_product_img_left">
                        <img className="p_fav_icon" src="/images/Product/btn-fav.svg" alt="收藏" />
                        <img
                        className="p_product_img"
                        src="/images/S-CrystalBracelet/product_cocktail_whisky.jpg"
                        alt="薩提爾的獨酌"
                        />
                    </div>

                    {/* 商品介紹（右） */}
                    <div className="p_product_right">
                        {/* 標題＋價格 */}
                        <div className="p_product_title">
                        <h3>薩提爾的獨酌</h3>
                        <span>NT$2,590</span>
                        </div>

                        <hr />

                        {/* 商品描述 */}
                        <p className="p_product_description">
                        這款設計靈感來自加入冰塊的威士忌，透過喜馬拉雅白水晶所營造出的「冰晶意象」，傳達出清冽、透明且深層的情感釋放。黃碧璽與冰晶質感的白水晶交融，宛如夜晚獨酌時的沉思與回歸本心，讓你在情緒的波動中保持冷靜與洞察，強化決策力與自我主導性。
                        </p>

                        {/* 水晶清單 */}
                        <div className="p_product_crystal_area">
                        <div className="p_product_crystals">
                            <img className="p_crystal_img" src="/images/Product/pc_wg_ws-1.svg" alt="水晶名稱" />
                            <img className="p_crystal_img" src="/images/Product/pc_wg_ws-2.svg" alt="水晶名稱" />
                            <img className="p_crystal_img" src="/images/Product/pc_wg_ws-3.svg" alt="水晶名稱" />
                        </div>
                        <p>主石：黃碧璽｜自信與平衡之石</p>
                        <p>其他：喜馬拉雅白水晶、黃葡萄石、摩根石、虎眼石</p>
                        </div>

                        {/* 串珠尺寸 */}
                        <div className="p_product_size">
                        <span>串珠</span>
                        <button type="button">6</button>
                        <button type="button">8</button>
                        <span>mm</span>
                        </div>

                        {/* 手圍尺寸 */}
                        <div className="p_product_hand">
                        <span>手圍</span>
                        <button type="button">14</button>
                        <button type="button">16</button>
                        <button type="button">18</button>
                        <span>cm</span>
                        </div>

                        {/* 數量調整 */}
                        <div className="p_product_qty">
                        <button type="button" className="p_left">-</button>
                        <button type="button" className="p_center">1</button>
                        <button type="button" className="p_right">+</button>
                        </div>

                        {/* 購買操作 */}
                        <div className="p_product_buy">
                        <button type="button" className="p_btn_cart">加入購物車</button>
                        <button type="button" className="p_btn_buy">立即購買</button>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Collection 區 */}
                <section className="p_collection">
                    <BgDark/>
                    {/* 區塊標題 */}
                    <h1 className="p_collection_title">✦ Collection ✦</h1>

                    {/* 系列商品卡片 */}
                    <div className="p_collection_products">
                    {/* ── 卡片 1 ── */}
                    <div className="p_product_card">
                        <div className="p_product_img_wrap">
                        <img className="p_fav_icon" src="/images/Product/btn-fav.svg" alt="收藏" />
                        <img className="p_product_img" src="/images/S-CrystalBracelet/product_cocktail_redwine.jpg" alt="煙花紅酒" />
                        </div>
                        <div className="p_product_info">
                        <span className="p_product_name">煙花紅酒</span>
                        <span className="p_product_price">$2,590</span>
                        </div>
                        <div className="p_product_crystals">
                        <img className="p_crystal_img" src="/images/Product/pc_wg_red-1.svg" alt="水晶名稱" />
                        <img className="p_crystal_img" src="/images/Product/pc_wg_red-2.svg" alt="水晶名稱" />
                        <img className="p_crystal_img" src="/images/Product/pc_wg_red-3.svg" alt="水晶名稱" />
                        </div>
                    </div>

                    {/* ── 卡片 2 ── */}
                    <div className="p_product_card">
                        <div className="p_product_img_wrap">
                        <img className="p_fav_icon" src="/images/Product/btn-fav.svg" alt="收藏" />
                        <img className="p_product_img" src="/images/S-CrystalBracelet/product_cocktail_mojito.jpg" alt="薄荷之吻" />
                        </div>
                        <div className="p_product_info">
                        <span className="p_product_name">薄荷之吻</span>
                        <span className="p_product_price">$2,590</span>
                        </div>
                        <div className="p_product_crystals">
                        <img className="p_crystal_img" src="/images/Product/pc_wg_mj-1.svg" alt="水晶名稱" />
                        <img className="p_crystal_img" src="/images/Product/pc_wg_mj-2.svg" alt="水晶名稱" />
                        <img className="p_crystal_img" src="/images/Product/pc_wg_mj-3.svg" alt="水晶名稱" />
                        </div>
                    </div>

                    {/* ── 卡片 3 (重複示範) ── */}
                    <div className="p_product_card">
                        <div className="p_product_img_wrap">
                        <img className="p_fav_icon" src="/images/Product/btn-fav.svg" alt="收藏" />
                        <img className="p_product_img" src="/images/S-CrystalBracelet/product_cocktail_redwine.jpg" alt="煙花紅酒" />
                        </div>
                        <div className="p_product_info">
                        <span className="p_product_name">煙花紅酒</span>
                        <span className="p_product_price">$2,590</span>
                        </div>
                        <div className="p_product_crystals">
                        <img className="p_crystal_img" src="/images/Product/pc_wg_red-1.svg" alt="水晶名稱" />
                        <img className="p_crystal_img" src="/images/Product/pc_wg_red-2.svg" alt="水晶名稱" />
                        <img className="p_crystal_img" src="/images/Product/pc_wg_red-3.svg" alt="水晶名稱" />
                        </div>
                    </div>
                    </div>
                </section>
            </main>

            <footer className="p_footer">
                <BgDark/>
                <FooterTrn/>
            </footer>
        </>
    )
} 