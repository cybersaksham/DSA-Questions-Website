import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../Data/data";
import capitalize from "../../Functions/Capitalize";
import Header from "../Topic/Header";
import Topic from "../Topic/Topic";

const Questions = () => {
  const { id } = useParams();

  const [ques, setQues] = useState([]);
  const [topic, setTopic] = useState(null);
  const [solvedChecks, setSolvedChecks] = useState(
    JSON.parse(localStorage.getItem("solved")) ?? []
  );

  useEffect(() => {
    data.map((el) => {
      if (el.id == id) {
        setQues(el.questions);
        setTopic(el);
        return;
      }
    });
  }, []);

  return (
    <div>
      {topic && (
        <section className="container">
          <Header />
          <ul className="task-items">
            <Topic el={topic} i={-1} link={"/"} />
          </ul>
        </section>
      )}
      <section className="container">
        <header>
          <div className="topic-col">
            <label>Question</label>
          </div>

          <div className="questions-col">
            <label>Status</label>
          </div>

          <div className="progress-col">
            <label>Progress</label>
          </div>
        </header>

        <ul className="task-items">
          {ques.map((el, i) => (
            <li className="item" key={el.id}>
              <div className="task">
                <div className="name">
                  {i + 1}. {capitalize(el.question)}
                </div>
              </div>

              <div className="status">
                <label className="switch" style={{ cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      let arr = Array.from(solvedChecks);
                      const ind = arr.indexOf(el.id);

                      if (ind === -1) arr = arr.concat(el.id);
                      else arr.splice(ind, 1);

                      localStorage.setItem("solved", JSON.stringify(arr));
                      setSolvedChecks([...arr]);
                    }}
                    checked={Array.from(solvedChecks).indexOf(el.id) !== -1}
                  />
                  <div></div>
                </label>
              </div>

              <div className="button-col">
                <button
                  className="btn"
                  onClick={() => window.open(el.link, "_blank")}
                  style={{ cursor: "pointer" }}
                >
                  {Array.from(solvedChecks).indexOf(el.id) === -1
                    ? "Solve"
                    : "View"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Questions;
