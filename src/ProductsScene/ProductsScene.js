import React, { PureComponent } from 'react';
import posed from 'react-pose';
import './ProductsScene.css';

const Sidebar = posed.ul({
  open: {
    delayChildren: 200,
    staggerChildren: 50,
  },
  closed: {
    delay: 300,
  },
});

const Item = posed.li({
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 20,
    opacity: 0,
  },
});

class ProductsScene extends PureComponent {
  state = {
    visible: false,
  };

  componentDidMount = () => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('ProductsScene__body');

    setTimeout(() => {
      this.setState({
        visible: true,
      });
    }, 0);
  };

  componentWillUnmount() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('ProductsScene__body');
  }

  render() {
    const { visible } = this.state;

    return (
      <div className="ProductsScene">
        <h2 className="ProductsScene__header">продуктовая карта</h2>
        <Sidebar className="ProductsScene__sidebar" pose={visible ? 'open' : 'closed'}>
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
        </Sidebar>
      </div>
    );
  }
}

export default ProductsScene;
