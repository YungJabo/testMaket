import "./Filter.scss";
import { category, brands } from "../../const.js";
import { useRef, useState } from "react";
import { ScrollBar } from "../ScrollBar/ScrollBar.jsx";

export const Filter = () => {
  const brandRef = useRef();
  const sizeRef = useRef();

  const changePrice = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9.]/g, "");
    e.target.value = numericValue;
  };
  const formatPrice = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9.]/g, "");
    e.target.value = numericValue ? `${numericValue} ₽` : "0 ₽";
  };

  const handleBrandChange = (index) => {
    const newCheckedBrands = [...checkedBrands];
    newCheckedBrands[index] = !newCheckedBrands[index];
    setCheckedBrands(newCheckedBrands);
  };

  const handleSizeChange = (index) => {
    const newCheckedSizes = [...checkedSizes];
    newCheckedSizes[index] = !newCheckedSizes[index];
    setCheckedSizes(newCheckedSizes);
  };
  return (
    <>
      <div className="filter">
        <ul className="category">
          {category.map((item, index) => {
            const categoryName = Object.keys(item)[0];
            const subcategories = item[categoryName];
            return (
              <li key={index} className="category__item">
                <div className="category__item__info">
                  <span className="category__item__name">{categoryName}</span>
                  <span className="category__item__count">3</span>
                </div>
                <ul className="category subcategory">
                  {subcategories.map((subcat, subIndex) => (
                    <li className="category__item" key={subIndex}>
                      <div className="category__item__info">
                        <span className="category__item__name">{subcat}</span>
                        <span className="category__item__count">3</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <div className="price">
          <h2 className="price__title">Цена</h2>
          <div className="price__block">
            <label htmlFor="price-from" className="price__label">
              <span className="price__text">от</span>
              <input
                type="text"
                className="price__from"
                id="price-from"
                defaultValue={"1 ₽"}
                onChange={(e) => changePrice(e)}
                onBlur={(e) => formatPrice(e)}
              />
            </label>

            <div className="price__divide"></div>
            <label htmlFor="price-to" className="price__label">
              <span className="price__text">до</span>
              <input
                type="text"
                className="price__to"
                id="price-to"
                defaultValue={"5000 ₽"}
                onChange={(e) => changePrice(e)}
                onBlur={(e) => formatPrice(e)}
              />
            </label>
          </div>
        </div>
        <div className="brand">
          <div className="brand__top">
            <h2 className="brand__title">Бренд</h2>
            <button className="brand__clear">Очистить</button>
          </div>
          <label htmlFor="" className="brand__find">
            <img src="/find.svg" alt="" className="brand__find__img" />
            <input type="text" className="brand__input" placeholder="Поиск" />
          </label>
          <div className="brand__list-block">
            <ul className="brand__list" ref={brandRef}>
              {brands.map((brand, index) => (
                <li className="brand__item" key={index}>
                  <label
                    htmlFor={`brand#${index}`}
                    className="brand__item__label"
                  >
                    <input type="checkbox" name="" id={`brand#${index}`} />
                    <div className={`brand__item__checkbox `}>
                      <img
                        src="/checked.svg"
                        alt=""
                        className="brand__item__arrow"
                      />
                    </div>
                    <div className="brand__item__name">{brand}</div>
                    <div className="brand__item__count">3</div>
                  </label>
                </li>
              ))}
            </ul>
            <ScrollBar contentRef={brandRef} />
          </div>
        </div>
        <div className="size">
          <div className="size__top">
            <h2 className="size__title">Размер</h2>
          </div>
          <div className="size__list-block">
            <ul className="size__list" ref={sizeRef}>
              {brands.map((brand, index) => (
                <li className="size__item" key={index}>
                  <label
                    htmlFor={`size#${index}`}
                    className="size__item__label"
                  >
                    <input type="checkbox" name="" id={`size#${index}`} />
                    <div className={`size__item__checkbox `}>
                      <img
                        src="/checked.svg"
                        alt=""
                        className="size__item__arrow"
                      />
                    </div>
                    <div className="size__item__name">{brand}</div>
                    <div className="size__item__count">3</div>
                  </label>
                </li>
              ))}
            </ul>
            <ScrollBar contentRef={sizeRef} />
          </div>
        </div>
      </div>
    </>
  );
};
