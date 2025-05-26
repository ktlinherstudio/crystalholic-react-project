import '../App.scss/css/Style.min.css';

export default function CoverFeedTest() {
    // 模擬 8 筆 feedback 資料
    const feedbacks = Array(8).fill({
        memberImg: './images/HomePage/img-feedbackmenber.jpg',
        reviewImg: './images/HomePage/img-feedback.jpg',
        text: '已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好',
    });

    // 將 feedbacks 每 4 筆分組
    const groupedFeedbacks = [];
    for (let i = 0; i < feedbacks.length; i += 4) {
        groupedFeedbacks.push(feedbacks.slice(i, i + 4));
    }

    return (
        <section id='section-feedback'>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    {groupedFeedbacks.map((group, groupIndex) => (
                        <div className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`} key={groupIndex}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    {group.map((item, i) => (
                                        <div className="col-12 col-lg-3 d-flex justify-content-center" key={i}>
                                            <div className="feedback d-flex flex-row align-items-center">
                                                <div className="review-pic d-flex gap-2">
                                                    <span><img src={item.memberImg} className="member-img" alt="" /></span>
                                                    <span><img src={item.reviewImg} className="review-img" alt="" /></span>
                                                </div>
                                                <div className="feedback-left text-center mt-3">
                                                    <div className="star-box">
                                                        {[...Array(5)].map((_, starIndex) => (
                                                            <img key={starIndex} src="./images/HomePage/star.svg" className="star" alt="" />
                                                        ))}
                                                    </div>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* col-md-6 */}
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button> */}
                {/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
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