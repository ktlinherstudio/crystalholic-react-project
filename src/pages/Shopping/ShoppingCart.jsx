/* ────────── import 區 ────────── */
import './ShoppingCart.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn';
import '../../components/BgLight.css';
import BgDark from '../../components/BgDark';
import { useAuth } from '../../context/AuthContext';
import { useUI } from '../../context/UIContext';
import LoginRegisterModal from '../../components/LoginRegisterModal/LoginRegisterModal';
import { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { TW_COUNTIES, genStores } from './twDistricts';

/* ───────────────────────────────────────────── */
/* DeliveryOptions 元件                           */
/* ───────────────────────────────────────────── */
function DeliveryOptions({ onPlaceChange }) {
  /* ---------- state ---------- */
  const [place, setPlace] = useState('台灣');
  const [method, setMethod] = useState('宅配（貨到付款）');
  const [county, setCounty] = useState('');
  const [stores, setStores] = useState([]);
  const [store, setStore] = useState('');
  const [zip, setZip] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

  /* ---------- 地點／方式變動 ---------- */
  useEffect(() => {
    if (place === '海外') {
      setMethod('DHL國際快遞（關稅另計）');
      setCounty('');
      setStore('');
      setZip('');
      setAddress('');
    } else if (method === '宅配（貨到付款）') {
      setCounty('');
      setStore('');
    }
    onPlaceChange?.(place);
  }, [place, method]);

  /* ---------- 縣市變動 → 產生門市 ---------- */
  useEffect(() => {
    if (!county) {
      setStores([]);
      return;
    }
    const brand = method.includes('7-ELEVEN')
      ? '7-11'
      : method.includes('全家')
      ? 'Family'
      : '';
    setStores(brand ? genStores(brand, county) : []);
    setStore('');
  }, [county, method]);

  /* ---------- JSX ---------- */
  return (
    <form className="cart_info_card">
      {/* 表頭 */}
      <div className="cart_table_head">
        <div className="cart_diamond">
          <img
            src="./images/ShoppingCart/shoppingcart_ diamond.svg"
            alt="送貨及付款方式"
          />
        </div>
        <h2>送貨及付款方式</h2>
      </div>

      {/* 內容 */}
      <div className="cart_options_area">
        {/* 1. 送貨地點 */}
        <label>*送貨地點
          <select value={place} onChange={(e) => setPlace(e.target.value)} required>
            <option>台灣</option>
            <option>海外</option>
          </select>
        </label>

        {/* 2. 送貨方式 */}
        {place === '台灣' && (
          <label>*送貨方式
            <select value={method} onChange={(e) => setMethod(e.target.value)} required>
              <option>宅配（貨到付款）</option>
              <option>7-ELEVEN（貨到付款）</option>
              <option>全家（貨到付款）</option>
            </select>
          </label>
        )}
        {place === '海外' && (
          <label>*送貨方式
            <input value="DHL國際快遞（關稅另計）" disabled />
          </label>
        )}

        {/* 3A. 台灣 → 宅配 */}
        {place === '台灣' && method === '宅配（貨到付款）' && (
          <>
            <label>*郵遞區號
              <input
                type="text"
                placeholder="例如：100"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </label>

            {zip && (
              <label>*詳細地址
                <input
                  type="text"
                  placeholder="例如：台北市中正區水晶路一段8號"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </label>
            )}
          </>
        )}

        {/* 3B. 台灣 → 超商 */}
        {place === '台灣' && method !== '宅配（貨到付款）' && (
          <>
            <label>*縣市
              <select
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                required
              >
                <option value="" disabled>請選擇縣市</option>
                {TW_COUNTIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            {county && (
              <label>*門市
                <select
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                  required
                >
                  <option value="" disabled>請選擇門市</option>
                  {stores.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
            )}
          </>
        )}

        {/* 3C. 海外 */}
        {place === '海外' && (
          <>
            <label>*收件國家
              <input
                type="text"
                placeholder="e.g. Japan, USA, Singapore"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </label>

            {country && (
              <label>*收件地址
                <input
                  type="text"
                  placeholder="Please enter full address in English"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </label>
            )}
          </>
        )}
      </div>
    </form>
  );
}


/* ───────────────────────────────────────────── */
/* ShoppingCart 主元件                            */
/* ───────────────────────────────────────────── */
export default function ShoppingCart() {
  /* context & modal */
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { isLoggedIn } = useAuth();
  const { showAuthModal, openAuthModal, closeAuthModal } = useUI();

  /* 展開控制 */
  const [showAllItems, setShowAllItems] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [readyToCheckout, setReadyToCheckout] = useState(false);

  /* 收件人 & 發票 */
  const [placeState, setPlaceState] = useState('台灣');
  const [invoiceType, setInvoiceType] = useState('');
  const [invoiceValue, setInvoiceValue] = useState('');

  const navigate = useNavigate();

  /* 付款流程效應 */
  useEffect(() => {
    if (isLoggedIn && readyToCheckout) {
      setShowSuccessMsg(true);
      setReadyToCheckout(false);
    }
  }, [isLoggedIn, readyToCheckout]);

  const handleCheckout = () => {
    if (!cartItems.length) return;
    if (!isLoggedIn) {
      openAuthModal();
      setReadyToCheckout(true);
    } else if (!showSuccessMsg) {
      setShowSuccessMsg(true);
    }
  };

  /* 金額計算 */
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal ? 70 : 0;
  const total = subtotal + shipping;
  const formatCurrency = (num) => `NT$${num.toLocaleString('zh-TW')}`;

  /* 發票 placeholder */
  const invoicePlaceholder =
    invoiceType === '個人發票'
      ? '例如：/ABCD123'
      : invoiceType === '公司用發票'
      ? '例如：20250620'
      : invoiceType === '捐贈發票'
      ? '例如：09958'
      : '';
  /* 🆕 發票 label（動態標題文字） */
  const invoiceLabel =
    invoiceType === '個人發票'
      ? '*手機條碼載具'
      : invoiceType === '公司用發票'
      ? '*統一編號'
      : invoiceType === '捐贈發票'
      ? '*捐贈碼'
      : '*請選擇發票類型';

  /* ────────── JSX ────────── */
  return (
    <>
      <NavBarWrapper variant="dark" />

      <main className="cart_main">
        {/* 標題區 */}
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

        {/* 內容大區塊 */}
        <section className="cart_point">
          {/* ===== 左側：商品清單 + 表單 ===== */}
          <section className="cart_left">
            {/* 購物車清單 */}
            <section className="cart_purchase_items">
              {/* 表頭 */}
              <div className="cart_card">
                <div className="cart_table_head_1">
                  <span>商品</span>
                  <span>尺寸</span>
                  <span>價格</span>
                  <span>數量</span>
                  <span>小計</span>
                </div>
              </div>

              {/* 商品列 */}
              {(showAllItems ? cartItems : cartItems.slice(0, 3)).map(
                (item, idx) => (
                  <div className="cart_table_row" key={`${item.name}-${idx}`}>
                    {/* 商品 Info */}
                    <Link
                      to={`/Product/${item.seriesKey}/${item.productIndex}`}
                      className="cart_product_info"
                    >
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                    </Link>

                    {/* 尺寸 */}
                    <div className="cart_product_size">
                      <p>
                        串珠 {item.size}
                        <br />
                        手圍 {item.wrist}
                      </p>
                    </div>

                    {/* 價格 */}
                    <div className="cart_product_price">
                      <p>{formatCurrency(item.price)}</p>
                    </div>

                    {/* 數量 */}
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
                )
              )}

              {/* 空購物車 */}
              {!cartItems.length && (
                <div className="cart_shopping_tip">
                  <p>購物車目前是空的喔！</p>
                </div>
              )}

              {/* 展開／收合 */}
              {cartItems.length > 3 && (
                <div className="cart_toggle_btn">
                  <button
                    className="cart_continue_shopping"
                    onClick={() => setShowAllItems(!showAllItems)}
                  >
                    {showAllItems
                      ? '收起購物清單'
                      : `查看完整購物清單（共 ${cartItems.length} 件）`}
                    <img
                      src={
                        showAllItems
                          ? './images/ShoppingCart/shoppingcart-btn_accordion-open.svg'
                          : './images/ShoppingCart/shoppingcart-btn_accordion-close.svg'
                      }
                      alt="展開收合按鈕"
                      className="cart_toggle_icon"
                    />
                  </button>
                </div>
              )}
            </section>

            {/* 送貨 & 收件表單 */}
            <section className="cart_info_area">
              {/* 送貨及付款方式 */}
              <DeliveryOptions onPlaceChange={setPlaceState} />

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
                  {/* 姓名 */}
                  <label>*收件人姓名
                    <input
                      type="text"
                      placeholder={
                        placeState === '海外'
                          ? 'Please enter your full name in English'
                          : '例如：張美美'
                      }
                      required
                    />
                  </label>

                  {/* 電話 */}
                  <label>*聯絡電話
                    <input
                      type="tel"
                      placeholder={
                        placeState === '海外'
                          ? 'e.g. +1-234-567-8901'
                          : '例如：0912345678'
                      }
                      required
                    />
                  </label>

                  {/* 發票資訊 */}
                  {placeState === '台灣' ? (
                    <>
                      <label>*發票資訊
                        <select
                          value={invoiceType}
                          onChange={(e) => {
                            setInvoiceType(e.target.value);
                            setInvoiceValue('');
                          }}
                          required
                        >
                          <option value="" disabled>請選擇發票類型</option>
                          <option>個人發票</option>
                          <option>公司用發票</option>
                          <option>捐贈發票</option>
                        </select>
                      </label>

                      {invoiceType && (
                        <label>{invoiceLabel}
                          <input
                            type="text"
                            placeholder={invoicePlaceholder}
                            value={invoiceValue}
                            onChange={(e) => setInvoiceValue(e.target.value)}
                            required
                          />
                        </label>
                      )}
                    </>
                  ) : (
                    <label>＊發票資訊
                      <input
                        type="text"
                        value="No invoice available for international orders"
                        disabled
                      />
                    </label>
                  )}
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
                    <input id="coupon" type="text" placeholder="請輸入代碼" />
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

        {/* 結帳完成彈窗 */}
        {showSuccessMsg && (
          <div className="checkout-success-modal">
            <div className="success-content">
              <h3>✦ 結帳完成 ✦</h3>
              <p>商品即將出貨，感謝您的購買</p>
            </div>
          </div>
        )}

        {/* 登入 / 註冊 Modal */}
        <LoginRegisterModal
          isOpen={showAuthModal}
          onClose={closeAuthModal}
        />
      </main>

      {/* Footer */}
      <footer className="cart_footer">
        <BgDark />
        <FooterTrn />
      </footer>
    </>
  );
}
