import React, { PureComponent } from 'react';
import classNames from 'classnames';
import map from 'lodash/map';
import './AdvantagesScene.css';
import posed from 'react-pose/lib/index';

const steps = [
  {
    id: 1,
    headline: 'Ответ в течение 3 гудков',
    subline: '— ни роботов, ни ожидания',
  },
  {
    id: 2,
    headline: 'Всегда на связи',
    subline: '24 часа, 7 дней в неделю',
  },
  {
    id: 3,
    headline: 'Регулярные высадки',
    subline: 'садим деревья на Алтае',
  },
  {
    id: 4,
    headline: 'Счёт за 20 минут',
    subline: 'с момента запроса',
  },
  {
    id: 5,
    headline: 'Отгрузка на следующий день',
    subline: 'товар «в наличии» будет у вас',
    subline2: 'уже на следующий после оплаты день',
  },
  {
    id: 6,
    headline: 'Минимум бюрократии',
    subline: 'вопросы решаются быстро',
  },
];

const Icon = posed.div({
  visible: {
    y: 0,
    delay: 300,
    opacity: 1,
  },
  hidden: {
    y: 20,
    opacity: 0,
  },
});

const Headline = posed.div({
  visible: {
    x: 0,
    delay: 300,
    opacity: 1,
  },
  hidden: {
    x: -150,
    opacity: 0,
  },
});

const Subline = posed.div({
  visible: {
    x: 0,
    delay: 300,
    opacity: 1,
  },
  hidden: {
    x: 100,
    opacity: 0,
  },
});

const STEP_COUNT = steps.length;
const AUTO_ROTATE_INTERVAL = 3000;

class AdvantagesScene extends PureComponent {
  state = {
    activeStep: 1,
    interval: null,
  };

  setStep = stepId => () => {
    this.setState({
      activeStep: stepId,
    });
  };

  nextStep = () => {
    const { activeStep } = this.state;

    let nextStep = activeStep + 1;
    if (nextStep > STEP_COUNT) {
      nextStep = 1;
    }
    this.setState({
      activeStep: nextStep,
    });
  };

  componentDidMount = () => {
    this.startAutoRotate();
  };

  componentWillUnmount = () => {
    this.stopAutoRotate();
  };

  onDotMouseOver = () => {
    this.stopAutoRotate();
  };

  onDotMouseLeave = () => {
    this.startAutoRotate();
  };

  startAutoRotate = () => {
    const interval = setInterval(() => {
      this.nextStep();
    }, AUTO_ROTATE_INTERVAL);
    this.setState({
      interval,
    });
  };

  stopAutoRotate = () => {
    if (this.state.interval) {
      clearInterval(this.state.interval);
      this.setState({
        interval: null,
      });
    }
  };

  render() {
    const { activeStep } = this.state;

    console.log('activeStep', activeStep);

    return (
      <div className="AdvantagesScene">
        <div className="AdvantagesScene__paging">
          <div
            className="AdvantagesScene__paging__container"
            onMouseOver={this.onDotMouseOver}
            onMouseLeave={this.onDotMouseLeave}
          >
            {map(steps, step => (
              <div
                key={step.id}
                className={classNames({
                  'AdvantagesScene__paging__dot': true,
                  'AdvantagesScene__paging__dot--active': step.id === activeStep,
                })}

                onClick={this.setStep(step.id)}
              />
            ))}
          </div>
        </div>
        <div className="AdvantagesScene__plan_4" />
        <div className="AdvantagesScene__plan_3" />
        <div className="AdvantagesScene__plan_2" />
        <div className="AdvantagesScene__plan_1" />
        <div className="AdvantagesScene__plan_0">
          {map(steps, step => (
            <Icon
              key={step.id}
              initialPose="hidden"
              className={classNames([
                'AdvantagesScene__icon',
                `AdvantagesScene__icon__icon-${step.id}`,
              ])}
              pose={step.id === activeStep ? 'visible' : 'hidden'}
            />
          ))}
        </div>
        <div className="AdvantagesScene__description">
          {map(steps, step => (
            <Headline
              key={step.id}
              initialPose="hidden"
              className="AdvantagesScene__headline"
              pose={step.id === activeStep ? 'visible' : 'hidden'}
            >{step.headline}</Headline>
          ))}
          {map(steps, step => (
            <Subline
              key={step.id}
              initialPose="hidden"
              className="AdvantagesScene__subline"
              pose={step.id === activeStep ? 'visible' : 'hidden'}
            >
              {step.subline}
              {step.subline2 && <React.Fragment><br/>{step.subline2}</React.Fragment>}
            </Subline>
          ))}
        </div>
      </div>
    );
  }
}

export default AdvantagesScene;
