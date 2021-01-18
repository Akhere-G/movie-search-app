import styles from "./App.module.css";
import { Switch, Route } from "react-router-dom";
import { About, Contact, Error, Home, MovieTemplatePage } from "./pages";
import { ScrollUpBtn, Navbar } from "./components";

function App() {
  const links = [
    { name: "home", slug: "/" },
    { name: "about", slug: "/about" },
    { name: "contact", slug: "/contact" },
  ];
  return (
    <div>
      <Navbar links={links} title='Search Movies' />
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
            <MovieTemplatePage />
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
