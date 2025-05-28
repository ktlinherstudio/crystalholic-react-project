import './ShoppingCart.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn';
import '../../components/BgLight.css';
import BgDark from '../../components/BgDark';
import { useAuth } from '../../context/AuthContext';
import { useUI } from '../../context/UIContext';
import LoginRegisterModal from '../../components/LoginRegisterModal/LoginRegisterModal';
import { useState, useEffect } from 'react';

export default function ShoppingCart() {
  const { isLoggedIn } = useAuth();
  const { showAuthModal, openAuthModal, closeAuthModal } = useUI();
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [readyToCheckout, setReadyToCheckout] = useState(false);

  useEffect(() => {
    if (isLoggedIn && readyToCheckout) {
      setShowSuccessMsg(true);
      setReadyToCheckout(false);
    }
  }, [isLoggedIn, readyToCheckout]);

  const handleCheckout = () => {
    if (!isLoggedIn) {
      openAuthModal();
      setReadyToCheckout(true);
    } else if (!showSuccessMsg) {
      setShowSuccessMsg(true);
    }
  };

  return (
    <>
      <NavBarWrapper variant="dark" />
      <main className="cart_main">
        {/* 標題 */}
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

        <section className="cart_point">
          <section className="cart_left">
            <section className="cart_purchase_items">
              <div className="cart_card">
                <div className="cart_table_head">
                  <span>商品</span>
                  <span>尺寸</span>
                  <span>價格</span>
                  <span>數量</span>
                  <span>小計</span>
                </div>
              </div>
              <div className="cart_table_row">
                <div className="cart_product_info">
                  <img src="./images/S-CrystalBracelet/product_blue_river.jpg" alt="沁藍之澗" />
                  <p>沁藍之澗</p>
                </div>
                <div className="cart_product_size">
                  <p>串珠 6mm<br />手圍 14cm</p>
                </div>
                <div className="cart_product_price"><p>NT$ 2,590</p></div>
                <select className="cart_qty_select">
                  {[1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
                </select>
                <div className="cart_subtotal"><p>NT$ 2,590</p></div>
                <div className="cart_cross_btn">
                  <button><img src="./images/ShoppingCart/shoppingcart-btn_cross.svg" alt="刪除" /></button>
                </div>
              </div>

              <div className="cart_table_row">
                <div className="cart_product_info">
                  <img src="./images/S-CrystalBracelet/product_blue_goldfish.jpg" alt="金魚泡泡" />
                  <p>金魚泡泡</p>
                </div>
                <div className="cart_product_size">
                  <p>串珠 6mm<br />手圍 14cm</p>
                </div>
                <div className="cart_product_price"><p>NT$ 2,590</p></div>
                <select className="cart_qty_select">
                  {[1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
                </select>
                <div className="cart_subtotal"><p>NT$ 2,590</p></div>
                <div className="cart_cross_btn">
                  <button><img src="./images/ShoppingCart/shoppingcart-btn_cross.svg" alt="刪除" /></button>
                </div>
              </div>

              <div className="cart_shopping_tip">
                <button className="cart_continue_shopping">繼續購物</button>
                <button className="cart_num_items">
                  <span>(共2件)</span>
                  <img src="./images/ShoppingCart/shoppingcart-btn_accordion-grey.svg" alt="收合" />
                </button>
              </div>
            </section>

            <section className="cart_info_area">
              <form className="cart_info_card">
                <div className="cart_table_head">
                  <div className="cart_diamond">
                    <img src="./images/ShoppingCart/shoppingcart_ diamond.svg" alt="送貨及付款方式" />
                  </div>
                  <h2>送貨及付款方式</h2>
                </div>
                <div className="cart_options_area">
                  <label>*送貨地點<select required><option>台灣</option><option>海外</option></select></label>
                  <label>*送貨方式<select required><option>7-11 取貨付款</option><option>7-11 取貨不付款</option><option>黑貓宅配</option></select></label>
                  <label>*取貨門市<select required><option>華山門市</option><option>北車門市</option><option>詳細地址</option></select></label>
                </div>
              </form>
              <form className="cart_info_card">
                <div className="cart_table_head">
                  <div className="cart_diamond">
                    <img src="./images/ShoppingCart/shoppingcart_ diamond.svg" alt="收件人資料" />
                    <img src="./images/ShoppingCart/shoppingcart_ diamond.svg" alt="收件人資料" />
                  </div>
                  <h2>收件人資料</h2>
                </div>
                <div className="cart_options_area">
                  <label htmlFor="username">*姓名<input id="username" type="text" placeholder="請輸入姓名" required /></label>
                  <label htmlFor="tel">*聯絡電話<input id="tel" type="tel" placeholder="請輸入電話，例如:0912345678" required /></label>
                  <label>*發票資訊<select required><option>手機載具</option><option>(公司)統一編號</option><option>捐贈發票</option></select></label>
                </div>
              </form>
            </section>
          </section>

          <section className="cart_right">
            <div className="cart_table_head">
              <div className="cart_diamond">
                <img src="./images/ShoppingCart/shoppingcart_ diamond.svg" alt="訂單資訊" />
                <img src="./images/ShoppingCart/shoppingcart_ diamond.svg" alt="訂單資訊" />
                <img src="./images/ShoppingCart/shoppingcart_ diamond.svg" alt="訂單資訊" />
              </div>
              <h2>訂單資訊</h2>
            </div>
            <div className="cart_detail_area">
              <ul>
                <li className="cart_subtotal"><span>小計：</span><span>NT$5,180</span></li>
                <li className="cart_fee"><span>運費：</span><span>NT$70</span></li>
                <li>
                  <label htmlFor="coupon">
                    優惠券代碼：<input id="coupon" type="text" placeholder="請輸入代碼" />
                  </label>
                </li>
                <hr />
                <li className="cart_total"><span>合計：</span><span className="cart_totalnum">NT$5,250</span></li>
              </ul>
              <button className="cart_btn_checkout" onClick={handleCheckout}>確認結帳</button>
            </div>
          </section>
        </section>

        {showSuccessMsg && (
          <div className="checkout-success-modal">
            <div className="success-content">
              <h3>✦ 結帳完成 ✦</h3>
              <p>商品即將出貨，感謝您的購買</p>
            </div>
          </div>
        )}

        <LoginRegisterModal isOpen={showAuthModal} onClose={closeAuthModal} />
      </main>
      <footer className="cart_footer">
        <BgDark />
        <FooterTrn />
      </footer>
    </>
  );
}