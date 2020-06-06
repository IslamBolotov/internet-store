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
                    <button type="button" className="btn btn-primary">Главная</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    <button type="button" className="btn btn-primary">О Компании</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    <button type="button" className="btn btn-primary">Контакты</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/catalog">

                    <div className="dropdown">
<<<<<<< HEAD

                      <button className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

=======
                      <button className="btn btn-secondary dropdown-toggle"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
>>>>>>> dev1
                        Каталог
                      </button>

                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
<<<<<<< HEAD
                        <Link className="dropdown-item" to="/all"> Все книги</Link>
=======
                        <Link className="dropdown-item" to="/all"> Все товары</Link>
>>>>>>> dev1
                        <Link className="dropdown-item" to="/proza"> Проза</Link>
                        <Link className="dropdown-item" to="/priklyucheniya"> Приключения</Link>
                        <Link className="dropdown-item" to="/poeziya"> Поэзия</Link>
                        <Link className="dropdown-item" to="/fantasy"> Фэнтези</Link>
                        <Link className="dropdown-item" to="/romans"> Любовный</Link>
                        <Link className="dropdown-item" to="/humor"> Юмор</Link>
                        <Link className="dropdown-item" to="/fantastic"> Научная Фантастика</Link>
                        <Link className="dropdown-item" to="/forchild"> Детское</Link>
                        <Link className="dropdown-item" to="/detective">Детектив </Link>
                        <Link className="dropdown-item" to="/religions"> Религия и Духовность</Link>
                        <Link className="dropdown-item" to="/drams"> Драма</Link>
                        <Link className="dropdown-item" to="/horrors"> Ужасы</Link>
                        <Link className="dropdown-item" to="/myths">Мифы и Легенды</Link>
                        <Link className="dropdown-item" to="/thriller"> Триллер</Link>
                        <Link className="dropdown-item" to="/biography"> Биография</Link>



                      </div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/basket">
                    <button type="button" className="btn btn-warning">Корзина</button>
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

