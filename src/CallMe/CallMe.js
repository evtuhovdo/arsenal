/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import posed, { PoseGroup } from 'react-pose';
import './CallMe.css';

const AUTO_CLOSE_DELAY = 5000;

const Popup = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 150 },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

class CallMe extends Component {
  state = {
    showForm: false,
    showThx: false,
    timeout: null,
  };

  onCallMeLinkClick = () => {
    const { showForm, showThx } = this.state;

    if (!showThx) {
      this.setState({
        showForm: !showForm,
      });
    }
  };

  handleClickOutside = event => {
    const { showForm } = this.state;

    if (showForm) {
      this.setState({
        showForm: false,
      });
    }
  };

  onFormSubmit = () => {
    this.setState({
      showForm: false,
      showThx: true,
    });
  };

  onCloseClick = () => {
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
    }

    this.setState({
      showThx: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.showThx && this.state.showThx) {
      const timeout = setTimeout(() => {
        this.setState({
          showThx: false,
        });
      }, AUTO_CLOSE_DELAY);

      this.setState({
        timeout,
      });
    }
  }

  componentWillUmount() {
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
    }
  }

  render() {
    const { showForm, showThx } = this.state;

    return (
      <div className="CallMe-root">
        <div
          role="button"
          className={classNames([
            'CallMe-link',
            showForm && 'CallMe-link--active',
          ])}
          onClick={this.onCallMeLinkClick}
        >
          перезвоните мне
        </div>
        <PoseGroup>
          {showForm && (
            <Popup key="CallMe-white-popup" className="CallMe-white-popup">
              <div className="CallMe-white-popup-input-group">
                <div className="CallMe-white-popup-input">
                  <input type="text" required name="phone" />
                  <span />
                  <label>номер телефона</label>
                </div>
                <div className="CallMe-white-popup-input CallMe-white-popup-input-last">
                  <input type="text" required name="name" />
                  <span />
                  <label>имя</label>
                </div>
              </div>
              <div className="CallMe-white-popup-button" role="button" onClick={this.onFormSubmit}>
                перезвоните мне
              </div>
            </Popup>
          )}
          {showThx && (
            <Popup key="CallMe-blue-popup" className="CallMe-blue-popup">
              <div className="CallMe-blue-popup-text">
                Спасибо за обращение.<br />
                Мы перезвоним вам в течение 10 минут.
              </div>
              <div className="CallMe-blue-popup-button" role="button" onClick={this.onCloseClick}>
                <div className="CallMe-blue-popup-button-text">закрыть</div>
                <div className="CallMe-blue-popup-button-bar-container">
                  <div className="CallMe-blue-popup-button-bar" />
                </div>
              </div>
            </Popup>
          )}
        </PoseGroup>
      </div>
    );
  }
}

export default onClickOutside(CallMe);
