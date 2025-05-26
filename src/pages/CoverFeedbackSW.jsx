import '../App.scss/css/Style.min.css';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <section id="section-feedback">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1
                        <div className="feedback-box">
                            {/* <span className="feedback-arrowleft"><img src="./images/HomePage/icon_arrow_left.ico.svg" alt="" /></span> */}
                            <div className="feedback">
                                <div className="review-pic">
                                    <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>
                                    <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                                </div>
                                <div className="feedback-left">
                                    {/* 水晶5星評價 */}
                                    <div className="star-box">
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                    </div>
                                    {/* 回饋內文 */}
                                    <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2
                        <div className="feedback-box">
                            {/* <span className="feedback-arrowleft"><img src="./images/HomePage/icon_arrow_left.ico.svg" alt="" /></span> */}
                            <div className="feedback">
                                <div className="review-pic">
                                    <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>
                                    <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                                </div>
                                <div className="feedback-left">
                                    {/* 水晶5星評價 */}
                                    <div className="star-box">
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                    </div>
                                    {/* 回饋內文 */}
                                    <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 3
                        <div className="feedback-box">
                            {/* <span className="feedback-arrowleft"><img src="./images/HomePage/icon_arrow_left.ico.svg" alt="" /></span> */}
                            <div className="feedback">
                                <div className="review-pic">
                                    <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>
                                    <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                                </div>
                                <div className="feedback-left">
                                    {/* 水晶5星評價 */}
                                    <div className="star-box">
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                    </div>
                                    {/* 回饋內文 */}
                                    <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 4
                        <div className="feedback-box">
                            {/* <span className="feedback-arrowleft"><img src="./images/HomePage/icon_arrow_left.ico.svg" alt="" /></span> */}
                            <div className="feedback">
                                <div className="review-pic">
                                    <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>
                                    <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                                </div>
                                <div className="feedback-left">
                                    {/* 水晶5星評價 */}
                                    <div className="star-box">
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                    </div>
                                    {/* 回饋內文 */}
                                    <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 5
                        <div className="feedback-box">
                            {/* <span className="feedback-arrowleft"><img src="./images/HomePage/icon_arrow_left.ico.svg" alt="" /></span> */}
                            <div className="feedback">
                                <div className="review-pic">
                                    <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>
                                    <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                                </div>
                                <div className="feedback-left">
                                    {/* 水晶5星評價 */}
                                    <div className="star-box">
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                        <img src="./images/HomePage/star.svg" className="star" alt="" />
                                    </div>
                                    {/* 回饋內文 */}
                                    <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>
            </section>
        </>
    )
}



{/* <section id="section-feedback"> */ }
{/* <header className="feedback-displaytitle">
                    <span><img src="./images/HomePage/deco-left.svg" alt="" /></span>
                    <div id="fbtitle">
                        <span>Feedback</span>
                        <span>礦迷回饋</span>
                    </div>
                    <span><img src="./images/HomePage/deco-right.svg" alt="" /></span>

                </header> */}
{/* <div className="feedback-box"> */ }
{/* <span className="feedback-arrowleft"><img src="./images/HomePage/icon_arrow_left.ico.svg" alt="" /></span> */ }
{/* <div className="feedback">
                        <div className="review-pic">

                            // <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                            <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                        </div>
                        <div className="feedback-left"> */}
{/* 水晶5星評價 */ }
{/* <div className="star-box">
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                            </div> */}
{/* 回饋內文 */ }
{/* <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                        </div>
                    </div> */}
{/* <div className="feedback">
                        <div className="review-pic">

                            <span><img src="./images/HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                            <span><img src="./images/HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                        </div>
                        <div className="feedback-left">
                            {/* 水晶5星評價 */}
{/* <div className="star-box">
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                            </div> */}
{/* 回饋內文  */ }
{/* <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p> */ }
{/* </div> */ }
{/* </div> */ }
{/* <div className="feedback"> */ }
{/* <div className="review-pic">

                            <span><img src="./images/HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                            <span><img src="./images/HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                        </div>
                        <div className="feedback-left">
                            {/* 水晶5星評價  */}
{/* <div className="star-box">
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                            </div> */}
{/* 回饋內文  */ }
{/* <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p> */ }
{/* </div> */ }
{/* </div> */ }
{/* <div className="feedback"> */ }
{/* <div className="review-pic">

                            <span><img src="./images/HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                            <span><img src="./images/HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                        </div> */}
{/* <div className="feedback-left"> */ }
{/* 水晶5星評價  */ }
{/* <div className="star-box">
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                            </div> */}
{/* 回饋內文  */ }
{/* <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p> */ }
{/* </div> */ }
{/* </div> */ }
{/* <span className="feedback-arrowright"><img src="./images/HomePage/icon_arrow_right.ico.svg" alt="" /></span> */ }
{/* </div> */ }
{/* </section> */ }