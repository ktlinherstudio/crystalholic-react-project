import React from 'react';
import ReactDOM from 'react-dom';
import '../../App.scss/css/Style.min.css'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: 0,
      direction: ''
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    const items = [];
    for (let i = this.state.active - 2; i <= this.state.active + 2; i++) {
      let index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      const level = this.state.active - i;
      items.push(
        <Item key={index} data={this.state.items[index]} level={level} />
      );
    }
    return items;
  }

  moveLeft() {
    let newActive = this.state.active - 1;
    if (newActive < 0) {
      newActive = this.state.items.length - 1;
    }
    this.setState({
      active: newActive,
      direction: 'left'
    });
  }

  moveRight() {
    let newActive = (this.state.active + 1) % this.state.items.length;
    this.setState({
      active: newActive,
      direction: 'right'
    });
  }

  render() {
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

        <div id="carousel" className="noselect">
          <div className="arrow arrow-left" onClick={this.leftClick}>
            <img src="./images/HomePage/icon_arrow_left.ico.svg" alt="" />
          </div>
          {this.generateItems()}
          <div className="arrow arrow-right" onClick={this.rightClick}>
            <img src="./images/HomePage/icon_arrow_right.ico.svg" alt="" />
          </div>
        </div>
      </section>
    );
  }
}

function Item({ data, level }) {
  const className = `item level${level}`;
  return (
    <div className={className}>
      <div className="review-pic">
        <span><img src={data.memberImg} className="member-img" alt="" /></span>
        <span><img src={data.reviewImg} className="review-img" alt="" /></span>
      </div>
      <div className="feedback-left">
        <div className="fdstar-box">
          {[...Array(5)].map((_, idx) => (
            <img key={idx} src="./images/HomePage/star.svg" className="fdstar" alt="star" />
          ))}
        </div>
        <p>{data.text}</p>
      </div>
    </div>
  );
}

export default Carousel;
