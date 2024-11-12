import React from "react";
import Logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    const [isSigned, setIsSigner] = React.useState(false);
  return (
    <>
        <header className="header desktop">
            <div className="header__wrapper">
                <div className="header__logo">
                    <img src={Logo} alt="logo" />
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-list__item">
                            <Link to="/" className="header__nav-list__item--link">Главная</Link>
                        </li>
                        <li className="header__nav-list__item">
                            <Link to="/rating" className="header__nav-list__item--link">Рейтинг</Link>
                        </li>
                        <li className="header__nav-list__item">
                            <Link to="/cabinet" className="header__nav-list__item--link">Личный кабинет</Link>
                        </li>
                        <li className="header__nav-list__item">
                            <Link to="/" className="header__nav-list__item--link"></Link>
                        </li>
                    </ul>
                </nav>
                <div className="header__menu-wrapper">
                    
                        {
                            isSigned ? (
                                <button className="header__menu-button">
                                    <img className="header__menu-avatar" src="" alt="avatar" />
                                </button>
                                
                            ) : <Link to="/auth" className="header__sign--link">Войти</Link>
                        }
                        <img src="" alt="" />
                    <ul className="header__menu-list">
                        <li className="header__menu-list__item">
                            <Link to="/" className="header__menu-list__item--link">{isSigned && "Выйти"}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <header className="header mobile">
            <div className="header__wrapper">
                <div className="header__logo">
                    <img src="" alt="logo" />
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-list__item">
                            <Link to="/" className="header__nav-list__item--link">Главная</Link>
                        </li>
                        <li className="header__nav-list__item">
                            <Link to="/rating" className="header__nav-list__item--link">Рейтинг</Link>
                        </li>
                        <li className="header__nav-list__item">
                            <Link to="/cabinet" className="header__nav-list__item--link">Личный кабинет</Link>
                        </li>
                        <li className="header__nav-list__item">
                            <Link to="/" className="header__nav-list__item--link"></Link>
                        </li>
                    </ul>
                </nav>
                <div className="header__menu-wrapper">
                    <button className="header__menu-button">
                        {
                            isSigned ? (
                                <img className="header__menu-avatar" src="" alt="avatar" />
                            ) : "Войти"
                        }
                        <img src="" alt="" />
                    </button>
                    <ul className="header__menu-list">
                        <li className="header__menu-list__item">
                            <Link to="/" className="header__menu-list__item--link">{isSigned && "Выйти"}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </>
  )
};

export default Header;
