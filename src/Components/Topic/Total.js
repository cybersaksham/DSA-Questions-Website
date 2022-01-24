import React, { useState, useEffect } from "react";
import data from "../../Data/data";

const Total = () => {
  const [solved, setSolved] = useState(0);
  const [allQues, setAllQues] = useState(0);

  useEffect(() => {
    let count = 0;
    data.map((el) => {
      count += el.questions.length;
    });
    setAllQues(count);
    setSolved((JSON.parse(localStorage.getItem("solved")) ?? []).length);
  }, [localStorage.getItem("solved")]);

  return (
    <section className="container">
      <ul className="task-items">
        <li className="item">
          <div className="task">
            <div className="name">Total</div>
          </div>

          <div className="status">
            <div className="text">{allQues}</div>
          </div>

          <div className="progress">
            <progress value={solved} max={allQues} />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Total;
