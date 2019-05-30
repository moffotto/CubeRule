import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Homepage } from './pages/Homepage/Homepage';
import { Navbar, Nav, Image, Row, Col, Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand><Link to="/" className="navLinks white-text">C U B E <Image src="./img/cube_icon_2.png" /> R U L E</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" />
                <Nav>
                  <Link to="/" className="navLinks white-text">Home</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Homepage} />
            </Switch>
          </main>

          <footer>
            <Container>
              <Row>
                <Col xs={{ span: 5, offset: 7 }}>
                  <h5 className="white-text">Attribution</h5>
                  <ul>
                    <li><a className="white-text" href="http://cuberule.com/">Name inspired by The Cube Rule</a></li>
                    <li><a className="white-text" href="https://www.pexels.com/photo/orange-cube-1340185/">Photo by Magda Ehlers from Pexels</a></li>
                    <li><a className="white-text" href="https://icons8.com/icons">Icons by Icons8.com</a></li>
                  </ul>
                </Col>
              </Row>
            </Container>

            <div className="footer-copyright white-text">
              <Container>
                © 2018 [fake] Copyright Text
              </Container>
            </div>
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;
