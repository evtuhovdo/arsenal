import React, { PureComponent } from 'react';
import classNames from 'classnames';

import './FAQScene.css';

class FAQScene extends PureComponent {
  state = {
    activeTab: 0,
    activeItem: null,
  };

  openItem = itemId => () => {
    if (this.state.activeItem === itemId) {
      this.setState({
        activeItem: null,
      });
    } else {
      this.setState({
        activeItem: itemId,
      });
    }
  };

  selectTab = itemId => () => {
    this.setState({
      activeTab: itemId,
    });
  };

  render() {
    const { activeTab, activeItem } = this.state;

    return (
      <div className="FAQScene">
        <h2 className="FAQScene__header">частые вопросы</h2>
        <div className="FAQScene__main">
          <div className="FAQScene__tabs">
            <div
              className={classNames([
                'FAQScene__tab',
                activeTab === 0 && 'FAQScene__tab--selected',
              ])}
              onClick={this.selectTab(0)}
            >
              о доставке
            </div>
            <div
              className={classNames([
                'FAQScene__tab',
                activeTab === 1 && 'FAQScene__tab--selected',
              ])}
              onClick={this.selectTab(1)}
            >
              о товаре
            </div>
            <div
              className={classNames([
                'FAQScene__tab',
                activeTab === 2 && 'FAQScene__tab--selected',
              ])}
              onClick={this.selectTab(2)}
            >
              об условиях сотрудничества
            </div>
          </div>
          <div className="FAQScene__content">
            <div
              className={classNames([
                'FAQScene__item',
                activeItem === 0 && 'FAQScene__item--open',
              ])}
            >
              <div className="FAQScene__item__header" onClick={this.openItem(0)}>
                какими транспортными отгружаете?
                <div className="FAQScene__item__trigger" />
              </div>
              <div className="FAQScene__item__content">
                По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых
                людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum,
              </div>
            </div>
            <div
              className={classNames([
                'FAQScene__item',
                activeItem === 1 && 'FAQScene__item--open',
              ])}
            >
              <div className="FAQScene__item__header" onClick={this.openItem(1)}>
                сроки отгрузки?
                <div className="FAQScene__item__trigger" />
              </div>
              <div className="FAQScene__item__content">
                По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых
                людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
                языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
              </div>
            </div>
            <div
              className={classNames([
                'FAQScene__item',
                activeItem === 2 && 'FAQScene__item--open',
              ])}
            >
              <div className="FAQScene__item__header" onClick={this.openItem(2)}>
                доставку оплачиваете?
                <div className="FAQScene__item__trigger" />
              </div>
              <div className="FAQScene__item__content">
                По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых
                людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
                языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
              </div>
            </div>
            <div
              className={classNames([
                'FAQScene__item',
                activeItem === 3 && 'FAQScene__item--open',
              ])}
            >
              <div className="FAQScene__item__header" onClick={this.openItem(3)}>
                в какие регионы отгружаете?
                <div className="FAQScene__item__trigger" />
              </div>
              <div className="FAQScene__item__content">
                По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых
                людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
                языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQScene;
