import '../App.scss/css/Style.min.css';

export default function CoverFeedTest() {
    return (
        <section id='section-feedback'>
            <div id="carouselExample" className="carousel slide" data-bs-ride="false">
                <div className="carousel-inner">
                    {/* 第1組（每次輪播這一組） */}
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row justify-content-center">
                                {Array(4).fill(0).map((_, i) => (
                                    <div key={i} className="col-6 col-md-4 col-lg-3">
                                        <div className="feedback">
                                            <div className="review-pic d-flex gap-2">
                                                <span><img src="./images/HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>
                                                <span><img src="./images/HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                                            </div>
                                            <div className="feedback-left text-center mt-3">
                                                <div className="star-box">
                                                    {[...Array(5)].map((_, idx) => (
                                                        <img key={idx} src="./images/HomePage/star.svg" className="star" alt="" />
                                                    ))}
                                                </div>
                                                <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 第2組 */}
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row justify-content-center">
                                {Array(4).fill(0).map((_, i) => (
                                    <div key={i} className="col-6 col-md-4 col-lg-3">
                                        <div className="feedback">
                                            <div className="review-pic d-flex gap-2">
                                                <span><img src="./images/HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>
                                                <span><img src="./images/HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
                                            </div>
                                            <div className="feedback-left text-center mt-3">
                                                <div className="star-box">
                                                    {[...Array(5)].map((_, idx) => (
                                                        <img key={idx} src="./images/HomePage/star.svg" className="star" alt="" />
                                                    ))}
                                                </div>
                                                <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 控制按鈕 */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
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

                            <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

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