import React from "react";
import data from "../../Data/data";
import Header from "./Header";
import Topic from "./Topic";
import Total from "./Total";

const Topics = () => {
  return (
    <div>
      <Total />
      <section className="container">
        <Header />
        <ul className="task-items">
          {data.map((el, i) => (
            <Topic el={el} i={i} link={`/${el.id}`} key={el.id} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Topics;
