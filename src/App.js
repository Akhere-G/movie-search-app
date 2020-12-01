import styles from "./styles/App.module.css";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import MovieTemplate from "./pages/MovieTemplate";
import Navbar from "./components/Navbar";
import ScrollUpBtn from "./components/ScrollUpBtn";

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
      <ScrollUpBtn />
      <footer className={styles.footer}>
        <p>Akhere Ihoeghinlan &copy; 2020</p>
      </footer>
    </div>
  );
}

export default App;
