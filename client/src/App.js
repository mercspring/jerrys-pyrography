// Dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//reactbootstrap dependencies
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Pages
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Admin from "./pages/admin";
import Thankyou from "./pages/thankyou"
import Sorry from "./pages/sorry"

//Navbar
import NavBar from './components/navbar'

//Heading
import Heading from './components/heading'


//Footer
import Footer from './components/footer'

//css
import "./app.css"



function App() {

  return (
    <Router>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Heading></Heading>
            <NavBar></NavBar>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
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
              <Route exact path={["/contact/thankyou"]}>
                <Thankyou></Thankyou>
              </Route>
              <Route exact path={["/contact/sorry"]}>
                <Sorry></Sorry>
              </Route>
              <Route exact path={["/admin"]}>
                <Admin></Admin>
              </Route>
            </Switch>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Footer></Footer>
      </Container>
    </Router>

  );
}

export default App;
