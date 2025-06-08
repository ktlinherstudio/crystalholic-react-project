import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../App.scss/css/Style.min.css'
import { div } from 'framer-motion/client';

const slides = [
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好</p>
        </div>
    </div>
];

export default function FeedbackSwiper() {
    return (
        <div className='fdbk'>
            <div className="feedback-container">
                <Swiper
                    slidesPerView="auto"
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="feedback-swiper"
                >
                    {slides.map((content, index) => (
                        <SwiperSlide key={index}>
                            <div className="feedback-box">{content}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}