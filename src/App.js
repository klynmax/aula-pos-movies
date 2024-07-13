import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { Header } from "./Components/Header";
import { MovieDetails } from "./Components/MovieDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
