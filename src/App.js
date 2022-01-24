import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Questions from "./Components/Question/Questions";
import Topics from "./Components/Topic/Topics";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Topics />} />
          <Route path="/:id" element={<Questions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
