import "./App.css";
import { Header } from "./Components/Header";
import { MoviesList } from "./Components/MoviesList";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <MoviesList movies={[]} />
      </section>
    </div>
  );
}

export default App;
