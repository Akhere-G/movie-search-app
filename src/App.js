import styles from "./styles/App.module.css";
import { Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MovieTemplate from "./pages/MovieTemplate";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/About'>
            <About />
          </Route>
          <Route exact path='/Contact'>
            <Contact />
          </Route>
          <Route path='/movie/:id'>
            <MovieTemplate />
          </Route>
          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
      </main>
      <footer className={styles.footer}>
        <p>Akhere Ihoeghinlan &copy; 2020</p>
      </footer>
    </div>
  );
}

export default App;
