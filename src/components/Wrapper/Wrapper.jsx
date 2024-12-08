import { Header } from "../Header/Header";
import { Filter } from "../Filter/Filter";
import { Cards } from "../Cards/Cards";
import { ScrollBar } from "../ScrollBar/ScrollBar";
import { useRef } from "react";

export const Wrapper = () => {
  const contentRef = useRef();
  return (
    <>
      <div className="wrapper" ref={contentRef}>
        <Header />
        <div className="wrapper__content">
          <Filter />
          <Cards />
        </div>
        <ScrollBar contentRef={contentRef} />
      </div>
    </>
  );
};
