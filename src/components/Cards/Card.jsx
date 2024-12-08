export const Card = ({ cardData }) => {
  const getSchortedName = (name) => {
    if (name.length > 66) {
      return name.slice(0, 66) + "...";
    }
    return name;
  };
  return (
    <>
      <div className="card__img-block">
        <img src="/card.png" alt="" className="card__img" />
        <div className="card__hit">
          Хит продаж <img src="/fire.svg" alt="" className="card__hit__img" />
        </div>
        <div className="card__discount">25%</div>
      </div>
      <div className="card__brand">{cardData.brand}</div>
      <div className="card__name">{getSchortedName(cardData.name)}</div>
      <div className="card__price">
        <div className="card__price__current">{cardData.price}</div>
        <div className="card__price__old">{cardData.oldPrice}</div>
      </div>
      {cardData.available ? (
        <button className="card__button card__button--buy">Купить</button>
      ) : (
        <button className="card__button card__button--not-available">
          Сообщить о поступлении
        </button>
      )}
    </>
  );
};
