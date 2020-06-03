import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


class Navbar extends Component {
  render() {
    return (
      <div className="menu">
        <nav className="navbar navbar-toggleable-md">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container">
            <Link className="navbar-brand" to="/">Book Store</Link>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    <button type="button" class="btn btn-primary">Главная</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    <button type="button" class="btn btn-primary">О Компании</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    <button type="button" class="btn btn-primary">Контакты</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/catalog">

                    <div class="dropdown">
                      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Каталог
                      </a>

                      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link class="dropdown-item" to="/hudlitr">Художественная Литература</Link>
                        <a class="dropdown-item" href="#">История</a>
                        <a class="dropdown-item" href="#">Фантастика</a>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    );
  }
}

export default Navbar;