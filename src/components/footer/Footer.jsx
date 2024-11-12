import React from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="col">
            <div className="footer__logo">
              <img src={Logo} alt="logo" />
            </div>
            <p className="footer__description"></p>
        </div>
        <div className="col">
            <nav className="footer__nav">
                <ul className="footer__nav-list">
                    <li className="footer__nav-list__item">
                        <Link to="/" className="footer__nav-list__item--link">Главная</Link>
                    </li>
                    <li className="footer__nav-list__item">
                        <Link to="/rating" className="footer__nav-list__item--link">Рейтинг</Link>
                    </li>
                    <li className="footer__nav-list__item">
                        <Link to="/cabinet" className="footer__nav-list__item--link">Личный кабинет</Link>
                    </li>
                    <li className="footer__nav-list__item">
                        <Link to="/" className="footer__nav-list__item--link"></Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="col">
          <ul className="footer__side-list">
            <li className="footer__side-list__item">
              <Link className="footer__side-list__item--link">Для разработчиков</Link>
            </li>
            <li className="footer__side-list__item">
              <Link className="footer__side-list__item--link">Пользовательское соглашение</Link>
            </li>
            <li className="footer__side-list__item">
              <p className="footer__policy">© Все права защищены 2024 | Команда "ИП"</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
