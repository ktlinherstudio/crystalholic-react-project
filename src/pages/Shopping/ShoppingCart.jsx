import './ShoppingCart.css';
import NavBarDark from '../../components/NavBarDark';

export default function ShoppingCart() {
    return (
        <>
            <NavBarDark />
            <main className="cart_page">
            {/* 標題 */}
            <div id="title">
                <img className="decorate-left" src="../images/shoppingcart_decorate-left.svg" alt="左裝飾" />
                <h3 className="decorate-title">購物車</h3>
                <img className="decorate-right" src="../images/shoppingcart_decorate-right.svg" alt="右裝飾" />
            </div>

            {/* 重點區 */}
            <section className="cart_point">
                {/* 左邊區域 */}
                <section className="left">
                    {/* 購物車明細區 */}
                    <section className="purchase_items">
                        {/* 列表 */}
                        <div className="cart_card">
                            <div className="table_head">
                                <span>商品</span>
                                <span>尺寸</span>
                                <span>價格</span>
                                <span>數量</span>
                                <span>小計</span>
                            </div>
                        </div>

                        {/* 單一商品列 (1) */}
                        <div className="table_row">
                            <div className="product_info">
                                <img src="../images/pc_wd_blue.jpg" alt="沁藍之澗商品照" />
                                <p>沁藍之澗</p>
                            </div>
                            <div className="product_size">
                                <p>串珠 6mm<br />手圍 14cm</p>
                            </div>
                            <div className="product_price">
                                <p>NT$ 2,590</p>
                            </div>
                            <select className="qty_select">
                                {[1, 2, 3, 4, 5].map(num => <option key={num}>{num}</option>)}
                            </select>
                            <div className="subtotal">
                                <p>NT$ 2,590</p>
                            </div>
                            <div className="cross_btn">
                                <button><img src="../images/shoppingcart-btn_cross.svg" alt="刪除" /></button>
                            </div>
                        </div>

                        {/* 繼續購物 */}
                        <div className="shopping_tip">
                            <button className="continue_shopping">繼續購物</button>
                            <button className="num_items">
                                <span>(共2件)</span>
                                <img src="../images/shoppingcart-btn_accordion-grey.svg" alt="展開" />
                            </button>
                        </div>
                    </section>
                </section>
            </section>
        </main>
            
        </>
    )
} 