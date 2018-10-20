import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import AdvantagesScene from './AdvantagesScene/AdvantagesScene';
import CallMe from './CallMe/CallMe';
import FAQScene from './FAQScene/FAQScene';
import PriceScene from './PriceScene/PriceScene';
import ProductsScene from './ProductsScene/ProductsScene';
import VacTubeScene from './VacTubeScene/VacTubeScene';
import DiscountScene from './DiscountScene/DiscountScene';
import CatalogScene from './CatalogScene/CatalogScene';
import 'sanitize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <div className="App-logo" />
          </Link>
          <nav className="App-top-menu">
            <NavLink className="App-top-menu-contact-link" activeClassName="App-top-menu-contact-link--active"
                     to="/contacts">контакты</NavLink>
            <CallMe />
            <div className="App-top-menu-phone">8 800 505-46-23</div>
          </nav>
        </header>
        <main className="App-main">
          <nav className="App-left-menu">
            <NavLink
              exact
              className="App-left-menu-item"
              activeClassName="App-left-menu-item--active"
              to="/"
            >
              акции
            </NavLink>
            <NavLink
              className="App-left-menu-item"
              activeClassName="App-left-menu-item--active"
              to="/discount"
            >
              скидки
            </NavLink>
            <NavLink
              className="App-left-menu-item"
              activeClassName="App-left-menu-item--active"
              to="/advantages"
            >
              преимущества
            </NavLink>
            <NavLink
              className="App-left-menu-item"
              activeClassName="App-left-menu-item--active"
              to="/products"
            >
              продуктовая карта
            </NavLink>
            <NavLink
              className="App-left-menu-item"
              activeClassName="App-left-menu-item--active"
              to="/catalog"
            >
              получить каталог
            </NavLink>
            <NavLink className="App-left-menu-item" activeClassName="App-left-menu-item--active" to="/price">
              скачать прайс
            </NavLink>
            <NavLink className="App-left-menu-item" activeClassName="App-left-menu-item--active" to="/faq">
              частые вопросы
            </NavLink>
          </nav>
          <div className="App-main-content">
            <Route path="/" exact component={VacTubeScene} />
            <Route path="/discount" exact component={DiscountScene} />
            <Route path="/advantages" exact component={AdvantagesScene} />
            <Route path="/products" exact component={ProductsScene} />
            <Route path="/catalog" exact component={CatalogScene} />
            <Route path="/price" exact component={PriceScene} />
            <Route path="/faq" exact component={FAQScene} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
