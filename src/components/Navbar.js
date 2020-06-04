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
                        <Link class="dropdown-item" to="/proza"> Проза</Link>
                        <Link class="dropdown-item" to="/priklyucheniya"> Приключения</Link>
                        <Link class="dropdown-item" to="/poeziya"> Поэзия</Link>
                        <Link class="dropdown-item" to="/fantasy"> Фэнтези</Link>
                        <Link class="dropdown-item" to="/romans"> Любовный</Link>
                        <Link class="dropdown-item" to="/humor"> Юмор</Link>
                        <Link class="dropdown-item" to="/fantastic"> Научная Фантастика</Link>
                        <Link class="dropdown-item" to="/forchild"> Детское</Link>
                        <Link class="dropdown-item" to="/detective">Детектив </Link>
                        <Link class="dropdown-item" to="/religions"> Религия и Духовность</Link>
                        <Link class="dropdown-item" to="/drams"> Драма</Link>
                        <Link class="dropdown-item" to="/horrors"> Ужасы</Link>
                        <Link class="dropdown-item" to="/myths">Мифы и Легенды</Link>
                        <Link class="dropdown-item" to="/thriller"> Триллер</Link>
                        <Link class="dropdown-item" to="/biography"> Биография</Link>


                      </div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/basket">
                    <button type="button" class="btn btn-warning">Корзина</button>
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

