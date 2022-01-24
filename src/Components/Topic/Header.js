import React from "react";

const Header = () => {
  return (
    <header>
      <div className="topic-col">
        <label>Topic</label>
      </div>

      <div className="questions-col">
        <label>Questions</label>
      </div>

      <div className="progress-col">
        <label>Progress</label>
      </div>
    </header>
  );
};

export default Header;
