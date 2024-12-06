import "./Cards.scss";
import { cards } from "../../const.js";
import { Card } from "./Card";

export const Cards = () => {
  return (
    <>
      <ul className="cards">
        {cards.map((card, index) => (
          <li className="card" key={index}>
            <Card cardData={card} />
          </li>
        ))}
      </ul>
    </>
  );
};
