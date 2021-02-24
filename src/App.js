// Dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

//Navbar
import NavBar from './components/navbar'

//Footer
import Footer from './components/footer'

//css
import "./app.css"



function App() {

  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path={["/", "/about"]}>
          <About></About>
        </Route>
        <Route exact path={["/gallery"]}>
          <Gallery></Gallery>
        </Route>
        <Route exact path={["/contact"]}>
          <Contact></Contact>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;
