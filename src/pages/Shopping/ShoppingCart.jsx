import './ShoppingCart.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn';
import '../../components/BgLight.css';
import BgDark from '../../components/BgDark';
import { useAuth } from '../../context/AuthContext';
import { useUI } from '../../context/UIContext';
import LoginRegisterModal from '../../components/LoginRegisterModal/LoginRegisterModal';
import { useState, useEffect } from 'react';
import { useCart } from './CartContext';          // 🆕 取得購物車資料
import { Link, useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
  /* ---------------- context ＆ modal ---------------- */
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // 🆕
  const { isLoggedIn } = useAuth();
  const { showAuthModal, openAuthModal, closeAuthModal } = useUI();
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [readyToCheckout, setReadyToCheckout] = useState(false);
  const navigate = useNavigate(); // 「繼續購物」導回商品列表

  /* ---------------- 付款流程 ---------------- */
  useEffect(() => {
    if (isLoggedIn && readyToCheckout) {
      setShowSuccessMsg(true);
      setReadyToCheckout(false);
    }
  }, [isLoggedIn, readyToCheckout]);

  const handleCheckout = () => {
    if (!cartItems.length) return;               // 空購物車不結帳
    if (!isLoggedIn) {
      openAuthModal();
      setReadyToCheckout(true);
    } else if (!showSuccessMsg) {
      setShowSuccessMsg(true);
    }
  };

  /* ---------------- 金額計算 ---------------- */
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal ? 70 : 0;            // demo：有購物就收 70
  const total = subtotal + shipping;

  /* ---- 將數字轉成 NT$ x,xxx 格式的小工具 ---- */
  const formatCurrency = (num) =>
    `NT$${num.toLocaleString('zh-TW')}`;

  return (
    <>
      <NavBarWrapper variant="dark" />
      <main className="cart_main">
        {/* ----------- 標題區 ----------- */}
        <div className="cart_title">
          <img
            className="cart_decorate-left"
            src="./images/ShoppingCart/shoppingcart_deco-left.svg"
            alt="左裝飾"
          />
          <h3 className="cart_decorate-title">購物車</h3>
          <img
            className="cart_decorate-right"
            src="./images/ShoppingCart/shoppingcart_deco-right.svg"
            alt="右裝飾"
          />
        </div>

        {/* ----------- 內容大區塊 ----------- */}
        <section className="cart_point">
          {/* ===== 左側：商品清單 + 表單 ===== */}
          <section className="cart_left">
            <section className="cart_purchase_items">
              {/* 表頭 */}
              <div className="cart_card">
                <div className="cart_table_head">
                  <span>商品</span><span>尺寸</span><span>價格</span>
                  <span>數量</span><span>小計</span>
                </div>
              </div>

              {/* 動態列出購物車商品 */}
              {cartItems.map((item, idx) => (
                <div className="cart_table_row" key={`${item.name}-${idx}`}>
                  {/* 商品縮圖＋名稱 */}
                  <div className="cart_product_info">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                  {/* 尺寸 */}
                  <div className="cart_product_size">
                    <p>
                      串珠 {item.size}
                      <br />
                      手圍 {item.wrist}
                    </p>
                  </div>
                  {/* 價格（單件） */}
                  <div className="cart_product_price">
                    <p>{formatCurrency(item.price)}</p>
                  </div>
                  {/* 數量下拉 */}
                  <select
                    className="cart_qty_select"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(idx, Number(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                  {/* 小計 */}
                  <div className="cart_subtotal">
                    <p>{formatCurrency(item.price * item.quantity)}</p>
                  </div>
                  {/* 刪除 */}
                  <div className="cart_cross_btn">
                    <button onClick={() => removeFromCart(idx)}>
                      <img
                        src="./images/ShoppingCart/shoppingcart-btn_cross.svg"
                        alt="刪除"
                      />
                    </button>
                  </div>
                </div>
              ))}

              {/* 空購物車提示 */}
              {!cartItems.length && (
                <div className="cart_shopping_tip">
                  <p>購物車目前是空的喔！</p>
                </div>
              )}

              {/* 繼續購物／件數統計 */}
              {cartItems.length > 0 && (
                <div className="cart_shopping_tip">
                  <button
                    className="cart_continue_shopping"
                    onClick={() => navigate('/ProductCollection')}
                  >
                    繼續購物
                  </button>
                  <button className="cart_num_items">
                    <span>(共 {cartItems.length} 件)</span>
                    <img
                      src="./images/ShoppingCart/shoppingcart-btn_accordion-grey.svg"
                      alt="收合"
                    />
                  </button>
                </div>
              )}
            </section>

            {/* ===== 送貨＆收件表單（原樣保留，可自行串後端） ===== */}
            <section className="cart_info_area">
              {/* 送貨付款 */}
              <form className="cart_info_card">
                <div className="cart_table_head">
                  <div className="cart_diamond">
                    <img
                      src="./images/ShoppingCart/shoppingcart_ diamond.svg"
                      alt="送貨及付款方式"
                    />
                  </div>
                  <h2>送貨及付款方式</h2>
                </div>
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
                <div className="cart_table_head">
                  <div className="cart_diamond">
                    <img
                      src="./images/ShoppingCart/shoppingcart_ diamond.svg"
                      alt="收件人資料"
                    />
                    <img
                      src="./images/ShoppingCart/shoppingcart_ diamond.svg"
                      alt="收件人資料"
                    />
                  </div>
                  <h2>收件人資料</h2>
                </div>
                <div className="cart_options_area">
                  <label htmlFor="username">
                    *姓名
                    <input
                      id="username"
                      type="text"
                      placeholder="請輸入姓名"
                      required
                    />
                  </label>
                  <label htmlFor="tel">
                    *聯絡電話
                    <input
                      id="tel"
                      type="tel"
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

          {/* ===== 右側：訂單資訊 ===== */}
          <section className="cart_right">
            <div className="cart_table_head">
              <div className="cart_diamond">
                <img
                  src="./images/ShoppingCart/shoppingcart_ diamond.svg"
                  alt="訂單資訊"
                />
                <img
                  src="./images/ShoppingCart/shoppingcart_ diamond.svg"
                  alt="訂單資訊"
                />
                <img
                  src="./images/ShoppingCart/shoppingcart_ diamond.svg"
                  alt="訂單資訊"
                />
              </div>
              <h2>訂單資訊</h2>
            </div>
            <div className="cart_detail_area">
              <ul>
                <li className="cart_subtotal">
                  <span>小計：</span>
                  <span>{formatCurrency(subtotal)}</span>
                </li>
                <li className="cart_fee">
                  <span>運費：</span>
                  <span>{formatCurrency(shipping)}</span>
                </li>
                <li>
                  <label htmlFor="coupon">
                    優惠券代碼：
                    <input
                      id="coupon"
                      type="text"
                      placeholder="請輸入代碼"
                    />
                  </label>
                </li>
                <hr />
                <li className="cart_total">
                  <span>合計：</span>
                  <span className="cart_totalnum">
                    {formatCurrency(total)}
                  </span>
                </li>
              </ul>
              <button
                className="cart_btn_checkout"
                onClick={handleCheckout}
                disabled={!cartItems.length}
              >
                確認結帳
              </button>
            </div>
          </section>
        </section>

        {/* ----------- 結帳完成彈窗 ----------- */}
        {showSuccessMsg && (
          <div className="checkout-success-modal">
            <div className="success-content">
              <h3>✦ 結帳完成 ✦</h3>
              <p>商品即將出貨，感謝您的購買</p>
            </div>
          </div>
        )}

        {/* ----------- 登入／註冊 Modal ----------- */}
        <LoginRegisterModal isOpen={showAuthModal} onClose={closeAuthModal} />
      </main>

      {/* ----------- Footer ----------- */}
      <footer className="cart_footer">
        <BgDark />
        <FooterTrn />
      </footer>
    </>
  );
}
