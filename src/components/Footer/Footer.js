import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import inst from './picture/instagram.png'
import facebook from './picture/facebook.png'
import telegram from './picture/telegram.png'
import whatsapp from './picture/whatsapp.png'

class  Footer extends Component {

    sss = () => {
      console.log('inst');
      
    }

    render() {
      return (
        <footer className="footer">
          
          <ul className="footer-link-main">Контакты
            <div></div>
            <li>+(996) 702 32 33 75</li>
            <li>+(996) 502 32 33 75</li>
            <li>+(996) 555 32 33 75</li>
            <li>+(996) 222 32 33 75</li>
            <div className="social-sets">
              <li><img onClick={this.sss} src={inst} className="img-inst" alt=""></img></li>
              <li><img onClick={this.sss} src={facebook} className="img-inst" alt=""></img></li>
              <li><img onClick={this.sss} src={telegram} className="img-inst" alt=""></img></li>
              <li><img onClick={this.sss} src={whatsapp} className="img-inst" alt=""></img></li>
            
            </div>
          </ul>

          <ul className="footer-link-main">Каталог товаров
            <div></div>
            <li><Link to="/all" className="footer-link-elements">Все товары</Link></li>
            <li><Link to="/proza" className="footer-link-elements">Проза</Link></li>
            <li><Link to="/priklyucheniya" className="footer-link-elements">Приключения</Link></li>
            <li><Link to="/poeziya" className="footer-link-elements">Поэзия</Link></li>
            <li><Link to="/fantasy" className="footer-link-elements">Фэнтези</Link></li>
            <li><Link to="/romans" className="footer-link-elements">Любовный роман</Link></li>
            <li><Link to="/humor" className="footer-link-elements">Юмор</Link></li>
            <li><Link to="/fantastic" className="footer-link-elements">Научная фантастика</Link></li>
            <li><Link to="/forchild" className="footer-link-elements">Детское</Link></li>
            <li><Link to="/detective" className="footer-link-elements">Детектив</Link></li>
            <li><Link to="/drams" className="footer-link-elements">Драма</Link></li>
            <li><Link to="/horrors" className="footer-link-elements">Ужасы и мистика</Link></li>
            <li><Link to="/religions" className="footer-link-elements">Религия и духовность</Link></li>
            <li><Link to="/thriller" className="footer-link-elements">Триллер</Link></li>
            <li><Link to="/myths" className="footer-link-elements">Мифы и легенды</Link></li>
            <li><Link to="/biography" className="footer-link-elements">Биография и мемуары</Link></li>
          </ul>

          <ul className="footer-link-main">Быстрый переход
          <div></div>
            <li><Link to="/" className="footer-link-elements">Главная</Link></li>
            <li><Link to="/about" className="footer-link-elements">О компании</Link></li>
            <li><Link to="/contact" className="footer-link-elements">Контакты</Link></li>
            <li><Link to="/basket" className="footer-link-elements">Корзина</Link></li>
          </ul>
        </footer>
      );
  }
  
}

export default Footer;