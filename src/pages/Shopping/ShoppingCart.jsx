import './ShoppingCart.css';
import NavBarDark from '../../components/NavBarDark';
import FooterTrn from '../../components/FooterTrn';
import '../../components/BgLight.css';
import BgDark from '../../components/BgDark';


export default function ShoppingCart() {
    return (
        <>
            <NavBarDark />
            <main className="cart_page">
                {/* 標題 */}
                <div className="cart_title">
                    <img
                        className="cart_decorate-left"
                        src="/images/ShoppingCart/shoppingcart_deco-left.svg"
                        alt="左裝飾"
                    />
                    <h3 className="cart_decorate-title">購物車</h3>
                    <img className="cart_decorate-right"
                        src="/images/ShoppingCart/shoppingcart_deco-right.svg"
                        alt="右裝飾"
                    />
                </div>

                {/* 重點區 */}
                <section className="cart_point">
                    {/* 左邊區域 */}
                    <section className="cart_left">
                        {/* 購物車明細區 */}
                        <section className="cart_purchase_items">
                            {/* 列表 */}
                            <div className="cart_card">
                                <div className="cart_table_head">
                                    <span>商品</span>
                                    <span>尺寸</span>
                                    <span>價格</span>
                                    <span>數量</span>
                                    <span>小計</span>
                                </div>
                            </div>

                            {/* 單一商品列 (1) */}
                            <div className="cart_table_row">
                                {/* 商品資訊（縮圖＋名稱） */}
                                <div className="cart_product_info">
                                    <img src="/images/S-CrystalBracelet/product_blue_river.jpg" alt="沁藍之澗商品照" />
                                    <p>沁藍之澗</p>
                                </div>
                                {/* 尺寸 */}
                                <div className="cart_product_size">
                                    <p>
                                        串珠 6mm
                                        <br />
                                        手圍 14cm
                                    </p>
                                </div>
                                {/* 價格 */}
                                <div className="cart_product_price">
                                    <p>NT$ 2,590</p>
                                </div>
                                {/* 數量 */}
                                <select className="cart_qty_select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                {/* 小計 */}
                                <div className="cart_subtotal">
                                    <p>NT$ 2,590</p>
                                </div>
                                {/* 刪除按鈕 */}
                                <div className="cart_cross_btn">
                                    <button>
                                        <img src="/images/ShoppingCart/shoppingcart-btn_cross.svg" alt="刪除" />
                                    </button>
                                </div>
                            </div>

                            {/* 單一商品列 (2) */}
                            <div className="cart_table_row">
                                {/* 商品資訊（縮圖＋名稱） */}
                                <div className="cart_product_info">
                                    <img src="/images/S-CrystalBracelet/product_blue_goldfish.jpg" alt="金魚泡泡商品照" />
                                    <p>金魚泡泡</p>
                                </div>
                                {/* 尺寸 */}
                                <div className="cart_product_size">
                                    <p>
                                        串珠 6mm
                                        <br />
                                        手圍 14cm
                                    </p>
                                </div>
                                {/* 價格 */}
                                <div className="cart_product_price">
                                    <p>NT$ 2,590</p>
                                </div>
                                {/* 數量 */}
                                <select className="cart_qty_select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                {/* 小計 */}
                                <div className="cart_subtotal">
                                    <p>NT$ 2,590</p>
                                </div>
                                {/* 刪除按鈕 */}
                                <div className="cart_cross_btn">
                                    <button>
                                        <img src="/images/ShoppingCart/shoppingcart-btn_cross.svg" alt="刪除" />
                                    </button>
                                </div>
                            </div>

                            {/* 繼續購物 */}
                            <div className="cart_shopping_tip">
                                <button className="cart_continue_shopping">繼續購物</button>
                                <button className="cart_num_items">
                                    <span>(共2件)</span>
                                    <img
                                        src="/images/ShoppingCart/shoppingcart-btn_accordion-grey.svg"
                                        alt="收合"
                                    />
                                </button>
                            </div>
                        </section>

                        {/* 下方資訊區 */}
                        <section className="cart_info_area">
                            {/* 送貨及付款方式 */}
                            <form className="cart_info_card">
                                {/* 標題列 */}
                                <div className="cart_table_head">
                                    <div className="cart_diamond">
                                        <img
                                            src="/images/ShoppingCart/shoppingcart_ diamond.svg"
                                            alt="送貨及付款方式"
                                        />
                                    </div>
                                    <h2>送貨及付款方式</h2>
                                </div>

                                {/* 選項 */}
                                <div className="cart_options_area">
                                    <label>
                                        *送貨地點
                                        <select required>
                                            <option>台灣</option>
                                            <option>海外</option>
                                        </select>
                                    </label>

                                    <label>
                                        *送貨方式
                                        <select required>
                                            <option>7-11 取貨付款</option>
                                            <option>7-11 取貨不付款</option>
                                            <option>黑貓宅配</option>
                                        </select>
                                    </label>

                                    <label>
                                        *取貨門市
                                        <select required>
                                            <option>華山門市</option>
                                            <option>北車門市</option>
                                            <option>詳細地址</option>
                                        </select>
                                    </label>
                                </div>
                            </form>

                            {/* 收件人資料 */}
                            <form className="cart_info_card">
                                {/* 標題列 */}
                                <div className="cart_table_head">
                                    <div className="cart_diamond">
                                        <img
                                            src="/images/ShoppingCart/shoppingcart_ diamond.svg"
                                            alt="收件人資料"
                                        />
                                        <img
                                            src="/images/ShoppingCart/shoppingcart_ diamond.svg"
                                            alt="收件人資料"
                                        />
                                    </div>
                                    <h2>收件人資料</h2>
                                </div>

                                {/* 選項 */}
                                <div className="cart_options_area">
                                    <label htmlFor="username">
                                        *姓名
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            title="姓名欄位"
                                            placeholder="請輸入姓名"
                                            required
                                        />
                                    </label>

                                    <label htmlFor="tel">
                                        *聯絡電話
                                        <input
                                            type="tel"
                                            name="tel"
                                            id="tel"
                                            title="電話欄位"
                                            placeholder="請輸入電話，例如:0912345678"
                                            required
                                        />
                                    </label>

                                    <label>
                                        *發票資訊
                                        <select required>
                                            <option>手機載具</option>
                                            <option>(公司)統一編號</option>
                                            <option>捐贈發票</option>
                                        </select>
                                    </label>
                                </div>
                            </form>
                        </section>
                    </section>

                    {/* 右邊區域：訂單資訊 */}
                    <section className="cart_right">
                        <div className="cart_table_head">
                            <div className="cart_diamond">
                                <img
                                    src="/images/ShoppingCart/shoppingcart_ diamond.svg"
                                    alt="訂單資訊"
                                />
                                <img
                                    src="/images/ShoppingCart/shoppingcart_ diamond.svg"
                                    alt="訂單資訊"
                                />
                                <img
                                    src="/images/ShoppingCart/shoppingcart_ diamond.svg"
                                    alt="訂單資訊"
                                />
                            </div>
                            <h2>訂單資訊</h2>
                        </div>

                        {/* 明細區 */}
                        <div className="cart_detail_area">
                            <ul>
                                <li className="cart_subtotal">
                                    <span>小計：</span>
                                    <span>NT$5,180</span>
                                </li>
                                <li className="cart_fee">
                                    <span>運費：</span>
                                    <span>NT$70</span>
                                </li>
                                <li>
                                    <label htmlFor="coupon">
                                        優惠券代碼：
                                        <input
                                            type="text"
                                            name="coupon"
                                            id="coupon"
                                            title="優惠券代碼"
                                            placeholder="請輸入代碼"
                                        />
                                    </label>
                                </li>
                                <hr />
                                <li className="cart_total">
                                    <span>合計：</span>
                                    <span className="cart_totalnum">NT$ 5,250</span>
                                </li>
                            </ul>
                            <button className="cart_btn_checkout">確認結帳</button>
                        </div>
                    </section>
                </section>
            </main>

            <footer className="cart_footer">
                <BgDark/>
                <FooterTrn/>
            </footer>
        </>
    );
}