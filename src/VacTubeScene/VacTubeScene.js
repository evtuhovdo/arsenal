import React, { Component } from 'react';
import posed from 'react-pose';

import './VacTubeScene.css';

const Description = posed.div({
  exit: {
    y: 20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  }
});

class VacTubeScene extends Component {
  componentDidMount() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('VacTubeScene__body');
  }

  componentWillUnmount() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('VacTubeScene__body');
  }

  render() {
    return (
      <div className="VacTubeScene">
        <div className="VacTubeScene-tube-image" />

        <Description className="VacTubeScene-description" initialPose="exit" pose="enter">
          Пробирки с<br />
          активатором свёртывания<br />
          6 мл, пластик
          <div className="VacTubeScene-price">
            3,19
          </div>
        </Description>
        <div className="VacTubeScene-bottom">
          <div className="VacTubeScene-bottom-text">
            цена колется?
          </div>
          <div className="VacTubeScene-bottom-image" />
        </div>
      </div>
    );
  }
}

export default VacTubeScene;
