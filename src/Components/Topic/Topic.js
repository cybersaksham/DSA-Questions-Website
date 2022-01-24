import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import capitalize from "../../Functions/Capitalize";
import data from "../../Data/data";

const Topic = (props) => {
  const { el, i, link } = props;
  const history = useNavigate();

  const [solved, setSolved] = useState(
    JSON.parse(localStorage.getItem("solved")) ?? []
  );

  useEffect(() => {
    setSolved(JSON.parse(localStorage.getItem("solved")) ?? []);
  }, [localStorage.getItem("solved")]);

  const getValue = (id) => {
    let count = 0;
    data.map((el) => {
      if (el.id == id) {
        el.questions.map((ques) => {
          if (Array.from(solved).indexOf(ques.id) !== -1) count++;
        });
        return;
      }
    });
    return count;
  };

  return (
    <li
      className="item"
      onClick={() => history(link)}
      style={{ cursor: "pointer" }}
    >
      <div className="task">
        <div className="name">
          {i !== -1 ? `${i + 1}. ` : ""}
          {capitalize(el.topic)}
        </div>
      </div>

      <div className="status">
        <div className="text">{el.questions.length}</div>
      </div>

      <div className="progress">
        <progress value={String(getValue(el.id))} max={el.questions.length} />
      </div>
    </li>
  );
};

export default Topic;
