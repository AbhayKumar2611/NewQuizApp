// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <h1 className="text-red-300 underline">Hello</h1>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizSetup />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
