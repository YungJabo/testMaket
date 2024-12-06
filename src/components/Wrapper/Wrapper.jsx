import { Header } from "../Header/Header";
import { Filter } from "../Filter/Filter";
import { Cards } from "../Cards/Cards";

export const Wrapper = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="wrapper__content">
          <Filter />
          <Cards />
        </div>
      </div>
    </>
  );
};
