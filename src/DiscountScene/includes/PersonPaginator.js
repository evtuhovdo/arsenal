import React, { Component } from 'react';
import classNames from 'classnames';
import find from 'lodash/find';
import './PersonPaginator.css';

const data = [
  {
    id: 1,
    name: 'Полина Колганова',
    phone: '+7 (913) 782-43-08',
    icq: '694-667-027',
  },
  {
    id: 2,
    name: 'Евтухов Денис',
    phone: '+7 (913) 065-01-01',
    icq: '555-231-909',
  },
  {
    id: 3,
    name: 'Полина Колганова',
    phone: '+7 (913) 782-43-08',
    icq: '694-667-027',
  },
  {
    id: 4,
    name: 'Евтухов Денис',
    phone: '+7 (913) 065-01-01',
    icq: '555-231-909',
  },

  {
    id: 5,
    name: 'Полина Колганова',
    phone: '+7 (913) 782-43-08',
    icq: '694-667-027',
  },
];

const PAGE_COUNT = data.length;

class PersonPaginator extends Component {
  state = {
    currentPage: 1,
  };

  handlePrev = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1,
      });
    }
  };

  handleNext = () => {
    const { currentPage } = this.state;
    if (currentPage < PAGE_COUNT) {
      this.setState({
        currentPage: currentPage + 1,
      });
    }
  };

  render() {
    const { currentPage } = this.state;
    const item = find(data, { id: currentPage });

    return (
      <div className="PersonPaginator">
        <div className="PersonPaginator__first_row">
          <div className="PersonPaginator__name">{item.name}</div>
          <div className="PersonPaginator__paging">
            <div
              className={classNames([
                'PersonPaginator__chevron_left',
                currentPage > 1 && 'PersonPaginator__chevron--enabled',
              ])}
              onClick={this.handlePrev}>
              {'<'}
            </div>
            <div className="PersonPaginator__page_index">{currentPage}/{PAGE_COUNT}</div>
            <div
              className={classNames([
                'PersonPaginator__chevron_right',
                currentPage < PAGE_COUNT && 'PersonPaginator__chevron--enabled',
              ])}
              onClick={this.handleNext}
            >
              {'>'}
            </div>
          </div>
        </div>
        <div
          className={classNames({
            'PersonPaginator__first_row__bottom': true,
            'first': currentPage === 1,
            'second': currentPage === 2,
            'third': currentPage === 3,
            'four': currentPage === 4,
            'five': currentPage === 5,
          })}
        />
        <div className="PersonPaginator__contact">
          {item.phone} / ICQ: {item.icq}
        </div>
      </div>
    );
  }
}

export default PersonPaginator;
