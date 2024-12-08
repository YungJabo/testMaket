import { useRef } from "react";
import "./Header.scss";
import { useState } from "react";
import logoImg from "/logo.svg";
import findImg from "/find.svg";
import cancelImg from "/cancel.svg";
import backImg from "/back.svg";

export const Header = () => {
  const findRef = useRef();
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = () => {
    console.log(1);
    setSearchValue(findRef.current.value);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logoImg} alt="" className="logo__img" />
          <span className="logo__text">Логотип</span>
        </div>
        <button className="header__catalog">Каталог</button>
        <label
          htmlFor="search-item"
          className={`header__search ${
            searchValue.trim().length > 0 ? "header__search--active" : ""
          }`}
        >
          <img src={findImg} alt="" className="header__search-img" />
          <input
            type="text"
            className="header__search-input"
            id="search-item"
            placeholder="Поиск по 100 000 товаров"
            ref={findRef}
            onChange={handleInputChange}
          />
          <div className="header__search-buttons">
            <button className="header__search-cancel">
              <img
                src={cancelImg}
                alt=""
                className="header__search-cancel-icon"
              />
            </button>
            <button className="header__search-find">Найти</button>
          </div>
        </label>
        <nav className="header__menu">
          <a href="/" className="header__menu__link">
            Информация о компании
          </a>
          <a href="/" className="header__menu__link">
            Контакты
          </a>
          <a href="/" className="header__menu__link">
            Полезные ссылки
          </a>
        </nav>
      </header>
      <header className="header header--phone">
        <button className="header__back">
          <img src={backImg} alt="" className="header__back-img" />
        </button>
        <label
          className={`header__find ${
            searchValue.trim().length > 0 ? "header__search--active" : ""
          }`}
          htmlFor="find-phone"
        >
          <input
            type="text"
            name=""
            id="find-phone"
            className="header__input"
            ref={findRef}
            onChange={handleInputChange}
          />
          <div className="header__search-buttons">
            <button className="header__search-cancel">
              <img
                src={cancelImg}
                alt=""
                className="header__search-cancel-icon"
              />
            </button>
            <button className="header__search-find">Найти</button>
          </div>
        </label>
      </header>
    </>
  );
};
