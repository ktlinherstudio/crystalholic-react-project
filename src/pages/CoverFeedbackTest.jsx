import { useEffect, useRef, useState } from 'react';
import '../App.scss/css/Style.min.css'
import NavBarLight from '../components/NavBarLight'
import FooterPlain from '../components/FooterPlain'
import BgDarkBlock from '../components/BgDarkBlock'
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

export default function Cover() {

    return (
        <>
            {/* <div id='color'>做RWD用 之後會拿掉 */}
            {/* <div id='color'> */}
            {/* 背景 */}
         
            {/* 礦迷回饋 */}
            <section id="section-feedback">
                <header className="feedback-displaytitle">
                    <span><img src="./images/HomePage/deco-left.svg" alt="" /></span>
                    <div id="fbtitle">
                        <span>Feedback</span>
                        <span>礦迷回饋</span>
                    </div>
                    <span><img src="./images/HomePage/deco-right.svg" alt="" /></span>
                    {/* span.image裝飾要設定長寬嗎  */}
                </header>
                <div className="feedback-box">
                    <span className="feedback-arrowleft"><img src="./images/HomePage/icon_arrow_left.ico.svg" alt="" /></span>
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
                    <div className="feedback">
                        <div className="review-pic">

                            <span><img src="./images/HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                            <span><img src="./images/HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
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
                            {/* 回饋內文  */}
                            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                        </div>
                    </div>
                    <div className="feedback">
                        <div className="review-pic">

                            <span><img src="./images/HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                            <span><img src="./images/HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                        </div>
                        <div className="feedback-left">
                            {/* 水晶5星評價  */}
                            <div className="star-box">
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                            </div>
                            {/* 回饋內文  */}
                            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                        </div>
                    </div>
                    <div className="feedback">
                        <div className="review-pic">

                            <span><img src="./images/HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

                            <span><img src="./images/HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                        </div>
                        <div className="feedback-left">
                            {/* 水晶5星評價  */}
                            <div className="star-box">
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                                <img src="./images/HomePage/star.svg" className="star" alt="" />
                            </div>
                            {/* 回饋內文  */}
                            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                        </div>
                    </div>
                    <span className="feedback-arrowright"><img src="./images/HomePage/icon_arrow_right.ico.svg" alt="" /></span>
                </div>
            </section>
        </>
    )
}