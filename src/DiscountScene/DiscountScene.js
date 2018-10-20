import React, { Component } from 'react';
import classNames from 'classnames';
import './DiscountScene.css';
import PersonPaginator from './includes/PersonPaginator';

class DiscountScene extends Component {
  state = {
    validPhone: false,
    phone: '',
  };

  onPhoneInput = (event) => {
    const { value } = event.target;

    let validPhone = false;
    if (value) {
      validPhone = true;
    }

    this.setState({
      phone: value,
      validPhone,
    });
  };

  render() {
    const { validPhone, phone } = this.state;

    return (
      <div className="DiscountScene">
        <div className="DiscountScene__girl-image" />
        <div className="DiscountScene__main">
          <div className="DiscountScene__header">
            <h1 className="DiscountScene__header__text">СКИДКИ</h1>
            <div className="DiscountScene__header__images" />
          </div>
          <div className="DiscountScene__text">
            Мы предлагаем несколько суммируемых способов<br />
            снижения цены. Наши сотрудники расскажут вам о них &mdash;<br />
            позвоните нам или закажите обратный звонок:
          </div>
          <div className="DiscountScene__form">
            <div
              className={classNames([
                'DiscountScene__input',
                validPhone && 'DiscountScene__input--valid',
              ])}
            >
              <input
                type="text"
                required
                name="phone"
                value={phone}
                onChange={this.onPhoneInput}
              />
              <span />
              <label>номер телефона</label>
            </div>
            <div
              className={classNames([
                'DiscountScene__form__submit_button',
                validPhone && 'DiscountScene__form__submit_button--enabled',
              ])}
            >
              отправить
            </div>
          </div>
          <div className="DiscountScene__PersonPaginator">
            <PersonPaginator />
          </div>
        </div>
      </div>
    );
  }
}

export default DiscountScene;
