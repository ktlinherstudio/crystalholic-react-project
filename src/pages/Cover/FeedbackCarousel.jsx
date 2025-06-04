import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../App.scss/css/Style.min.css'

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: '',
    };
  }

  generateItems() {
    const items = [];
    const { active } = this.state;
    const { items: allItems } = this.state;

    for (let i = active - 2; i <= active + 2; i++) {
      let index = (i + allItems.length) % allItems.length;
      let level = active - i;
      items.push(
        <Item key={index} id={allItems[index]} level={level} />
      );
    }
    return items;
  }

  moveLeft = () => {
    const { active, items } = this.state;
    const newActive = active - 1 < 0 ? items.length - 1 : active - 1;
    this.setState({
      active: newActive,
      direction: 'left'
    });
  }

  moveRight = () => {
    const { active, items } = this.state;
    const newActive = (active + 1) % items.length;
    this.setState({
      active: newActive,
      direction: 'right'
    });
  }

  render() {
    return (
      <div className="carousel noselect">
        <div className="arrow arrow-left" onClick={this.moveLeft}>&lt;</div>
        <TransitionGroup component={null} className={`transition-group ${this.state.direction}`}>
          {this.generateItems()}
        </TransitionGroup>
        <div className="arrow arrow-right" onClick={this.moveRight}>&gt;</div>
      </div>
    );
  }
}

class Item extends Component {
  render() {
    const className = `item level${this.props.level}`;
    return <div className={className}>{this.props.id}</div>;
  }
}

export default Carousel;

// Sample usage:
import ReactDOM from 'react-dom/client';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ReactDOM.createRoot(document.getElementById('root')).render(<Carousel items={items} active={0} />);
