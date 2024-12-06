import "./Header.scss";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/logo.svg" alt="" className="logo__img" />
          <span className="logo__text">Логотип</span>
        </div>
        <button className="header__catalog">Каталог</button>
        <label htmlFor="search-item" className="header__search">
          <img src="/find.svg   " alt="" className="header__search-img" />
          <input
            type="text"
            className="header__search-input"
            id="search-item"
            placeholder="Поиск по 100 000 товаров"
          />
          <div className="header__search-buttons">
            <button className="header__search-cancel">
              <img
                src="/cancel.svg"
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
    </>
  );
};
