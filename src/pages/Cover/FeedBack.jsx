import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const feedbacks = [
  {
    id: 1,
    memberImg: './images/HomePage/img-feedbackmenber.jpg',
    reviewImg: './images/HomePage/img-feedback.jpg',
    stars: 5,
    content: '已經跟闆娘買過三次了，都靠水晶的能量撐過低潮期，看到美美的水晶，心情就很好'
  },
  {
    id: 2,
    memberImg: './images/HomePage/img-feedbackmenber.jpg',
    reviewImg: './images/HomePage/img-feedback.jpg',
    stars: 5,
    content: '水晶很美，充滿正能量，闆娘也非常親切，每次收到都覺得好幸福！'
  },
  {
    id: 3,
    memberImg: './images/HomePage/img-feedbackmenber.jpg',
    reviewImg: './images/HomePage/img-feedback.jpg',
    stars: 5,
    content: '朋友推薦後嘗試購買，真的被療癒到了，下次還會回購！'
  },
  {
    id: 4,
    memberImg: './images/HomePage/img-feedbackmenber.jpg',
    reviewImg: './images/HomePage/img-feedback.jpg',
    stars: 5,
    content: '品質很好，價格也實在，強烈推薦給正在尋找心靈慰藉的你。'
  },
  {
    id: 5,
    memberImg: './images/HomePage/img-feedbackmenber.jpg',
    reviewImg: './images/HomePage/img-feedback.jpg',
    stars: 5,
    content: '手鍊戴起來超美，真的讓我越來越相信水晶的能量！'
  } ,{
    id: 6,
    memberImg: './images/HomePage/img-feedbackmenber.jpg',
    reviewImg: './images/HomePage/img-feedback.jpg',
    stars: 5,
    content: '品質很好，價格也實在，強烈推薦給正在尋找心靈慰藉的你。'
  },{
    id: 7,
    memberImg: './images/HomePage/img-feedbackmenber.jpg',
    reviewImg: './images/HomePage/img-feedback.jpg',
    stars: 5,
    content: '品質很好，價格也實在，強烈推薦給正在尋找心靈慰藉的你。'
  },
  {
    id: 8,
    memberImg: './images/HomePage/img-feedbackmenber.jpg',
    reviewImg: './images/HomePage/img-feedback.jpg',
    stars: 5,
    content: '品質很好，價格也實在，強烈推薦給正在尋找心靈慰藉的你。'
  },
];

const groupFeedbacks = (items, count) => {
  const result = [];
  for (let i = 0; i < items.length; i += count) {
    result.push(items.slice(i, i + count));
  }
  return result;
};

const FeedbackSection = () => {
  const getGroupCount = () => {
    const width = window.innerWidth;
    if (width >= 1200) return 4;
    if (width >= 992) return 3;
    return 2;
  };

  const [groupCount, setGroupCount] = React.useState(getGroupCount());
  const [groupedData, setGroupedData] = React.useState(groupFeedbacks(feedbacks, groupCount));

  React.useEffect(() => {
    const handleResize = () => {
      const count = getGroupCount();
      setGroupCount(count);
      setGroupedData(groupFeedbacks(feedbacks, count));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="section-feedback">
      <header className="feedback-displaytitle">
        <span><img src="./images/HomePage/deco-left.svg" alt="" /></span>
        <div id="fbtitle">
          <span>Feedback</span>
          <span>礦迷回饋</span>
        </div>
        <span><img src="./images/HomePage/deco-right.svg" alt="" /></span>
      </header>

      <div className="feedback-box">
        <Carousel
          interval={null}
          indicators={false}
          prevIcon={<span className="feedback-arrowleft"><img src="./images/HomePage/icon_arrow_left.ico.svg" alt="" /></span>}
          nextIcon={<span className="feedback-arrowright"><img src="./images/HomePage/icon_arrow_right.ico.svg" alt="" /></span>}
        >
          {groupedData.map((group, idx) => (
            <Carousel.Item key={idx}>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {group.map((item) => (
                  <div className="feedback" key={item.id}>
                    <div className="review-pic">
                      <span><img src={item.memberImg} className="member-img" alt="member" /></span>
                      <span><img src={item.reviewImg} className="review-img" alt="review" /></span>
                    </div>
                    <div className="feedback-left">
                      <div className="fdstar-box">
                        {[...Array(item.stars)].map((_, i) => (
                          <img src="./images/HomePage/star.svg" className="fdstar" alt="star" key={i} />
                        ))}
                      </div>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FeedbackSection;